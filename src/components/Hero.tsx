import heroBg from "/images/hero-bg.jpg";
import { Button } from "./Button";
import { Header } from "./Header";

export function Hero() {
  return (
    <section
      className="padding-y bg-cover h-screen text-white w-f py-4 md:py-8 xl:py-14"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Header />
      <div className="flex flex-col justify-around h-full xl:justify-evenly">
        <div className="flex flex-col items-center gap-5 md:gap-8 xl:items-start xl:w-2/3">
          <h1 className="text-center font-bold text-4xl md:text-5xl xl:text-start xl:text-6xl">ESSO</h1>
          <h2 className="text-center font-bold text-2xl md:text-3xl xl:text-start">
            Soluções eficientes em{" "}
            <span className="md:text-black">segurança</span> do trabalho para a
            indústria 4.0
          </h2>
        </div>
        <div className="flex gap-6 items-center justify-center xl:justify-start">
          <Button to="#about" text="Conheça mais" variant="primary" />
          <Button
            to="https://wa.me/+5551992047216?text=Ola!%20Gostaria%20de%20mais%20informações"
            target="_blank"
            text="Fale conosco"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
