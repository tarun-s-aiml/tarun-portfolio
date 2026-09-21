import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback workflow
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-mono border border-brand-cyan/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in discussing an internship, software development role, AI collaboration, or project inquiry? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-cyan" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-dark-950 hover:bg-slate-800 text-slate-300 text-xs border border-slate-700 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-emerald" />
                      <span className="text-brand-emerald font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Email Address</span>
                <a
                  href={`mailto:${profileData.email}`}
                  className="block text-white font-semibold text-sm sm:text-base hover:text-brand-cyan transition-colors mt-0.5"
                >
                  {profileData.email}
                </a>
              </div>
            </div>

            {/* Phone & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-brand-indigo" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Phone</span>
                  <a
                    href={`tel:${profileData.phone.replace(/[^0-9+]/g, '')}`}
                    className="block text-white font-semibold text-xs sm:text-sm hover:text-brand-cyan transition-colors mt-0.5"
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-emerald" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Location</span>
                  <span className="block text-white font-semibold text-xs sm:text-sm mt-0.5">
                    Bangalore, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Accounts */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono block">
                Professional Profiles
              </span>
              
              <div className="space-y-2.5">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-dark-950 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <LinkedinIcon className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
                    <span className="text-slate-200 font-medium group-hover:text-white">LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-dark-950 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all text-xs group"
                >
                  <div className="flex items-center space-x-3">
                    <GithubIcon className="w-4 h-4 text-brand-indigo group-hover:scale-110 transition-transform" />
                    <span className="text-slate-200 font-medium group-hover:text-white">GitHub Repositories</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-9 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-cyan" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Fill out the fields below to initiate an email directly through your default mail client or send a formatted project inquiry.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Opening your email client to dispatch the message to Tarun. You can also email directly at {profileData.email}.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Alex Reed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-xs focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-xs focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g., AI/ML Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-xs focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry, role requirements, or collaboration idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-200 placeholder-slate-600 text-xs focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-cyan text-white text-xs font-bold hover:opacity-95 shadow-lg shadow-brand-indigo/25 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
