import { List } from "@phosphor-icons/react";
import logo from "../assets/images/logo.svg";

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <List className="w-6 h-6 text-white" />
      <div className="w-2/4">
        <img className="w-6 h-6" src={logo} alt="" />
      </div>
    </header>
  );
}
