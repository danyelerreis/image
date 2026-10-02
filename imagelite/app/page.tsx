import Link from "next/link";
import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-black-900 to-black text-white flex items-center justify-center">
      <main className="flex flex-col items-center gap-6 text-center px-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#EEEFF0] drop-shadow-[0_0_16px_rgb(71, 21, 165)]">
          Bem-vindo!
        </h1>

        <PrimeiroComponente mensagem=" "mensagemBotao="Clicou no botão!" />

        <Link
          href="/galeria"
          className="mt-4 px-6 py-3 rounded-lg font-bold uppercase tracking-wide
                     bg-cyan-700 border border-[#F7EFEF] text-white
                     shadow-[0_0_10px_rgb(20, 19, 19)]
                     hover:bg-white-600 hover:shadow-[0_0_20px_rgb(102, 20, 255)]
                     transition-all duration-300"
        >
          Ir para Galeria
        </Link>
      </main>
    </div>
  );
}
