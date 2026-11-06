'use client'

import { useState } from "react";

export default function Login() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");

  function cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (senha !== repetirSenha) {
      alert("As senhas não são iguais!");
      return;
    }

    if (senha.length < 6) {
      alert("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    alert("Login realizado com sucesso!");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-cyan-950to-cyan-950 px-4 py-10">

      <div className="w-full max-w-md rounded-3xl bg-gray p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-cyan-950">
            ImageLite
          </h1>

          <p className="mt-3 text-2xl font-semibold text-gray-100">
            Login to your account
          </p>

          <p className="mt-2 text-sm text-gray-100">
            Preencha seus dados para começar!
          </p>
        </div>

        <form onSubmit={cadastrar} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-100">
              Nome completo
            </label>

            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full rounded-xl border border-cyan-950 px-4 py-3 text-gray-100 outline-none transition focus:border-cyan-950 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-100">
              E-mail
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-cyan-950 px-4 py-3 text-gray-100 outline-none transition focus:border-cyan-950 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-100">
              Senha
            </label>

            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full rounded-xl border border-cyan-950 px-4 py-3 text-gray-100 outline-none transition focus:border-cyan-950 focus:ring-2 focus:ring-cyan-950"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-100">
              Repetir senha
            </label>

            <input
              type="password"
              value={repetirSenha}
              onChange={(e) => setRepetirSenha(e.target.value)}
              required
              className="w-full rounded-xl border border-cyan-950 px-4 py-3 text-gray-100 outline-none transition focus:border-cyan-950 focus:ring-2 focus:ring-cyan-950"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-950 py-3 font-semibold text-white transition hover:bg-cyan-950"
          >
            Fazer login 
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          <a href="/login" className="font-semibold text-cyan-950 hover:underline">
          </a>
        </p>

      </div>
    </main>
  );
}