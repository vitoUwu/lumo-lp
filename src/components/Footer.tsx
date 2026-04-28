const links = [
  { label: "SERVIÇOS", href: "#" },
  { label: "CASES", href: "#" },
  { label: "SOBRE", href: "#" },
  { label: "CONTATO", href: "mailto:contato@lumotech.space" },
  { label: "PRIVACIDADE", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-stroke px-4 py-14 text-primary sm:px-6 lg:py-16">
      <div className="mx-auto max-w-sm lg:max-w-5xl">
        <div className="flex justify-center items-center gap-5">
          <img src="/logo.png" alt="Lumo Logo" className="size-12" />
          <p className="font-sora text-xl uppercase tracking-[0.18em]">
            Lumo Tech
          </p>
        </div>

        {/* <nav aria-label="Navegação do rodapé" className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-surface">
            Navegação
          </p>
          <ul className="mt-6 flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className="text-sm uppercase text-surface transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav> */}

        <div className="mt-10 text-center">
          <p className="text-xs uppercase leading-5 tracking-[0.02em] text-surface">
            © 2026 LUMO TECH. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
