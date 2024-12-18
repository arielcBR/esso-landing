import { PreviousProjectCard } from "./PreviousProjectCard";
import tornoImage from "/images/tornoImage.jpeg";
import calandraImage from "/images/calandraImage.jpeg";
import CNCImage from "/images/CNCImage.jpeg";

export function OurWork() {
  return (
    <section id="OurWork" className="container flex flex-col gap-4 py-4">
      <h5 className="text-center text-white text-xl font-bold text mb-3">
        Nosso trabalho
      </h5>
      <div className="flex flex-col items-center gap-8">
        <PreviousProjectCard
          image={tornoImage}
          title="Torno Mecânico Adequado à NR12"
          description="Adequação completa às normas de segurança, garantindo operações seguras e eficientes."
        />
        <PreviousProjectCard
          image={calandraImage}
          title="Calandra CNC Adequada à NR12"
          description="Conformidade total com as normas de segurança, promovendo trabalho seguro e preciso."
        />
        <PreviousProjectCard
          image={CNCImage}
          title="Centro de Usinagem com Adequação à NR12 e Retrofit"
          description="Atualização para equipamentos modernos, assegurando conformidade e eficiência operacional."
        />
      </div>
    </section>
  );
}
