const Contact = () => {
  return (
    <section>
      <div className="space-y-5 text-center">
        <p className="text-xl text-[#64FFDA]">04. What's Next</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#ccd6f6] font-mono">
          Get in Touch
        </h2>
        <p className="mx-auto md:w-2/4 text-[#8892b0] text-xl pl-4 pr-4 md:pl-0 md:pr-0">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
      </div>
      <div className="hover:bg-[#64FFDA] w-44 rounded mx-auto my-10">
        <button className="px-10 py-3 border-2 rounded text-[#64FFDA] border-[#64FFDA] hover:-translate-y-1 hover:-translate-x-1 bg-[#0A192F] transition ease-in-out w-44 font-mono">
          Say hello
        </button>
      </div>
    </section>
  );
};

export default Contact;
