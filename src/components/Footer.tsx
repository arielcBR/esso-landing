import {
  InstagramLogo,
  LinkedinLogo,
  House,
  MapTrifold,
  Mailbox,
  WhatsappLogo,
  PhoneDisconnect,
  EnvelopeSimpleOpen,
} from "@phosphor-icons/react";
import logo from "/images/logo.svg";

export function Footer() {
  return (
    <footer className="container flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <img src={logo} alt="logo esso" />
          <h5 className="font-bold text-white text-xl">Esso Solutions</h5>
        </div>
        <p className="text-center text-white text-sm">
          Somos uma consultoria em engenharia, especializada em oferecer
          soluções seguras e eficientes para a indústria. Descubra como podemos
          ajudar seu negócio a crescer.
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-center text-white text-lg">
            Nos acompanhe nas nossas redes
          </p>
          <div className="flex justify-center items-center gap-3">
            <a
              href="https://www.linkedin.com/company/esso-solutions-consultoria-em-seguran%C3%A7a-do-trabalho/"
              target="_blank"
            >
              <LinkedinLogo className="text-white h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/esso.manutencao/"
              target="_blank"
            >
              <InstagramLogo className="text-white h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h5 className="text-xl font-bold text-center text-white">
          Onde estamos
        </h5>
        <div className="flex justify-center items-center gap-2">
          <House className="text-white h-7 w-7" />
          <p className="text-center text-white text-md">
            Rua Dois de Novembro, 1107
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MapTrifold className="text-white h-7 w-7" />
          <p className="text-center text-white text-md">
            Bairro Tarumã, Viamão/RS
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Mailbox className="text-white h-7 w-7" />
          <p className="text-center text-white text-md">CEP: 94415-660</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h5 className="text-xl font-bold text-center text-white">Contato</h5>
        <a
          href="https://wa.me/+5551992047216?text=Ola!%20Gostaria%20de%20mais%20informações"
          target="_blank"
          className="flex justify-center items-center gap-2"
        >
          <WhatsappLogo className="text-white h-7 w-7" />
          <p className="text-center text-white text-md">(51) 99204-7216</p>
        </a>
        <a
          href="tel:+5551992047216"
          target="_blank"
          className="flex justify-center items-center gap-2"
        >
          <PhoneDisconnect className="text-white h-7 w-7" />
          <p className="text-center text-white text-md">(51) 99204-7216</p>
        </a>
        <a
          href="mailto:+5551992047216"
          target="_blank"
          className="flex justify-center items-center gap-2"
        >
          <EnvelopeSimpleOpen className="text-white h-7 w-7" />
          <p className="text-center text-white text-md">
            esso.seguranca@outlook.com
          </p>
        </a>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h5 className="text-xl font-bold text-center text-white">
          Acesso Rápido
        </h5>
        <a
          href="#"
          target="_blank"
          className="flex justify-center items-center gap-2 text-white text-md"
        >
          Sobre
        </a>
        <a
          href="#"
          target="_blank"
          className="flex justify-center items-center gap-2 text-white text-md"
        >
          Serviços
        </a>
        <a
          href="#"
          target="_blank"
          className="flex justify-center items-center gap-2 text-white text-md"
        >
          Porque a Esso?
        </a>
        <a
          href="#"
          target="_blank"
          className="flex justify-center items-center gap-2 text-white text-md"
        >
          Nosso Trabalho
        </a>
      </div>

      <div className="flex flex-col items-center justify-center py-2 border-t border-white w-full">
        <p className="text-xs text-center text-white">
          Esso solutions ©Copyright 2024. All rights reserved.
        </p>
        <p className="text-xs text-center text-white">
          Desenvolvido por{" "}
          <a target="_blank" href="https://www.linkedin.com/in/campos-ariel/">
            <strong>arielcBR</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}