import Anchor from "./Anchor";
import Heading from "./Heading";

export default function Hero() {
  return (
    <section className="py-14 xl:py-28 px-6 text-center flex flex-col items-center justify-center gap-6">
      <Heading className="max-w-140">
        Tecnologia que ilumina possibilidades
      </Heading>
      <p className="text-lg text-surface max-w-2xl">
        Transformamos visões complexas em soluções digitais precisas. Engenharia
        de software de alta performance para empresas que buscam liderar.
      </p>
      <Anchor href="mailto:contato@lumotech.space">Fale Conosco</Anchor>
    </section>
  );
}
