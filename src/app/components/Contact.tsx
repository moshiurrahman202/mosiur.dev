import Button from "./Button";
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Contact</h2>

      <p className="text-muted-foreground mb-4">
        Feel free to reach out for collaboration or job opportunities
      </p>

      <a
        href="mailto:your@email.com"
      >
        <Button>Send Email</Button>
      </a>
    </section>
  );
}