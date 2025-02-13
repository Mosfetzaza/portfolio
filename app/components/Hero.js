const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-gradient-to-b from-[#131B4D] to-[#080321]"
    >
      {/* รูปพื้นหลังที่ชิดขวา */}
      <img
        src="/hero/hero-shape-1.svg"
        alt="Hero Shape 1"
        className="absolute top-0 right-0 w-[100%] sm:w-[50%] md:w-[45%] lg:w-[55%] h-auto"
      />

      {/* รูปพื้นหลังที่ชิดซ้าย */}
      <img
        src="/hero/hero-shape-2.svg"
        alt="Hero Shape 2"
        className="absolute top-0 left-0 w-[80%] sm:w-[25%] md:w-[25%] lg:w-[29%] h-auto"
      />

      {/* เนื้อหา Hero */}
      <div className="max-w-screen-lg mx-auto text-center relative justify-items-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-inter)' }}>
          Welcome To Portfolio
        </h1>
        <p className="text-lg md:text-xl mt-4" style={{ fontFamily: 'var(--font-inter)' }}>
          We are a team of passionate Web Developers, dedicated to creating innovative and seamless web experiences. This portfolio showcases our skills and projects. Let’s collaborate and bring your ideas to life!
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-[#3E7DFF] text-white px-6 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#1A5BB8]">
            Hire now and get 45% off
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
