import { List } from "@phosphor-icons/react";
import logo from "/images/logo.svg";
import { useMenu } from "../hooks/MenuContext"

export function Header() {
  const { statusMobileMenu } = useMenu();

  function handleOpenMenu() {
    statusMobileMenu(true);
  }

  return (
    <header className="flex justify-between items-center">
      <List className="w-6 h-6 text-white" onClick={handleOpenMenu} />
      <div className="w-2/4">
        <img className="w-6 h-6" src={logo} alt="" />
      </div>
    </header>
  );
}
