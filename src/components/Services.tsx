import Heading from "./Heading";

type Service = {
  icon: "code" | "cloud" | "ai" | "consulting";
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "code",
    title: "Desenvolvimento de Software",
    description:
      "Arquiteturas robustas e escaláveis, desenvolvidas com as melhores práticas de engenharia.",
  },
  {
    icon: "cloud",
    title: "Cloud & Infraestrutura",
    description:
      "Migração, otimização e gestão de infraestruturas em nuvem de alta disponibilidade.",
  },
  {
    icon: "ai",
    title: "IA & Automação",
    description:
      "Integração de inteligência artificial para otimizar processos e gerar insights precisos.",
  },
  {
    icon: "consulting",
    title: "Consultoria Tecnológica",
    description:
      "Direcionamento estratégico para adoção tecnológica e transformação digital estruturada.",
  },
];

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const baseProps = {
    className: "h-6 w-6 text-primary",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (icon) {
    case "code":
      return (
        <svg {...baseProps}>
          <path d="m9 8-4 4 4 4" />
          <path d="m15 8 4 4-4 4" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...baseProps}>
          <path d="M6 18h11a4 4 0 0 0 0-8 6 6 0 0 0-11.6-1.8A4.5 4.5 0 0 0 6 18Z" />
          <path d="M9 18h6" />
        </svg>
      );
    case "ai":
      return (
        <svg {...baseProps}>
          <path d="M8 9V7" />
          <path d="M16 9V7" />
          <path d="M7 14h10" />
          <path d="M9 17h6" />
          <rect height="10" width="14" x="5" y="9" />
          <path d="M12 5v2" />
          <path d="M3 14h2" />
          <path d="M19 14h2" />
        </svg>
      );
    case "consulting":
      return (
        <svg {...baseProps}>
          <path d="M12 21v-3" />
          <path d="M9 18h6" />
          <path d="M9 14a5 5 0 1 1 6 0c-.8.6-1.2 1.2-1.2 2h-3.6c0-.8-.4-1.4-1.2-2Z" />
          <path d="M12 7v2" />
          <path d="M10 10h4" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section className="px-4 pb-12 pt-6 sm:px-6 lg:pb-16">
      <div className="mx-auto container flex flex-col items-center gap-6">
        <div className="text-center">
          <Heading
            level={2}
            className="text-2xl font-semibold tracking-[-0.01em] text-primary lg:text-4xl"
          >
            Nossos Serviços
          </Heading>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-2 2xl:grid-cols-4">
          {services.map((service) => (
            <article
              className="border border-stroke bg-[#1f1f1f] p-6"
              key={service.title}
            >
              <ServiceIcon icon={service.icon} />
              <Heading className="mt-4 text-xl leading-7 text-primary">
                {service.title}
              </Heading>
              <p className="mt-4 text-sm leading-6 text-surface">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
