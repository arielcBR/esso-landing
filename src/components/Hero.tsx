import heroBg from "/images/hero-bg.jpg";
import { Button } from "./Button";
import { Header } from "./Header";

export function Hero() {
  return (
    <section
      className="container bg-cover h-screen py-4"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Header />
      <div className="flex flex-col justify-around h-full">
        <h1 className="text-center font-bold text-4xl text-white">ESSO</h1>
        <h2 className="text-center font-bold text-2xl text-white">
          Soluções eficientes em segurança do trabalho para a indústria 4.0
        </h2>
        <div className="flex gap-6 items-center justify-center">
          <Button to="#about" text="Conheça mais" variant="primary" />
          <Button to="https://wa.me/+5551992047216?text=Ola!%20Gostaria%20de%20mais%20informações" target="_blank" text="Fale conosco" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
