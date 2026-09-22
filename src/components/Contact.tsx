import { useState } from 'react';
import type { FormEvent } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Phone, 
  MapPin, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Inquiry from Portfolio Website',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all fields before sending.');
      return;
    }

    const mailtoSubject = encodeURIComponent(`${formData.subject} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoLink = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoLink;

    setStatusMessage('Redirecting to your default email application...');
    setTimeout(() => setStatusMessage(null), 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Let's Discuss <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Engineering Opportunities</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for software engineering internships, AI/ML roles, and collaborative technical projects.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-slate-900/60 backdrop-blur-xl p-7 rounded-3xl border border-slate-800/80 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide font-sans">
                  Direct Contact Information
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Reach out directly via email, phone, or professional networks.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3.5">
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Email Address</span>
                      <a href={`mailto:${profileData.email}`} className="text-xs font-semibold text-white hover:text-cyan-300 transition-colors">
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Phone / Mobile</span>
                    <a href={`tel:${profileData.phone.replace(/[^0-9+]/g, '')}`} className="text-xs font-semibold text-white hover:text-indigo-300 transition-colors">
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Location</span>
                    <span className="text-xs font-semibold text-white">
                      {profileData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels Buttons */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 flex items-center justify-between text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 flex items-center justify-between text-xs font-mono text-slate-300 hover:text-indigo-300 hover:border-indigo-500/40 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/60 backdrop-blur-xl p-7 sm:p-9 rounded-3xl border border-slate-800/80 shadow-xl space-y-5 text-left"
            >
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide font-sans flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details below to initiate a direct mail inquiry.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-slate-300">Your Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-slate-300">Your Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-mono text-slate-300">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Inquiry / Software Engineering Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-slate-300">Message *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message, opportunity details, or questions here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all font-sans resize-none"
                />
              </div>

              {statusMessage && (
                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Mail Client</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
