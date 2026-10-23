import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#projects"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] px-4 py-2 rounded text-sm font-semibold"
        style={{ background: '#00F59B', color: '#08090B' }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
