/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartnershipsSection } from './components/PartnershipsSection';
import { KineticMarqueeSection } from './components/KineticMarqueeSection';
import { ServicesSection } from './components/ServicesSection';
import { GlobalTechReachSection } from './components/GlobalTechReachSection';
import { ExternalWorkSection } from './components/ExternalWorkSection';
import { ProductsPreviewSection } from './components/ProductsPreviewSection';
import { ProcessSection } from './components/ProcessSection';
import { AodaSection } from './components/AodaSection';
import { StatsSection } from './components/StatsSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { CollectionSeoPage, type HubRoutePath } from './components/CollectionSeoPage';
import { InteractiveModal, type ModalState } from './components/InteractiveModal';
import {
  ALL_SERVICES,
  type PricingPlan,
  type ServiceDetail,
  type UpcomingProduct,
} from './data/softwdocsData';

type ActiveRoute =
  | { type: 'home' }
  | { type: 'service'; service: ServiceDetail }
  | { type: 'hub'; path: HubRoutePath };

function resolveRoute(pathname: string): ActiveRoute {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (
    clean === '/services' ||
    clean === '/external-work' ||
    clean === '/global-tech-services' ||
    clean === '/seo-hub'
  ) {
    return { type: 'hub', path: clean };
  }

  const parts = clean.split('/').filter(Boolean);
  if (parts.length === 2 && (parts[0] === 'services' || parts[0] === 'external-work')) {
    const found = ALL_SERVICES.find((s) => s.slug === parts[1]);
    if (found) return { type: 'service', service: found };
  }

  return { type: 'home' };
}

export default function App() {
  const [modal, setModal] = useState<ModalState>(null);
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [route, setRoute] = useState<ActiveRoute>(() => resolveRoute(window.location.pathname));

  useEffect(() => {
    const onPopState = () => {
      setRoute(resolveRoute(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const openServicePage = useCallback((service: ServiceDetail) => {
    const base = service.division === 'external' ? '/external-work' : '/services';
    const nextUrl = `${base}/${service.slug}`;
    if (window.location.pathname !== nextUrl) {
      window.history.pushState({ url: nextUrl }, '', nextUrl);
    }
    setRoute({ type: 'service', service });
  }, []);

  const openSeoHubPage = useCallback((path: HubRoutePath) => {
    if (window.location.pathname !== path) {
      window.history.pushState({ url: path }, '', path);
    }
    setRoute({ type: 'hub', path });
  }, []);

  const navigateHome = useCallback((sectionId?: string) => {
    if (window.location.pathname !== '/') {
      window.history.pushState({ url: '/' }, '', '/');
    }
    setRoute({ type: 'home' });

    setTimeout(() => {
      if (!sectionId || sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 90);
  }, []);

  const handleInquiry = useCallback(
    (msg: string) => {
      setPrefilledMessage(msg);
      navigateHome('contact');
    },
    [navigateHome]
  );

  const handleSelectPlan = (plan: PricingPlan) => {
    handleInquiry(
      `Interested in the ${plan.name} plan (${plan.price} ${plan.cadence}). Please share next steps.`
    );
  };

  const handleEarlyAccess = (product: UpcomingProduct) => {
    handleInquiry(
      `Early Access Request for ${product.name} (${product.category} — ${product.eta}). Please notify me when available.`
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      <Preloader />

      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar
          onSelectService={openServicePage}
          onNavigateSection={navigateHome}
          onOpenSeoPage={openSeoHubPage}
          isDetailView={route.type !== 'home'}
        />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {route.type === 'service' && (
              <ServiceDetailPage
                key={route.service.id}
                service={route.service}
                onBackHome={navigateHome}
                onSelectService={openServicePage}
                onRequestQuote={handleInquiry}
              />
            )}

            {route.type === 'hub' && (
              <CollectionSeoPage
                key={route.path}
                routePath={route.path}
                onBackHome={navigateHome}
                onSelectService={openServicePage}
                onOpenSeoPage={openSeoHubPage}
                onSelectBlogPost={(post) => setModal({ type: 'blog', post })}
                onRequestQuote={handleInquiry}
              />
            )}

            {route.type === 'home' && (
              <div key="home-experience">
                <HeroSection />
                <PartnershipsSection />
                <KineticMarqueeSection />
                <ServicesSection
                  onSelectService={openServicePage}
                  onOpenHub={() => openSeoHubPage('/services')}
                />
                <GlobalTechReachSection
                  onOpenSeoPage={openSeoHubPage}
                  onInquiry={handleInquiry}
                />
                <ExternalWorkSection
                  onSelectService={openServicePage}
                  onOpenHub={() => openSeoHubPage('/external-work')}
                />
                <ProductsPreviewSection onRequestEarlyAccess={handleEarlyAccess} />
                <ProcessSection />
                <AodaSection onOpenAudit={() => setModal({ type: 'aoda' })} />
                <StatsSection />
                <PricingSection onSelectPlan={handleSelectPlan} />
                <TestimonialsSection />
                <BlogSection onSelectPost={(post) => setModal({ type: 'blog', post })} />
                <ContactSection prefilledMessage={prefilledMessage} />
                <LocationSection />
              </div>
            )}
          </AnimatePresence>
        </main>

        <Footer
          onSelectService={openServicePage}
          onNavigateSection={navigateHome}
          onOpenSeoPage={openSeoHubPage}
        />
      </div>

      <InteractiveModal
        modal={modal}
        onClose={() => setModal(null)}
        onInquiry={handleInquiry}
      />
    </div>
  );
}
