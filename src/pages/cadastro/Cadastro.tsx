import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
  const location = useLocation();
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cpfParam = params.get('cpf');
    if (cpfParam) setCpf(cpfParam);
  }, [location.search]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen font-bold">
        {/* Formulário do lado esquerdo */}
        <form className="flex flex-col justify-center items-start w-full max-w-lg  px-5">
          <h1 className="text-slate-900 text-5xl mb-4 mt-10 whitespace-nowrap ">Complete seu Cadastro</h1>

          {/* container de cadastro  */}
          <div className="flex flex-col w-full max-w-3xl border-2 border-orange-400 rounded-2xl p-8 shadow gap-3 px-5">
            <div className="flex flex-col">
              <label htmlFor="nomeCompleto">Nome Completo</label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                placeholder="Digite seu nome completo"
                className="border-1 border-slate-700 rounded-xl p-2"
              />
              <span className="text-xs text-gray-500 whitespace-nowrap  ">
                Digite exatamente como está no seu documento de identidade (RG ou RNE).</span>
            </div>

            <div className="flex flex-col ">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF"
                className="border-1 border-slate-700 rounded-xl p-2"
                maxLength={14}
                value={cpf}
                onChange={e => setCpf(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                className="border-1 border-slate-700 rounded-xl p-2 "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="celular">Celular</label>
              <input
                type="tel"
                id="celular"
                name="celular"
                placeholder="(99) 99999-9999"
                className="border-1 border-slate-700 rounded-xl p-2"
                maxLength={15}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                className="border-1 border-slate-700 rounded-xl p-2"
              />
            </div>
          </div>

          <div className="flex items-center w-full gap-2 mt-2">
            <input
              type="checkbox"
              id="termos"
              name="termos"
              className="accent-orange-400"
              required
            />
            <label htmlFor="termos" className="text-sm font-normal">
              Li e concordo com os <a href="#" className="underline text-orange-500">termos da política de dívidas</a>.
            </label>
          </div>
          <div className="flex justify-start w-full gap-8 ">
            <button
              type="reset"
               className="rounded-xl border-1 border-orange-400 text-white bg-orange-400 hover:bg-orange-100 hover:text-orange-500 w-1/2 py-2 transition-all cursor-pointer"
            >
              Continuar
            </button>
          </div>
        </form>
        {/* Imagem do lado direito */}
        <div className="fundoCadastro hidden lg:block h-[300px] w-[300px] mt-10"></div>
      </div>
    </>
  )
}

export default Cadastro