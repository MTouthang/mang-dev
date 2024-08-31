const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="space-y-5 text-center">
        <h2 className="text-2xl font-semibold text-primary-textHightLight">{`06. What's Next`}</h2>
        <h2 className="text-3xl font-extrabold md:text-4xl text-primary-light">
          Get in Touch
        </h2>
        <p className="pl-4 pr-4 mx-auto text-md md:w-2/4 text-primary-light md:pl-0 md:pr-0">
          Currently open to new opportunities! Whether you&apos;re looking to
          collaborate, have a project in mind, or just want to connect, feel
          free to reach out. I&apos;ll do my best to respond!
        </p>
      </div>

      <div className="w-56 mx-auto my-6 rounded hover:bg-primary-textHightLight">
        <a
          href="mailto:ngtouthang96@gmail.com"
          className="block w-56 px-10 py-3 text-sm text-center transition ease-in-out border-2 rounded border-primary-textHightLight bg-primary-bg text-primary-default border-primary-light hover:-translate-y-1 hover:-translate-x-1"
        >
          Say hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
