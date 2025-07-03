import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Globe, Send, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'rajankumar39258@gmail.com',
      action: 'Send Email',
      href: 'mailto:rajankumar39258@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect professionally',
      action: 'Connect Now',
      href: 'https://www.linkedin.com/in/rajan-kumar-6280b8206',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'View my code repositories',
      action: 'View Projects',
      href: 'https://github.com/Rajanwa',
      color: 'from-gray-600 to-gray-800'
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      const mailtoLink = `mailto:rajankumar39258@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsLoading(false);
      
      // Show success message (you could add a toast notification here)
      alert('Message sent successfully! Your email client should open now.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-secondary-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-500/30">
            Let's Talk
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
            Ready to start your next data analytics project? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/20">
              <h3 className="text-2xl font-bold text-primary-400 mb-6">
                Let's Connect
              </h3>
              <p className="text-secondary-300 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, collaborations, or data analytics projects. Feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-primary-500/5 rounded-xl border border-primary-500/10 hover:bg-primary-500/10 transition-all duration-300 group hover:translate-x-2"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{method.title}</h4>
                        <p className="text-secondary-400 text-sm mb-2">{method.description}</p>
                        <a
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary-400 text-sm font-semibold hover:text-primary-300 transition-colors"
                        >
                          {method.action}
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                <p className="text-secondary-400">Fill out the form below and I'll get back to you soon</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-secondary-300 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-primary-500/5 border-2 ${errors.name ? 'border-red-500' : 'border-primary-500/20 focus:border-primary-500'} rounded-xl text-white transition-all duration-300 focus:outline-none focus:bg-primary-500/10`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-secondary-300 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-primary-500/5 border-2 ${errors.email ? 'border-red-500' : 'border-primary-500/20 focus:border-primary-500'} rounded-xl text-white transition-all duration-300 focus:outline-none focus:bg-primary-500/10`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-secondary-300 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full p-4 bg-primary-500/5 border-2 ${errors.subject ? 'border-red-500' : 'border-primary-500/20 focus:border-primary-500'} rounded-xl text-white transition-all duration-300 focus:outline-none focus:bg-primary-500/10`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-secondary-300 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full p-4 bg-primary-500/5 border-2 ${errors.message ? 'border-red-500' : 'border-primary-500/20 focus:border-primary-500'} rounded-xl text-white transition-all duration-300 focus:outline-none focus:bg-primary-500/10 resize-vertical`}
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-primary px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;