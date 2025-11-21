import React from 'react';
import { PROJECT_DATA } from '../constants';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, ExternalLink, FileText } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl font-bold text-white mb-16">Selected Projects</h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECT_DATA.map((project, index) => {
            const cardContent = (
              <div className="group relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-2 items-center">
                    <span className="text-xs font-bold text-slate-400 border border-slate-600 px-2 py-1 rounded">{project.year}</span>
                    {project.type === 'demo' ? (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2 py-1 rounded flex items-center gap-1">
                        <ExternalLink size={12} />
                        Demo
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-blue-400 bg-blue-400/10 border border-blue-400/30 px-2 py-1 rounded flex items-center gap-1">
                        <FileText size={12} />
                        Story
                      </span>
                    )}
                  </div>
                  <ArrowUpRight className="text-slate-500 group-hover:text-indigo-400 transition-colors" size={20} />
                </div>

                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                <p className="text-slate-300 leading-relaxed mb-8 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );

            return (
              <FadeIn key={project.id} delay={index * 100}>
                {project.type === 'demo' && project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full cursor-pointer"
                  >
                    {cardContent}
                  </a>
                ) : project.type === 'narrative' && project.narrativeUrl ? (
                  <a
                    href={project.narrativeUrl}
                    className="block h-full cursor-pointer"
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
