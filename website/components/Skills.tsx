import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { SKILL_METRICS, SKILLS_LIST } from '../constants';
import { FadeIn } from './FadeIn';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn>
              <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Expertise</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Technical Mastery</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Combining advanced statistical knowledge with modern software engineering practices to build robust, scalable data systems.
              </p>

              <div className="flex flex-wrap gap-3">
                {SKILLS_LIST.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-full border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="h-[400px] w-full flex items-center justify-center relative">
             <FadeIn delay={200} className="w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-white rounded-full opacity-50 filter blur-3xl" />
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_METRICS}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="#4f46e5"
                      strokeWidth={3}
                      fill="#6366f1"
                      fillOpacity={0.2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
