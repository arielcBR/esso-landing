import { DifferentialCard } from "./DifferentialCard";

import paymentAvatar from "/images/payment-avatar.png";
import approachAvatar from "/images/approach-avatar.png";
import safetyAvatar from "/images/safety-avatar.png";
import colaborativeAvatar from "/images/colaborative-avatar.png";

export function OurDifferentials() {
  return (
    <section
      id="WhyUs"
      className=" padding-y flex flex-col gap-5 bg-white py-6 md:gap-10 md:py-12"
    >
      <h5 className="text-center text-black text-xl font-bold text md:text-3xl">
        Porque a ESSO?
      </h5>
      <div className="grid gap-8 grid-cols-1 place-items-center items-stretch md:grid-cols-2 xl:grid-cols-4">
        <DifferentialCard
          image={paymentAvatar}
          title="Condições de pagamento"
          description="Opções de pagamento via cronograma em até 48x para facilitar a
    contratação de nossos serviços."
        />
        <DifferentialCard
          image={approachAvatar}
          title="Abordagem Personalizada"
          description="Desenvolvemos estratégias sob medida, atendendo às necessidades específicas de cada cliente."
        />
        <DifferentialCard
          image={safetyAvatar}
          title="Foco na Segurança"
          description="Priorizamos a segurança, ajudando sua empresa a atender às normas regulamentares e a criar um ambiente seguro e produtivo."
        />
        <DifferentialCard
          image={colaborativeAvatar}
          title="Adequação colaborativa"
          description="Desenvolvimento do projeto com detalhes para que o cliente execute e adquira os materiais indicados."
        />
      </div>
    </section>
  );
}
