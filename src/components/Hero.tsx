import heroBg from "../assets/images/hero-bg.jpg";
import { Button } from "./Button";
import { Header } from "./Header";

export function Hero() {
  return (
    <section
      className="container bg-cover h-screen"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Header />
      <div className="flex flex-col justify-around h-full">
        <h1 className="text-center font-bold text-4xl text-white">ESSO</h1>
        <h2 className="text-center font-bold text-2xl text-white">
          Soluções eficientes em segurança do trabalho para a indústria 4.0
        </h2>
        <div className="flex gap-6 items-center justify-center">
          <Button text="Conheça mais" variant="primary" />
          <Button text="Fale conosco" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
