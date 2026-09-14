function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#EFEEE9] text-[#171a20] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* CONTACT HEADER + FORM */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-start">

            {/* Small Heading */}
            <p className="mb-10 text-[11px] font-medium uppercase tracking-[0.45em] text-[#555963]">
              Contact Us
            </p>

            {/* Main Heading */}
            <h2 className="max-w-[600px] font-serif text-6xl leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Let’s
              <br />
              Connect
            </h2>

            {/* Description */}
            <p className="mt-10 max-w-[520px] text-base leading-7 text-[#41454d] sm:text-lg">
              Have a project or idea in mind? Let’s connect and build something meaningful.
            </p>

          </div>


          {/* RIGHT SIDE — FORM */}
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="flex flex-col gap-5"
            >
             <input type="hidden" name="form-name" value="contact" />
             
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="h-16 w-full border border-[#bfc1c4] bg-transparent px-6 text-base text-[#171a20] outline-none transition placeholder:text-[#858891] focus:border-[#171a20]"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="h-16 w-full border border-[#bfc1c4] bg-transparent px-6 text-base text-[#171a20] outline-none transition placeholder:text-[#858891] focus:border-[#171a20]"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="min-h-[180px] w-full resize-none border border-[#bfc1c4] bg-transparent px-6 py-5 text-base text-[#171a20] outline-none transition placeholder:text-[#858891] focus:border-[#171a20]"
              ></textarea>

              {/* Send Button */}
              <button
                type="submit"
                className="group flex h-16 w-full items-center justify-center gap-4 bg-[#171a20] text-[12px] font-medium uppercase tracking-[0.3em] text-white transition duration-300 hover:bg-[#30343b]"
              >
                Send Message

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </button>

            </form>
          </div>

        </div>


        {/* DIVIDER */}
        <div className="my-20 h-px w-full bg-[#c9c9c6]"></div>


        {/* CONTACT DETAILS */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0">

          {/* EMAIL */}
          <div className="md:border-r md:border-[#c9c9c6] md:pr-16">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-[#555963]">
              Email
            </p>

            <a
              href="mailto:teboletshokgohla@gmail.com"
              className="break-all font-serif text-xl transition-opacity hover:opacity-60 sm:text-2xl"
            >
              teboletshokgohla@gmail.com
            </a>
          </div>


          {/* GITHUB */}
          <div className="md:pl-16">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-[#555963]">
              GitHub
            </p>

            <a
              href="https://github.com/Tee-0004"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-[#171a20] pb-2 font-serif text-xl transition-opacity hover:opacity-60 sm:text-2xl"
            >
              View GitHub Profile

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;