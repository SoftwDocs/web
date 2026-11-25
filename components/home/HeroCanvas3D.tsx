"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInquiry } from "@/components/animations/MotionProvider";

/**
 * Generates a high-contrast equirectangular automotive studio HDRI-style
 * environment map on an offscreen canvas so curved liquid-chrome and
 * glossy crimson clearcoat materials catch sharp specular bands and deep shadows.
 */
function createAutomotiveStudioEnvMap(renderer: THREE.WebGLRenderer): THREE.Texture {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Deep studio obsidian void
    ctx.fillStyle = "#040404";
    ctx.fillRect(0, 0, width, height);

    // Subtle dark metallic horizon band
    const horizonGrad = ctx.createLinearGradient(0, height * 0.44, 0, height * 0.56);
    horizonGrad.addColorStop(0, "rgba(0,0,0,0)");
    horizonGrad.addColorStop(0.5, "rgba(50,50,50,0.45)");
    horizonGrad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = horizonGrad;
    ctx.fillRect(0, height * 0.42, width, height * 0.16);

    // Primary overhead automotive softbox bank (razor-sharp white/silver reflection)
    const overheadGrad = ctx.createLinearGradient(0, 30, 0, 120);
    overheadGrad.addColorStop(0, "rgba(255,255,255,0.05)");
    overheadGrad.addColorStop(0.3, "rgba(255,255,255,1)");
    overheadGrad.addColorStop(0.7, "rgba(245,245,245,0.95)");
    overheadGrad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = overheadGrad;
    ctx.fillRect(width * 0.12, 34, width * 0.76, 86);

    // Secondary crisp white light strip for liquid chrome edge highlights
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(width * 0.18, 162, width * 0.28, 16);
    ctx.fillRect(width * 0.58, 190, width * 0.24, 12);

    // Controlled glossy crimson studio light strips for deep automotive clearcoat catchlights
    const crimsonLeft = ctx.createLinearGradient(width * 0.04, 0, width * 0.22, 0);
    crimsonLeft.addColorStop(0, "rgba(105,0,8,0)");
    crimsonLeft.addColorStop(0.5, "rgba(255,23,36,0.95)");
    crimsonLeft.addColorStop(1, "rgba(105,0,8,0)");
    ctx.fillStyle = crimsonLeft;
    ctx.fillRect(width * 0.04, height * 0.3, width * 0.18, height * 0.42);

    const crimsonRight = ctx.createLinearGradient(width * 0.72, 0, width * 0.92, 0);
    crimsonRight.addColorStop(0, "rgba(105,0,8,0)");
    crimsonRight.addColorStop(0.5, "rgba(255,23,36,1)");
    crimsonRight.addColorStop(1, "rgba(105,0,8,0)");
    ctx.fillStyle = crimsonRight;
    ctx.fillRect(width * 0.72, height * 0.24, width * 0.2, height * 0.48);

    // Crisp lower silver bounce strip
    const floorBounce = ctx.createLinearGradient(0, height * 0.78, 0, height * 0.9);
    floorBounce.addColorStop(0, "rgba(197,197,197,0)");
    floorBounce.addColorStop(0.5, "rgba(225,225,225,0.6)");
    floorBounce.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = floorBounce;
    ctx.fillRect(width * 0.2, height * 0.78, width * 0.6, height * 0.12);
  }

  const equirectTexture = new THREE.CanvasTexture(canvas);
  equirectTexture.mapping = THREE.EquirectangularReflectionMapping;
  equirectTexture.colorSpace = THREE.SRGBColorSpace;

  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const envTarget = pmrem.fromEquirectangular(equirectTexture);

  equirectTexture.dispose();
  pmrem.dispose();
  return envTarget.texture;
}

function buildSculptedRibbon(
  rx: number,
  rz: number,
  height: number,
  turns: number,
  phase: number
): THREE.CatmullRomCurve3 {
  const points: THREE.Vector3[] = [];
  const steps = 128;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const angle = t * Math.PI * 2 * turns + phase;
    const swell = 0.35 + 0.65 * Math.sin(t * Math.PI);
    const x = Math.cos(angle) * rx * swell;
    const y = (t - 0.5) * height + Math.sin(angle * 2) * 0.18;
    const z = Math.sin(angle) * rz * swell;
    points.push(new THREE.Vector3(x, y, z));
  }
  return new THREE.CatmullRomCurve3(points);
}

export function HeroCanvas3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useInquiry();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) {
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.38;
    container.appendChild(renderer.domElement);
    container.style.opacity = "1";

    const scene = new THREE.Scene();
    const envTexture = createAutomotiveStudioEnvMap(renderer);
    scene.environment = envTexture;

    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      100
    );
    camera.position.set(0.3, 0.15, 11.0);

    // Studio Key, Rim, and Moving Specular Sweep Lights
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(4.5, 8, 6.5);
    scene.add(keyLight);

    const silverFill = new THREE.DirectionalLight(0xe5e5e5, 1.8);
    silverFill.position.set(-7, 2.5, 4);
    scene.add(silverFill);

    const crimsonSweepLight = new THREE.PointLight(0xff1724, 55, 18, 1.6);
    crimsonSweepLight.position.set(3.5, -1.5, 3.8);
    scene.add(crimsonSweepLight);

    const chromeSweepLight = new THREE.PointLight(0xffffff, 42, 18, 1.6);
    chromeSweepLight.position.set(-2.5, 3.2, 4.2);
    scene.add(chromeSweepLight);

    // Physical Materials: Mirror Liquid Chrome, Automotive Glossy Crimson, Machined Obsidian
    const liquidChromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf4f4f4,
      metalness: 1.0,
      roughness: 0.035,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      reflectivity: 1.0,
      envMapIntensity: 2.35,
    });

    const automotiveCrimsonMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc20012,
      metalness: 0.52,
      roughness: 0.09,
      clearcoat: 1.0,
      clearcoatRoughness: 0.025,
      ior: 1.65,
      reflectivity: 1.0,
      envMapIntensity: 2.3,
    });

    const darkCrimsonUndercoatMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x520007,
      metalness: 0.65,
      roughness: 0.16,
      clearcoat: 0.9,
      clearcoatRoughness: 0.06,
      envMapIntensity: 1.8,
    });

    const obsidianCarbonMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0b0b0b,
      metalness: 0.78,
      roughness: 0.28,
      clearcoat: 0.7,
      clearcoatRoughness: 0.12,
      envMapIntensity: 1.4,
    });

    // Root Sculptural Assembly
    const sculptureGroup = new THREE.Group();
    const isNarrow = container.clientWidth < 768;
    sculptureGroup.position.set(isNarrow ? 0.1 : 1.75, isNarrow ? -0.25 : 0.0, 0);
    sculptureGroup.rotation.set(0.22, -0.38, -0.16);
    scene.add(sculptureGroup);

    // 1. Monumental Liquid-Chrome Twisted Ribbon A
    const chromeCurveA = buildSculptedRibbon(2.35, 1.75, 6.2, 1.3, 0);
    const chromeGeoA = new THREE.TubeGeometry(chromeCurveA, 180, 0.19, 32, false);
    sculptureGroup.add(new THREE.Mesh(chromeGeoA, liquidChromeMaterial));

    // 2. Interlocking Automotive-Crimson Lacquer Ribbon
    const crimsonCurve = buildSculptedRibbon(1.92, 1.92, 5.6, 1.2, Math.PI * 0.95);
    const crimsonGeo = new THREE.TubeGeometry(crimsonCurve, 180, 0.24, 32, false);
    sculptureGroup.add(new THREE.Mesh(crimsonGeo, automotiveCrimsonMaterial));

    // 3. Fine Secondary Chrome Tension Blade
    const chromeCurveB = buildSculptedRibbon(2.65, 1.35, 6.6, 0.9, Math.PI * 0.45);
    const chromeGeoB = new THREE.TubeGeometry(chromeCurveB, 140, 0.075, 20, false);
    sculptureGroup.add(new THREE.Mesh(chromeGeoB, liquidChromeMaterial));

    // 4. Sculpted Faceted Architectural Monolith Core (Extruded precision blades)
    const finShape = new THREE.Shape();
    finShape.moveTo(-0.52, -2.55);
    finShape.lineTo(0.48, -1.9);
    finShape.lineTo(0.32, 2.55);
    finShape.lineTo(-0.34, 1.98);
    finShape.closePath();

    const finGeo = new THREE.ExtrudeGeometry(finShape, {
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.05,
      bevelSegments: 4,
    });
    finGeo.center();

    const finConfigs = [
      { pos: [0, 0, 0], rot: [0.08, 0.4, 0.14], scale: 1.08, mat: obsidianCarbonMaterial },
      { pos: [0.68, 0.25, -0.45], rot: [-0.14, 1.02, -0.2], scale: 0.88, mat: automotiveCrimsonMaterial },
      { pos: [-0.66, -0.24, 0.48], rot: [0.22, -0.42, 0.24], scale: 0.76, mat: liquidChromeMaterial },
      { pos: [0.18, -0.45, 0.65], rot: [0.34, 0.72, -0.1], scale: 0.56, mat: darkCrimsonUndercoatMaterial },
    ] as const;

    const edgeLines: THREE.LineSegments[] = [];
    finConfigs.forEach((cfg) => {
      const mesh = new THREE.Mesh(finGeo, cfg.mat);
      mesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      mesh.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
      mesh.scale.setScalar(cfg.scale);

      if (cfg.mat === obsidianCarbonMaterial) {
        const edges = new THREE.EdgesGeometry(finGeo, 20);
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({
            color: 0xf5f5f5,
            transparent: true,
            opacity: 0.42,
          })
        );
        mesh.add(line);
        edgeLines.push(line);
      }

      sculptureGroup.add(mesh);
    });

    // Pointer, Intro Dolly, & GSAP ScrollTrigger Camera Choreography
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const scrollState = { progress: 0 };
    const introState = { camZ: 10.8, groupScale: 0.82 };

    gsap.registerPlugin(ScrollTrigger);
    const gsapCtx = gsap.context(() => {
      gsap.to(introState, {
        camZ: 6.95,
        groupScale: 1.05,
        duration: 1.8,
        ease: "power3.out",
      });

      gsap.to(scrollState, {
        progress: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 0.55,
        },
      });
    }, container);

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = Math.max(container.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      if (width < 768) {
        sculptureGroup.position.set(0.1, -0.25, 0);
      } else {
        sculptureGroup.position.set(1.75, 0.0, 0);
      }
    });
    resizeObserver.observe(container);

    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      // Dynamic moving studio lights so metallic reflections glide smoothly across curves
      crimsonSweepLight.position.x = Math.cos(t * 0.55) * 4.5 + 1.5;
      crimsonSweepLight.position.y = Math.sin(t * 0.42) * 3.0;
      chromeSweepLight.position.x = Math.sin(t * 0.48) * 4.5;
      chromeSweepLight.position.y = Math.cos(t * 0.35) * 3.5;

      sculptureGroup.scale.setScalar(introState.groupScale);
      sculptureGroup.rotation.y =
        -0.38 + t * 0.16 + pointer.x * 0.36 + scrollState.progress * 1.1;
      sculptureGroup.rotation.x =
        0.22 - pointer.y * 0.24 + scrollState.progress * 0.32;
      sculptureGroup.rotation.z = -0.16 + Math.sin(t * 0.35) * 0.04;

      camera.position.x = 0.35 + pointer.x * 0.65;
      camera.position.y = 0.15 - pointer.y * 0.45 + scrollState.progress * 1.05;
      camera.position.z = introState.camZ + scrollState.progress * 1.95;
      camera.lookAt(container.clientWidth < 768 ? 0.1 : 1.1, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      gsapCtx.revert();

      chromeGeoA.dispose();
      crimsonGeo.dispose();
      chromeGeoB.dispose();
      finGeo.dispose();
      liquidChromeMaterial.dispose();
      automotiveCrimsonMaterial.dispose();
      darkCrimsonUndercoatMaterial.dispose();
      obsidianCarbonMaterial.dispose();
      edgeLines.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      envTexture.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      container.style.opacity = "0";
    };
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('/images/crimson-chrome-monolith.jpg')",
        }}
      />
      <div
        ref={containerRef}
        className="absolute inset-0 bg-[#080808] opacity-0 transition-opacity duration-500"
      />
    </div>
  );
}
