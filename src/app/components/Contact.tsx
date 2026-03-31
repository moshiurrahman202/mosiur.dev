export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Contact</h2>

      <p className="text-gray-400 mb-4">
        Feel free to reach out for collaboration or job opportunities
      </p>

      <a
        href="mailto:your@email.com"
        className="px-6 py-3 bg-white text-black rounded-full font-medium"
      >
        Send Email
      </a>
    </section>
  );
}