import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { MyStory } from './components/MyStory';
import { Activities } from './components/Activities';
import { Deployment } from './components/Deployment';
import { HealthcareDataStrategy } from './components/projects/HealthcareDataStrategy';
import { EnterpriseForecasting } from './components/projects/EnterpriseForecasting';

import { MultiClassClassification } from './components/projects/MultiClassClassification';
import { GenomicClassification } from './components/projects/GenomicClassification';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      setCurrentPage(hash || 'home');
    };

    // Set initial page based on hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render project pages
  if (currentPage === 'project-healthcare-data-strategy') {
    return <HealthcareDataStrategy />;
  }
  if (currentPage === 'project-enterprise-forecasting') {
    return <EnterpriseForecasting />;
  }

  if (currentPage === 'project-multi-class-classification') {
    return <MultiClassClassification />;
  }
  if (currentPage === 'project-genomic-classification') {
    return <GenomicClassification />;
  }
  if (currentPage === 'my-story') {
    return <MyStory />;
  }
  if (currentPage === 'activities') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar />
        <main>
          <Activities />
        </main>
        <Contact />
      </div>
    );
  }
  if (currentPage === 'deployment') {
    return (
      <div className="min-h-screen bg-slate-950 font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar darkMode={true} />
        <main>
          <Deployment />
        </main>
        <Contact />
      </div>
    );
  }

  // Render main portfolio page
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
