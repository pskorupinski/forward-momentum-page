
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl">
              <u><a href="mailto:&#112;&#97;&#119;&#101;&#108;&#64;&#115;&#107;&#111;&#114;&#117;&#112;&#105;&#110;&#115;&#107;&#105;&#46;&#99;&#111;&#109;">Email me</a></u>
              &nbsp;or message me on <u><a href="https://linkedin.com/in/skorupinski" target="_blank" rel="noopener noreferrer">LinkedIn</a></u>.
            </p>
            {/* <div className="glass-card p-8 rounded-xl">
              <form
                action="mailto:pawel@skorupinski.com"
                method="POST"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full py-3"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
