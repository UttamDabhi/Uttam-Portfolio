import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get In <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "umdabhi2004@email.com" },
                { icon: Phone, title: "Phone", value: "+91 99780 95704" },
                { icon: MapPin, title: "Location", value: "Ahmedabad, Gujarat, India" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full text-white">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
              {submitted ? (
                <p className="text-green-600 text-center font-semibold">
                  ✅ Thank you! Your message has been sent.
                </p>
              ) : (
                <form
                  action="https://formsubmit.co/el/cagoho"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                  className="space-y-6"
                >
                  {/* Hidden Inputs for FormSubmit */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://your-portfolio-domain.com/#contact" />
                  <input type="hidden" name="_subject" value="New Contact Message from Portfolio Website" />

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      onChange={handleChange}
                      value={formData.name}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-700 border rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      onChange={handleChange}
                      value={formData.email}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-700 border rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      onChange={handleChange}
                      value={formData.message}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-700 border rounded-lg focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
