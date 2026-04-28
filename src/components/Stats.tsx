const stats = [
  { value: "+120", label: "Projetos entregues" },
  { value: "+80", label: "Clientes atendidos" },
  { value: "+5 anos", label: "De experiência" },
  { value: "98%", label: "Satisfação" },
];

export default function Stats() {
  return (
    <section className="border-y border-stroke bg-[#1f1f1f] px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-x-8 gap-y-6 text-center lg:max-w-5xl lg:gap-y-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-sora text-4xl font-semibold leading-none tracking-[-0.02em] text-primary lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-4 text-sm font-semibold uppercase leading-5 tracking-[0.08em] text-surface">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
