const Contact = () => {
  return (
    <section id="contact">
      <div className="space-y-5 text-center">
        <p className="text-xl text-[#64FFDA]">{`04. What's Next`}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#ccd6f6] font-mono">
          Get in Touch
        </h2>
        <p className="mx-auto md:w-2/4 text-[#8892b0] text-xl pl-4 pr-4 md:pl-0 md:pr-0">
          Currently open to new opportunities! Whether you're looking to
          collaborate, have a project in mind, or just want to connect, feel
          free to reach out. I'll do my best to respond!
        </p>
      </div>

      <div className="w-56 mx-auto my-5 rounded hover:bg-primary-light">
        <a
          href="mailto:ngtouthang96@gmail.com"
          className="block w-56 px-10 py-3 font-mono text-center transition ease-in-out border-2 rounded text-primary-default border-primary-light hover:-translate-y-1 hover:-translate-x-1 bg-primary-bg"
        >
          Say hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
