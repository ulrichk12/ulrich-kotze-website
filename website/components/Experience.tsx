import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';
import { FadeIn } from './FadeIn';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
           <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Timeline</h2>
           <h3 className="text-3xl font-bold text-slate-900 mb-16">Professional Journey</h3>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <FadeIn>
              <div className="flex items-center mb-8">
                <Briefcase className="w-6 h-6 text-slate-400 mr-3" />
                <h4 className="text-xl font-semibold text-slate-900">Experience</h4>
              </div>
            </FadeIn>
            
            <div className="relative border-l border-slate-200 ml-3 space-y-12">
              {EXPERIENCE_DATA.map((item, index) => (
                <div key={item.id} className="pl-8 relative">
                   {/* Dot */}
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-white border-2 border-indigo-500" />
                  
                  <FadeIn delay={index * 100}>
                    <div className="group">
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{item.period}</span>
                      <h5 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-indigo-600 transition-colors">{item.role}</h5>
                      <p className="text-sm font-medium text-slate-500 mb-3">{item.company}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <FadeIn delay={200}>
              <div className="flex items-center mb-8">
                <GraduationCap className="w-6 h-6 text-slate-400 mr-3" />
                <h4 className="text-xl font-semibold text-slate-900">Education</h4>
              </div>
            </FadeIn>

            <div className="relative border-l border-slate-200 ml-3 space-y-12">
              {EDUCATION_DATA.map((item, index) => (
                <div key={item.id} className="pl-8 relative">
                   {/* Dot */}
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-white border-2 border-slate-400" />
                  
                  <FadeIn delay={300 + (index * 100)}>
                    <div className="group">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.period}</span>
                      <h5 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-indigo-600 transition-colors">{item.degree}</h5>
                      <p className="text-sm font-medium text-slate-500 mb-3">{item.institution}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
