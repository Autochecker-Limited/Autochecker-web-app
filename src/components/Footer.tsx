"use client";

import { useState } from "react";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FooterCTA() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: integrate EmailJS/Formspree or your API
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-slate-950 text-white">
      {/* CTA + Form */}
      <div className="mx-auto max-w-6xl gap-8 px-6 py-12 text-center md:flex md:items-start md:justify-between md:text-left">
        <div className="mb-6 flex-1 md:mb-0">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Join AutoChecker’s Community
          </h2>
          <p className="mt-2 text-gray-300">
            Stay informed with the latest vehicle verification updates and trusted dealer offers.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3" id="contact">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={3}
              className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-6 py-2 font-semibold text-slate-950 shadow-lg transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="mt-8 md:mt-20 md:pl-8">
        <h4 className="mb-3 font-semibold">Quick Links</h4>
        <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-emerald-400">About Us</a></li>
            <li><a href="#how" className="hover:text-emerald-400">How It Works</a></li>
            <li><a href="#features" className="hover:text-emerald-400">Features</a></li>
            <li><a href="#pricing" className="hover:text-emerald-400">Pricing</a></li>
        </ul>
        </div>

        {/* Social */}
        <div className="mt-8 md:mt-20 md:pl-8">
        <h4 className="mb-3 font-semibold">Follow Us</h4>
        <div className="flex space-x-4">
            <a href="#" className="rounded-full bg-slate-800 p-2 transition hover:bg-emerald-400 hover:text-slate-950">
            <FaWhatsapp />
            </a>
            <a href="#" className="rounded-full bg-slate-800 p-2 transition hover:bg-emerald-400 hover:text-slate-950">
            <FaFacebookF />
            </a>
            <a href="#" className="rounded-full bg-slate-800 p-2 transition hover:bg-emerald-400 hover:text-slate-950">
            <FaTwitter />
            </a>
            <a href="#" className="rounded-full bg-slate-800 p-2 transition hover:bg-emerald-400 hover:text-slate-950">
            <FaInstagram />
            </a>
            <a href="#" className="rounded-full bg-slate-800 p-2 transition hover:bg-emerald-400 hover:text-slate-950">
            <FaLinkedinIn />
            </a>
        </div>
        </div>



      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AutoChecker. All rights reserved.
      </div>
    </footer>
  );
}
