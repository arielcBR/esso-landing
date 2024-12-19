import { List } from "@phosphor-icons/react";
import logo from "/images/logo.svg";
import { useMenu } from "../hooks/MenuContext";

export function Header() {
  const { statusMobileMenu } = useMenu();

  function handleOpenMenu() {
    statusMobileMenu(true);
  }

  return (
    <>
      <header className="flex justify-between items-center md:hidden">
        <List className="w-6 h-6 text-white" onClick={handleOpenMenu} />
        <div className="w-2/4">
          <img className="w-6 h-6" src={logo} alt="" />
        </div>
      </header>

      <header className="hidden md:flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src={logo} alt="" />
          <p className="text-sm ">ESSO</p>
        </div>
        <nav>
          <ul className="flex items-center justify-between gap-6">
            <li className="hover:text-slate-200 hover:border-b hover:scale-105"><a href="#about">Sobre</a></li>
            <li className="hover:text-slate-200 hover:border-b hover:scale-105"><a href="#about">Serviços</a></li>
            <li className="hover:text-slate-200 hover:border-b hover:scale-105"><a href="#about">Projetos</a></li>
            <li className="hover:text-slate-200 hover:border-b hover:scale-105"><a href="#about">Contato</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
