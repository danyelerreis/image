'use client';

interface PrimeiroComponenteProps {
  mensagem: string;
  mensagemBotao: string;
}

export const PrimeiroComponente = ({ mensagem, mensagemBotao }: PrimeiroComponenteProps) => {
  const clique = () => {
    console.log('Você clicou no botão!');
    alert(mensagemBotao);
  };

  return (
    <div className="bg-cyan-700/60 border border-cyan-700 rounded-xl p-6 shadow-[0_0_15px_rgb(234, 238, 230)]">
      <h2 className="text-lg font-semibold text-white-200 mb-1">Primeiro Componente</h2>
      <p className="text-gray-300 mb-4">{mensagem}</p>
      <button
        onClick={clique}
        className="px-4 py-2 rounded-md font-semibold bg-cyan-700 text-white
                   shadow-[0_0_8px_rgba(102, 20, 255, 0.8)]
                   hover:shadow-[0_0_16px_#14E4FF] hover:scale-105
                   transition-all duration-200"
      >
        Clique aqui!
      </button>
    </div>
  );
};