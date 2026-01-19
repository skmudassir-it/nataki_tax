import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import CalendlyEmbed from '../components/CalendlyEmbed';
import SEO from '../components/SEO';

const schema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number required'),
    service: z.string().min(1, 'Please select a service'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data) => {
        // Mock submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form Data:', data);
        setIsSubmitted(true);
    };

    const contactInfo = [
        { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '901-xxxx', link: 'tel:+19010000000' },
        { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'hello@natakitax.com', link: 'mailto:hello@natakitax.com' },
        { icon: <MapPin className="h-5 w-5" />, label: 'Office', value: 'Memphis, TN', link: '#' },
        { icon: <Clock className="h-5 w-5" />, label: 'Hours', value: 'Mon - Fri, 9am - 6pm', link: null },
    ];

    return (
        <div className="bg-white min-h-screen">
            <SEO title="Contact Us" description="Get in touch with Nataki Tax Consultancy for expert tax advice. Book an appointment online or send us a message." />
            {/* Hero */}
            <section className="bg-slate-900 py-24 text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">Let's Talk Strategy.</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Ready to optimize your taxes or need audit support? Reach out today for a confidential consultation.
                    </p>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left: Info & Form */}
                    <div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {contactInfo.map((info, idx) => (
                                    <div key={idx} className="flex items-start space-x-4">
                                        <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{info.label}</div>
                                            {info.link ? (
                                                <a href={info.link} className="text-primary font-bold hover:text-accent transition-colors">{info.value}</a>
                                            ) : (
                                                <div className="text-primary font-bold">{info.value}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-accent/5 border border-accent/20 rounded-3xl p-12 text-center"
                            >
                                <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
                                <p className="text-slate-600 mb-8">Thank you for reaching out. One of our senior advisors will contact you within 24 business hours.</p>
                                <button onClick={() => setIsSubmitted(false)} className="text-accent font-bold hover:underline">Send another message</button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-primary mb-2">Name</label>
                                        <input
                                            {...register('name')}
                                            className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-accent outline-none bg-slate-50 transition-all`}
                                        />
                                        {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-primary mb-2">Email</label>
                                        <input
                                            {...register('email')}
                                            className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-accent outline-none bg-slate-50 transition-all`}
                                        />
                                        {errors.errors?.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-primary mb-2">Phone</label>
                                        <input
                                            {...register('phone')}
                                            className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-accent outline-none bg-slate-50 transition-all`}
                                        />
                                        {errors.phone && <span className="text-xs text-red-500 mt-1">{errors.phone.message}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-primary mb-2">Service</label>
                                        <select
                                            {...register('service')}
                                            className={`w-full px-5 py-4 rounded-xl border ${errors.service ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-accent outline-none bg-slate-50 appearance-none transition-all`}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="personal">Personal Tax</option>
                                            <option value="business">Business Tax</option>
                                            <option value="audit">Audit Support</option>
                                            <option value="planning">Tax Planning</option>
                                        </select>
                                        {errors.service && <span className="text-xs text-red-500 mt-1">{errors.service.message}</span>}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primary mb-2">Message</label>
                                    <textarea
                                        {...register('message')}
                                        rows="4"
                                        className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-accent outline-none bg-slate-50 transition-all`}
                                    ></textarea>
                                    {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>}
                                </div>
                                <button
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full py-5 text-lg flex items-center justify-center shadow-accent/20 shadow-xl disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : <>Send Message <Send className="ml-2 h-5 w-5" /></>}
                                </button>
                                <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
                                    We value your privacy. Your data is encrypted and never shared.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Right: Booking */}
                    <div className="lg:border-l lg:border-slate-100 lg:pl-20">
                        <h2 className="text-3xl font-bold text-primary mb-4">Book Online</h2>
                        <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                            Prefer a direct conversation? Choose a time that works for you from our calendar below.
                        </p>
                        <CalendlyEmbed url="https://calendly.com/acme-tax/30min" />

                        <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100 italic">
                            <h4 className="font-bold text-primary mb-2 not-italic">Emergency Audit Support?</h4>
                            <p className="text-sm text-slate-600">If you have an urgent tax notice or audit deadline, please call our 24/7 hotline directly: <span className="font-bold text-accent">+1 (800) TAX-AUDIT</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Placeholder */}
            <section className="h-[400px] w-full bg-slate-100 flex items-center justify-center overflow-hidden border-t border-slate-200">
                <div className="text-center">
                    <MapPin className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <div className="text-slate-400 font-bold uppercase tracking-widest">Interactive Map Placeholder</div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
