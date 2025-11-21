import React from 'react';
import { FadeIn } from './FadeIn';

export const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Profile</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Bridging the gap between data science and executive decision-making.
          </h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={200}>
            <p className="text-slate-600 leading-relaxed text-lg">
              I am a Machine Learning Specialist and versatile Data Generalist with a strong foundation in Statistics and extensive hands-on experience in MLOps environments.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4 text-lg">
              My work combines deep technical expertise in machine learning and data science with strategic business insight, enabling me to design and deliver impactful, scalable solutions across diverse industries including Retail, Credit, Supply Chain, Banking, and Healthcare.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-4">Key Focus Areas</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Strategic Decision Making</span>
                </li>
                 <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Machine Learning & MLOps</span>
                </li>
                 <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Technical Leadership</span>
                </li>
                 <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Innovative Data Solutions</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
