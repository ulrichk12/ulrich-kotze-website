import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Globe, Linkedin, MapPin } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Get in touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Let's connect.</h3>
          <p className="text-slate-600 text-lg mb-12 max-w-xl mx-auto">
            Always open to connecting with fellow engineers and data leaders to share insights and discuss the future of AI.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FadeIn delay={100}>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex flex-col items-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <span className="text-slate-900 font-medium">Email</span>
              <span className="text-slate-500 text-sm mt-1">{CONTACT_INFO.email}</span>
            </a>
          </FadeIn>

          <FadeIn delay={200}>
            <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe size={20} />
              </div>
              <span className="text-slate-900 font-medium">Website</span>
              <span className="text-slate-500 text-sm mt-1">{CONTACT_INFO.website}</span>
            </a>
          </FadeIn>

          <FadeIn delay={300}>
            <a href={`https://${CONTACT_INFO.linkedin}`} target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <span className="text-slate-900 font-medium">LinkedIn</span>
              <span className="text-slate-500 text-sm mt-1">Connect with me</span>
            </a>
          </FadeIn>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <MapPin size={14} />
            <span>{CONTACT_INFO.location}</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Ulrich Kotze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
