import React from 'react';
import { NavLink } from 'react-router-dom';
import { Landmark, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 focus-within:">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo & About */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <Landmark className="h-8 w-8 text-accent" />
                            <span className="font-bold text-2xl tracking-tighter">Nataki Tax Consultancy</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering small businesses and individuals with stress-free tax solutions and expert compliance advisory.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><NavLink to="/" className="hover:text-accent transition-colors">Home</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-accent transition-colors">Services</NavLink></li>
                            <li><NavLink to="/reviews" className="hover:text-accent transition-colors">Client Reviews</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-accent transition-colors">Contact Us</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-accent transition-colors underline decoration-accent/30 decoration-2 underline-offset-4">Book Appointment</NavLink></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><NavLink to="/services" className="hover:text-accent transition-colors">Personal Tax</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-accent transition-colors">Business Compliance</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-accent transition-colors">VAT & GST Services</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-accent transition-colors">Audit Representation</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-accent shrink-0" />
                                <span>Memphis, TN</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-accent shrink-0" />
                                <a href="tel:+19010000000" className="hover:text-accent transition-colors">901-xxxx</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-accent shrink-0" />
                                <a href="mailto:info@taxpro.com" className="hover:text-accent transition-colors">info@taxpro.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
                    <p>© {new Date().getFullYear()} Nataki Tax Consultancy. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-slate-300">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300">Terms of Service</a>
                        <a href="#" className="hover:text-slate-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
