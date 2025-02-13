const Certifications = () => {
  return (
    <section id="certifications" className="py-32 bg-[#080321]" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* หัวข้อหลัก */}
      <h2 className="text-4xl font-semibold text-center text-white mb-12">Certifications</h2>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-[#14102C] p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out flex flex-col items-center space-y-4 border border-[#232b38]">
          <div className="w-full h-48 overflow-hidden relative">
            <img src="/images/cer-01.svg" alt="Certified Developer" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-2xl text-white">Certified Developer</h3>
            <p className="mt-4 text-white text-sm max-w-xs mx-auto">
              This certification recognizes proficiency in the core principles of software development, coding practices, and application architecture.
              It is awarded to individuals who have demonstrated their ability to build and maintain robust software systems. Issued by Tech Institute in 2021.
            </p>
          </div>
        </div>
        <div className="bg-[#14102C] p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out flex flex-col items-center space-y-4 border border-[#232b38]">
          <div className="w-full h-48 overflow-hidden relative">
            <img src="/images/cer-01.svg" alt="Advanced Programming Certification" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-2xl text-white">Advanced Programming Certification</h3>
            <p className="mt-4 text-white text-sm max-w-xs mx-auto">
              This certification demonstrates advanced knowledge and skills in programming languages and frameworks, including complex algorithms, data structures, and optimization techniques.
              It signifies expertise in tackling complex coding challenges. Issued by Code Academy in 2020.
            </p>
          </div>
        </div>
        <div className="bg-[#14102C] p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out flex flex-col items-center space-y-4 border border-[#232b38]">
          <div className="w-full h-48 overflow-hidden relative">
            <img src='/images/cer-01.svg' alt="Cloud Computing Specialist" className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-2xl text-white">Cloud Computing Specialist</h3>
            <p className="mt-4 text-white text-sm max-w-xs mx-auto">
              The Cloud Computing Specialist certification validates expertise in cloud-based services, infrastructure management, and cloud security best practices.
              It is awarded to individuals who can design, deploy, and maintain scalable cloud solutions. Issued by Cloud Academy in 2022.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
