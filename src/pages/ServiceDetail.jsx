import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.slug === slug);

    useEffect(() => {
        if (!service) {
            navigate('/services');
        }
        window.scrollTo(0, 0);
    }, [service, navigate]);

    if (!service) return null;

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title={service.title}
                description={service.desc}
            />

            {/* Breadcrumb & Back */}
            <div className="bg-slate-50 pt-32 pb-8 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/services" className="inline-flex items-center text-sm font-bold text-accent hover:text-accent-hover transition-colors mb-4 group">
                        <ChevronLeft className="h-4 w-4 mr-1 transform group-hover:-translate-x-1 transition-transform" />
                        Back to All Services
                    </Link>
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-primary">
                        {service.fullTitle}
                    </h1>
                </div>
            </div>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-2xl font-bold text-primary mb-6">Service Overview</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {service.longDesc}
                                </p>

                                <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 mb-12">
                                    <h3 className="text-xl font-bold text-primary mb-8">What we offer under this service:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start space-x-3">
                                                <div className="h-6 w-6 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 mt-0.5">
                                                    <CheckCircle2 className="h-4 w-4" />
                                                </div>
                                                <span className="text-slate-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-primary mb-6">Key Benefits</h2>
                                <div className="space-y-6">
                                    {service.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start space-x-4 p-6 rounded-2xl border border-slate-100 hover:border-accent/20 hover:bg-slate-50 transition-all">
                                            <div className="text-accent font-black text-2xl opacity-20">0{idx + 1}</div>
                                            <p className="text-slate-600 font-medium">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                {/* CTA Box */}
                                <div className="bg-primary rounded-3xl p-8 text-white shadow-2xl shadow-primary/20">
                                    <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                                    <p className="text-slate-400 mb-8 text-sm">
                                        Schedule your free 15-minute consultation to discuss your {service.title.toLowerCase()} needs.
                                    </p>
                                    <Link to="/contact" className="btn btn-primary w-full py-4 flex items-center justify-center mb-4">
                                        Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                    <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest font-bold">
                                        No obligation. Confidential expert advice.
                                    </p>
                                </div>

                                {/* Other Services */}
                                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                                    <h3 className="font-bold text-primary mb-6">Explore Other Services</h3>
                                    <div className="space-y-4">
                                        {servicesData.filter(s => s.slug !== slug).slice(0, 4).map((s) => (
                                            <Link
                                                key={s.slug}
                                                to={`/services/${s.slug}`}
                                                className="block p-3 rounded-xl border border-transparent hover:border-accent/10 hover:bg-slate-50 text-sm font-bold text-slate-600 hover:text-accent transition-all"
                                            >
                                                {s.title}
                                            </Link>
                                        ))}
                                        <Link to="/services" className="block text-center text-xs font-bold text-accent hover:underline mt-4">
                                            View All Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
