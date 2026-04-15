export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-border mt-20">
      <p className="text-muted-foreground">
        © {new Date().getFullYear()} Moshiur Rahman. All rights reserved.
      </p>

      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/moshiurrahman202" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mosiurrahman202/" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}