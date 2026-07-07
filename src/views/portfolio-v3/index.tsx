'use client';

import NavbarV3 from '@/components/NavbarV3';
import { WORKS } from '@/constant';
import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FooterSection } from './components/FooterSection';
import { HeroSection } from './components/HeroSection';
import { ProjectDrawer } from './components/ProjectDrawer';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';

export default function PortfolioV3Page() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof WORKS)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <div className='min-h-screen bg-slate-950 text-slate-100'>
      <NavbarV3 />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection onSelectProject={setSelectedProject} />
      <ContactSection />
      <FooterSection />
      <ProjectDrawer
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
