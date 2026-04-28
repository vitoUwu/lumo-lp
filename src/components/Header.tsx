import Anchor from "./Anchor";

export default function Header() {
  return (
    <div className="container mx-auto">
      <header className="h-16 text-primary flex items-center justify-between px-6 w-full border-b border-stroke">
        <img
          src="/logo.png"
          width={44}
          height={44}
          alt="Lumo Logo"
          className="size-8"
        />
        <Anchor href="mailto:contato@lumotech.space">Contato</Anchor>
      </header>
    </div>
  );
}
