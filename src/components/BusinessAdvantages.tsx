import { v4 as uuidv4 } from "uuid";
import { BenefitItem } from "../components/BenefitItem";
import robotImage from "/images/robo.jpg";
import meetingImage from "/images/meeting.jpg";
import cad from "/images/cad-worker.jpeg";
import renderedMachine from "/images/rendered-machine.jpeg";
import simulationStress from "/images/simulation-stress.jpeg";

export function BusinessAdvantages() {
  return (
    <section
      id="BusinessAdvantages"
      className="container flex flex-col gap-5 py-4 text-white md:py-12"
    >
      <h3 className="font-bold text-2xl text-center w-full md:text-3xl xl:mb-6">
        Serviços oferecidos
      </h3>

      <div className="flex flex-col gap-6 xl:flex-row xl:gap-16">
        <div className="flex flex-col gap-8 xl:w-2/4">
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

        <div className="flex flex-col w-full xl:items-center xl:justify-center">
          <img
            className="self-end rounded-3xl w-56 md:w-96"
            src={robotImage}
            alt=""
          />
          <img
            className="self-start rounded-3xl w-56 border-4 border-white mt-[-2rem] md:w-96"
            src={meetingImage}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 xl:flex-row-reverse xl:gap-16">
        <div className="flex flex-col gap-8 xl:w-1/2">
          <h5 className="text-center text-white text-xl font-bold text xl:text-2xl">
            Transforme Ideias com Modelamento
          </h5>
          <p className="text-justify text-white">
            O modelamento com CAD oferece precisão e inovação, permitindo a
            visualização e otimização dos projetos antes da execução, garantindo
            a previsão de erros através de simulações computacionais, resultando
            em economia de tempo, recursos e acidentes.
          </p>
          <h5 className="text-start text-white text-xl font-bold text xl:text-2xl xl:text-center">
            Benefícios
          </h5>
          <ul className="list-disc pl-5 flex flex-col gap-4">
            <li className="text-justify text-white">
              Desenvolvimento de modelos tridimensionais precisos, permitindo
              uma visualização realista dos projetos.
            </li>
            <li className="text-justify text-white">
              Avaliação do desempenho estrutural de componentes, identificando
              pontos críticos e otimizando a segurança.
            </li>
            <li className="text-justify text-white">
              Geração de folhas de processos de fabricação, assegurando
              comunicação técnica, controle de revisão e padronização.
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-4 xl:w-full">
          <img className="self-end rounded-3xl w-56 md:w-96 xl:" src={cad} alt="" />
          <img
            className="self-start rounded-3xl w-56 border-4 border-white mt-[-2rem] z-10 md:w-96"
            src={renderedMachine}
            alt=""
          />
          <img
            className="self-end rounded-3xl w-56 mt-[-2rem] md:w-96"
            src={simulationStress}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
