import { v4 as uuidv4 } from "uuid";
import { BenefitItem } from "../components/BenefitItem";
import robotImage from "../assets/images/robo.jpg";
import meetingImage from "../assets/images/meeting.jpg";

export function BusinessAdvantages() {
  return (
    <section className="container flex flex-col gap-5">
      <div className="flex flex-col gap-8">
        <BenefitItem
          key={uuidv4()}
          numberItem="1"
          title="Adequação de Máquinas"
          description="Realizamos a adequação de máquinas à norma NR12, garantindo que seus
          equipamentos atendam aos requisitos de segurança e eficiência,
          reduzindo riscos operacionais."
        />
        <BenefitItem
          key={uuidv4()}
          numberItem="2"
          title="Treinamentos in company"
          description="Oferecemos treinamentos abrangentes em segurança do trabalho, incluindo normas NR5, NR6, NR10, NR12, NR13, NR33 e NR35, capacitando sua equipe para atuar de forma segura e eficiente."
        />
        <BenefitItem
          key={uuidv4()}
          numberItem="3"
          title="Laudos técnicos"
          description="Elaboramos laudos técnicos, como termografias, LIP, LTIP e LTCAT, além de análises de risco, fornecendo documentação essencial para a segurança e conformidade das operações."
        />
        <BenefitItem
          key={uuidv4()}
          numberItem="4"
          title="Automação industrial"
          description="Realizamos automação de máquinas e equipamentos, utilizando o que há de mais moderno em controle e comando de processos de máquinas e equipamentos."
        />
      </div>

      <div className="flex flex-col">
        <img className="self-end rounded-3xl w-56" src={robotImage} alt="" />
        <img className="self-start rounded-3xl w-56 border-4 border-white mt-[-2rem]" src={meetingImage} alt="" />
      </div>

      <div className="flex flex-col">
        
      </div>
    </section>
  );
}
