import React from 'react';
import { FadeIn } from './FadeIn';
import { Cloud, Server, Globe, Shield, Box, Cpu } from 'lucide-react';

export const Deployment: React.FC = () => {
    return (
        <section id="deployment" className="py-24 bg-slate-950 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <h2 className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-3">Engineering Excellence</h2>
                    <h3 className="text-3xl font-bold text-white mb-6">Infrastructure & Deployment</h3>
                    <p className="text-slate-400 max-w-2xl mb-16 text-lg leading-relaxed">
                        This portfolio and all associated demo projects are deployed using a modern, cloud-native stack on Google Cloud Platform.
                        Every piece of infrastructure is defined as code, ensuring reproducibility, security, and scalability.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Cloud Native */}
                    <FadeIn delay={100}>
                        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 h-full group">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <Cloud className="text-blue-400" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Cloud Native</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Built on <strong>Google Cloud Run</strong> for serverless scalability. Applications are containerized using <strong>Docker</strong> and stored in Artifact Registry, ensuring consistent environments from dev to prod.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 2: IaC */}
                    <FadeIn delay={200}>
                        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 h-full group">
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                                <Box className="text-indigo-400" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Infrastructure as Code</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Entire infrastructure provisioned via <strong>Terraform</strong>. From IAM roles and Service Accounts to Cloud Run services and Domain Mappings, nothing is manual.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 3: Subdomains */}
                    <FadeIn delay={300}>
                        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 h-full group">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                <Globe className="text-emerald-400" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Subdomain Strategy</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Each demo project lives on its own dedicated subdomain (e.g., <code>demo.ulrichkotze.com</code>). This isolation allows for independent scaling, security policies, and technology stacks per project.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 4: CI/CD & Automation */}
                    <FadeIn delay={400}>
                        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 h-full group">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                                <Cpu className="text-purple-400" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Automated Pipelines</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Deployments are automated. Changes to the codebase trigger build pipelines that test, build Docker images, and deploy new revisions to Cloud Run with zero downtime.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 5: Security */}
                    <FadeIn delay={500}>
                        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 h-full group">
                            <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-500/20 transition-colors">
                                <Shield className="text-rose-400" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Enterprise Security</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Least-privilege <strong>IAM</strong> roles, managed Service Accounts, and automatic TLS/SSL termination. Security is baked into the infrastructure definition, not an afterthought.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 6: Tech Stack */}
                    <FadeIn delay={600}>
                        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 h-full group">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                                <Server className="text-amber-400" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Modern Stack</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {['React', 'TypeScript', 'Vite', 'Tailwind', 'Terraform', 'GCP', 'Docker'].map(tech => (
                                    <span key={tech} className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
