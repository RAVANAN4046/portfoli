import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Particles from '../../../ReactBits/Particles/Particles';
import Magnet from '../../../ReactBits/Magnet/Magnet';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    emailjs.init('O3_DYp6hff5LrWnSq');
  }, []);

  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    const formData = new FormData(form.current);
    const templateParams = {
      from_name: formData.get('from_name'),
      reply_to: formData.get('reply_to'),
      message: formData.get('message'),
      to_name: 'Admin'
    };

    try {
      await emailjs.send(
        'service_bl9q3r9',
        'template_8e97mee',
        templateParams,
        'O3_DYp6hff5LrWnSq'
      );
      setStatus({ submitting: false, submitted: true, error: null });
      form.current.reset();
      setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
    } catch (error) {
      console.error('EMAILJS ERROR:', error);
      setStatus({ submitting: false, submitted: false, error: error.text });
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-black min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-20 text-center overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={['#ffffff', '#888888']}
          particleCount={150}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Contact Me</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 max-w-lg mx-auto">
          If you'd like to work together or just say hi, feel free to reach out!
        </p>
        
        {status.submitted && (
          <div className="mb-4 sm:mb-6 text-green-400 text-sm sm:text-base">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        
        {status.error && (
          <div className="mb-4 sm:mb-6 text-red-400 text-sm sm:text-base">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}

        <form
          ref={form}
          className="space-y-4 sm:space-y-6 w-full"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 sm:py-3 bg-gray-900 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 sm:py-3 bg-gray-900 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-2 sm:py-3 bg-gray-900 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          ></textarea>

          {/* Magnetized Button */}
          <div className="flex justify-center">
            <Magnet padding={50} disabled={status.submitting} magnetStrength={50}>
              <button
                type="submit"
                disabled={status.submitting}
                className="bg-blue-600 text-white font-semibold px-6 py-2 sm:py-3 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50 text-sm sm:text-base"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </Magnet>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
