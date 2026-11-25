"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { MotionConfig } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InquiryModal } from "@/components/ui/InquiryModal";

interface InquiryContextValue {
  isOpen: boolean;
  initialTopic: string;
  openInquiry: (topic?: string) => void;
  closeInquiry: () => void;
  prefersReducedMotion: boolean;
}

const InquiryContext = createContext<InquiryContextValue>({
  isOpen: false,
  initialTopic: "",
  openInquiry: () => {},
  closeInquiry: () => {},
  prefersReducedMotion: false,
});

export function useInquiry() {
  return useContext(InquiryContext);
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialTopic, setInitialTopic] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);
    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  const openInquiry = useCallback((topic = "") => {
    setInitialTopic(topic);
    setIsOpen(true);
  }, []);

  const closeInquiry = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <InquiryContext.Provider
        value={{
          isOpen,
          initialTopic,
          openInquiry,
          closeInquiry,
          prefersReducedMotion,
        }}
      >
        {children}
        <InquiryModal />
      </InquiryContext.Provider>
    </MotionConfig>
  );
}
