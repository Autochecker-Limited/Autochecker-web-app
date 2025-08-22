"use client";

import { useState } from "react";
import { quickLinks, socialLinks } from "@/components/Constants/pages/footer";

export default function FooterCTA() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section
            id="contact"
            className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300"
        >
            <div className="mx-auto max-w-6xl gap-8 px-6 py-12 text-center md:flex md:items-start md:justify-between md:text-left">
                {/* Tagline */}


                {/* Contact Form */}
                <div className="mb-6 flex-1 md:mb-0">
                    <div className="mx-auto max-w-6xl px-6 pb-4 text-center">
                        <p className="mb-4 inline-block rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
                            Contact • Navigate • Connect
                        </p>
                    </div>
                    <h2 className="text-2xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        Join AutoChecker’s Community
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Stay informed with the latest vehicle verification updates and trusted dealer offers.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-slate-900 focus:border-emerald-400 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-slate-900 focus:border-emerald-400 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows={3}
                            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-slate-900 focus:border-emerald-400 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full rounded-md bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 px-6 py-2 font-semibold text-slate-950 shadow-lg transition hover:opacity-90"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Quick Links */}
                <div className="mt-8 md:mt-20 md:pl-8">
                    <h4 className="mb-3 font-semibold">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="hover:text-emerald-400 hover:underline hover:underline-offset-2">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div className="mt-8 md:mt-20 md:pl-8">
                    <h4 className="mb-3 font-semibold">Follow Us</h4>
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="rounded-full bg-gray-200 p-2 transition hover:bg-emerald-400 dark:hover:bg-emerald-400
                                    hover:text-slate-950 dark:bg-slate-800 text-emerald-400"
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-4 text-center text-sm text-gray-500 dark:border-slate-800 dark:text-gray-400">
                © {new Date().getFullYear()} AutoChecker. All rights reserved. |{" "}
                <a href="/privacy" className="hover:text-emerald-400">Privacy Policy</a> |{" "}
                <a href="/terms" className="hover:text-emerald-400">Terms of Service</a>
            </div>
        </section>
    );
}
