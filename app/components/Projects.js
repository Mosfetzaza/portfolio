'use client';

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-[#080321]" style={{ fontFamily: 'var(--font-inter)' }}>
      <div className="max-w-screen-xl mx-auto text-center px-6">
        {/* หัวข้อของโปรเจกต์ */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* การ์ดโปรเจกต์ 1 */}
          <div className="bg-[#14102C] p-6 cursor-pointer transform transition-all duration-300 hover:scale-105">
            <div className="relative">
              <img
                src='/images/blog-01.webp'
                alt="UI components"
                className="w-full h-56 object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mt-4 text-white text-left">Best UI components for modern websites</h3>
            <p className="mt-2 text-gray-400 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
            </p>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <div>
                <p className="font-medium text-white">By Samuyl Joshi</p>
                <p className="text-xs text-gray-400">Graphic Designer</p>
              </div>
              <div>
                <p className="font-medium text-white">Date</p>
                <p className="text-xs text-gray-400">2025</p>
              </div>
            </div>
          </div>

          {/* การ์ดโปรเจกต์ 2 */}
          <div className="bg-[#14102C] p-6 cursor-pointer transform transition-all duration-300 hover:scale-105">
            <div className="relative">
              <img
                src='/images/blog-02.webp'
                alt="Design Skills"
                className="w-full h-56 object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mt-4 text-white text-left">9 simple ways to improve your design skills</h3>
            <p className="mt-2 text-gray-400 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
            </p>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <div>
                <p className="font-medium text-white">By Musharof Chy</p>
                <p className="text-xs text-gray-400">Content Writer</p>
              </div>
              <div>
                <p className="font-medium text-white">Date</p>
                <p className="text-xs text-gray-400">2025</p>
              </div>
            </div>
          </div>

          {/* การ์ดโปรเจกต์ 3 */}
          <div className="bg-[#14102C] p-6 cursor-pointer transform transition-all duration-300 hover:scale-105">
            <div className="relative">
              <img
                src='/images/blog-03.webp'
                alt="Coding Speed"
                className="w-full h-56 object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mt-4 text-white text-left">Tips to quickly improve your coding speed.</h3>
            <p className="mt-2 text-gray-400 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.
            </p>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <div>
                <p className="font-medium text-white">By Lethium Deo</p>
                <p className="text-xs text-gray-400">Graphic Designer</p>
              </div>
              <div>
                <p className="font-medium text-white">Date</p>
                <p className="text-xs text-gray-400">2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
