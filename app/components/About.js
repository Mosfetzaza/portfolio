'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [popupContent, setPopupContent] = useState('');

  const handleReadMore = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="about" className="py-32 text-white bg-[#080321]" style={{ fontFamily: 'var(--font-inter)' }}>
      <div className="max-w-screen-xl mx-auto text-center px-6">
        {/* About section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">About</h2>

        {/* Container for CardBox */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Profile Card 1 (Your profile) */}
          <div className="bg-[#14102C] p-6 md:p-8 shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <imgage
                src="/profiles/pro1.jpg"
                alt="Sirayut Petchanon"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Sirayut Petchanon</h3>
            <p className="text-gray-300">
              <strong>Position:</strong> Full-stack Developer
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> sirayut.petchanon@gmail.com
            </p>
            <p className="text-gray-300">
              <strong>Location:</strong> Thailand
            </p>
            <p className="text-gray-300">
              Passionate about web development, specializing in Next.js, Tailwind CSS, and full-stack technologies.
            </p>
            {/* Read More button */}
            <button
              onClick={() => handleReadMore(
                'Sirayu Petchara  non\n\n' +
                '🎓 Education\n' +
                '• Vocational Certificate in Information and Communication Technology\n' +
                '• Vocational Certificate in Information Technology\n\n' +
                '🏢 Internship Experience\n' +
                '• Maintenance Technician\n' +
                '• Responsible for troubleshooting and repairing technical issues\n' +
                '• Assisted in maintaining IT infrastructure and hardware\n\n' +
                '💻 Programming Skills\n' +
                '• Frontend: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS\n' +
                '• Backend: Node.js, PHP\n' +
                '• Database: MySQL'
              )}
              className="bg-[#4A6CF7] text-white px-6 py-2 hover:bg-[#3a58c3] mt-4"
            >
              Read More
            </button>
          </div>

          {/* Profile Card 2 (Boonrit's profile) */}
          <div className="bg-[#14102C] p-6 md:p-8 shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <imgage
                src="/profiles/pro2.jpg"
                alt="Boonrit Thadnoy"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Boonrit Thadnoy</h3>
            <p className="text-gray-300">
              <strong>Position:</strong> UX/UI Designer
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> boonrit.thadnoy@gmail.com
            </p>
            <p className="text-gray-300">
              <strong>Location:</strong> Thailand
            </p>
            <p className="text-gray-300">
              Dedicated to crafting intuitive user experiences and passionate about blending aesthetics with functionality.
            </p>

            {/* Read More button */}
            <button
              onClick={() => handleReadMore(
                'Boonrit Thadnoy\n\n' +
                '🎓 Education\n' +
                '• Bachelor’s Degree in Design\n\n' +
                '🏢 Internship Experience\n' +
                '• UX/UI Designer\n' +
                '• Designed user interfaces and experiences for various web and mobile apps\n' +
                '• Worked closely with development teams to implement designs\n\n' +
                '💻 Skills\n' +
                '• Design Tools: Figma, Sketch, Adobe XD\n' +
                '• User Research & Testing\n' +
                '• UI/UX Design and Prototyping'
              )}
              className="bg-[#4A6CF7] text-white px-6 py-2 hover:bg-[#3a58c3] mt-4"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1b2330] p-6 md:p-8 shadow-lg max-w-lg w-full"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">More Information</h3>
              <pre className="text-gray-300 whitespace-pre-wrap">{popupContent}</pre>
              <button
                onClick={handleClosePopup}
                className="bg-red-500 text-white px-6 py-2 hover:bg-red-600"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
