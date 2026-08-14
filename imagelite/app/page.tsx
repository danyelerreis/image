import { PrimeiroComponente } from "./components/PrimeiroComponente";


export default function Home() {
  return (
    <div>
      <main>
        <h1>Bem-vindo ao Next.js!</h1>
        <PrimeiroComponente
        mensagem = "Esta é uma mensagem passada como propriedade para o Primeiro Componente."
        mensagemBotao ="Você clicou no botão!"/>
    </main>
    </div>
  )
}
