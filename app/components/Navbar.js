'use client';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // ควบคุมเมนูมือถือ
  const [activeSection, setActiveSection] = useState(''); // ควบคุม section ที่ active

  // ฟังก์ชันเลื่อนนุ่มนวลไปยังเป้าหมาย
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // ปิดเมนูมือถือเมื่อคลิก
  };

  // ตั้งค่า IntersectionObserver เพื่อตรวจจับการเลื่อนถึงแต่ละ section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // เปลี่ยน active section เมื่อเข้ามาใน viewport
          }
        });
      },
      { threshold: 0.5 } // ตรวจจับเมื่อ section นั้นๆ อยู่ในมุมมอง 50%
    );

    // เลือกแต่ละ section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      // ยกเลิกการสังเกตการณ์เมื่อคอมโพเนนต์ unmount
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full p-4 z-50 transition-all duration-300 bg-transparent`} style={{ fontFamily: 'var(--font-inter)' }}>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('#hero')}>
          PORTFOLIO
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li>
            <button
              onClick={() => scrollToSection('#hero')}
              className={`hover:text-gray-300 ${activeSection === 'hero' ? 'border-b-2 border-white' : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('#about')}
              className={`hover:text-gray-300 ${activeSection === 'about' ? 'border-b-2 border-white' : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('#projects')}
              className={`hover:text-gray-300 ${activeSection === 'projects' ? 'border-b-2 border-white' : ''}`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('#certifications')}
              className={`hover:text-gray-300 ${activeSection === 'certifications' ? 'border-b-2 border-white' : ''}`}
            >
              Certifications
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('#contact')}
              className={`hover:text-gray-300 ${activeSection === 'contact' ? 'border-b-2 border-white' : ''}`}
            >
              Contact Me
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu (พื้นหลังใส) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full bg-[#1E232E] bg-opacity-10 backdrop-blur-sm shadow-lg"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 text-white">
              <li><button onClick={() => scrollToSection('#hero')}>Home</button></li>
              <li><button onClick={() => scrollToSection('#about')}>About</button></li>
              <li><button onClick={() => scrollToSection('#projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('#certifications')}>Certifications</button></li>
              <li><button onClick={() => scrollToSection('#contact')}>Contact Me</button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
