import { WhatsappLogo, X } from "@phosphor-icons/react";
import { useMenu } from "../hooks/MenuContext";

export function MenuMobile() {
  const { statusMobileMenu } = useMenu();

  function handleCloseMenu() {
    statusMobileMenu(false);
  }

  return (
    <div className="absolute inset-0 z-[10000] flex flex-col h-screen w-full bg-emerald-900 text-white">
      <header className="padding-y flex items-baseline gap-4 border-b border-white py-4">
        <div className="flex items-center gap-4 w-full">
          <X onClick={handleCloseMenu} className="cursor-pointer h-6 w-6" />
          <span className="text-2xl font-bold">Menu</span>
        </div>
      </header>

      <main className="padding-y flex-grow bg-emerald-900 pt-4">
        <nav>
          <ul className="flex flex-col gap-1" onClick={handleCloseMenu}>
            <li className="flex py-2">
              <a href="#about" className="capitalize text-lg text-white">
                Sobre a empresa
              </a>
            </li>
            <li className="flex py-2">
              <a
                href="#BusinessAdvantages"
                className="capitalize text-lg text-white"
              >
                Diferenciais Competitivos
              </a>
            </li>
            <li className="flex py-2">
              <a href="#WhyUs" className="capitalize text-lg text-white">
                Por que escolher-nos
              </a>
            </li>
            <li className="flex py-2">
              <a href="#OurWork" className="capitalize text-lg text-white">
                Nosso trabalho
              </a>
            </li>
            <li className="flex py-2">
              <a href="#Partners" className="text-lg text-white">
                Parceiros
              </a>
            </li>
          </ul>
        </nav>
      </main>

      <footer className="flex items-center justify-center gap-2 bg-emerald-600">
        <WhatsappLogo weight="fill" className="h-6 w-6" />
        <a
          className=" text-white text-lg text-center py-2"
          href="https://wa.me/+5551992047216?text=Ola!%20Gostaria%20de%20mais%20informações"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale Conosco
        </a>
      </footer>
    </div>
  );
}
