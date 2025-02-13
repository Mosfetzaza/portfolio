const Contact = () => {
    return (
      <section id="contact" className="py-32  text-white bg-[#080321]">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
          <p className="text-lg mb-12">
            If you have any questions or just want to say hello, feel free to reach out. I'd love to hear from you!
          </p>
  
          {/* Contact Form Box */}
          <div className="bg-[#14102C] p-8 shadow-lg max-w-4xl mx-auto text-left">
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 just">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full mt-2 p-3 bg-[#3b4f62] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4A6CF7] rounded-none"
                    required
                  />
                </div>
  
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full mt-2 p-3 bg-[#3b4f62] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4A6CF7] rounded-none"
                    required
                  />
                </div>
              </div>
  
              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-lg font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full mt-2 p-3 bg-[#3b4f62] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-[#4A6CF7] rounded-none"
                  required
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 mt-6 bg-[#3E7DFF] text-white text-lg font-semibold rounded-none shadow-md hover:bg-[#1A5BB8] transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  