import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import './Cadastro.css';

function Cadastro() {
  const location = useLocation();

  // Estados da etapa 1
  const [cpf, setCpf] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [termos, setTermos] = useState(false);

  // Estados de erro da etapa 1
  const [erroNome, setErroNome] = useState('');
  const [erroCpf, setErroCpf] = useState('');
  const [erroData, setErroData] = useState('');
  const [erroCelular, setErroCelular] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroTermos, setErroTermos] = useState('');

  // Estados da etapa 2
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const [step, setStep] = useState(1);
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cpfParam = params.get('cpf');
    if (cpfParam) setCpf(cpfParam);
  }, [location.search]);

  // Validação da etapa 1
  const handleNextStep = () => {
    let valido = true;

    // Nome completo
    if (!nomeCompleto || nomeCompleto.trim().length < 3 || !/^[a-zA-ZÀ-ÿ\s]+$/.test(nomeCompleto)) {
      setErroNome('Digite um nome válido.');
      valido = false;
    } else setErroNome('');

    // CPF
    const cpfNumeros = cpf.replace(/\D/g, '');
    if (!cpf || cpfNumeros.length !== 11) {
      setErroCpf('CPF deve ter 11 números.');
      valido = false;
    } else setErroCpf('');

    // Data de nascimento
    if (!dataNascimento || new Date(dataNascimento) >= new Date()) {
      setErroData('Informe uma data de nascimento válida.');
      valido = false;
    } else setErroData('');

    // Celular
    const celularNumeros = celular.replace(/\D/g, '');
    if (!celular || celularNumeros.length !== 11) {
      setErroCelular('Celular deve ter 11 números.');
      valido = false;
    } else setErroCelular('');

    // E-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regexEmail.test(email)) {
      setErroEmail('Informe um e-mail válido.');
      valido = false;
    } else setErroEmail('');

    // Termos
    if (!termos) {
      setErroTermos('Você precisa concordar com os termos.');
      valido = false;
    } else setErroTermos('');

    if (valido) setStep(2);
  };

  // Função para finalizar cadastro
  const handleFinalizarCadastro = () => {
    if (senha !== confirmarSenha) {
      setErroSenha('As senhas não estão iguais.');
      return;
    }
    setErroSenha('');
    alert('Cadastro finalizado com sucesso!');
    // Aqui você pode enviar os dados para o backend
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen font-bold">
      <form className="flex flex-col justify-center items-start w-full max-w-lg px-5">
        <h1 className="text-slate-900 text-5xl mb-4 mt-10 whitespace-nowrap">
          Complete seu Cadastro
        </h1>

        {/* Etapa 1 - Dados pessoais */}
        {step === 1 && (
          <div className="flex flex-col w-full max-w-3xl border-2 border-orange-400 rounded-2xl p-8 shadow gap-3 px-5 ">
            <div className="flex flex-col">
              <label htmlFor="nomeCompleto">Nome Completo</label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                placeholder="Digite seu nome completo"
                className="border-1 border-slate-700 rounded-xl p-2"
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
              />
              {erroNome && <span className="text-red-500 text-sm">{erroNome}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF"
                className="border-1 border-slate-700 rounded-xl p-2"
                maxLength={14}
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              {erroCpf && <span className="text-red-500 text-sm">{erroCpf}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                className="border-1 border-slate-700 rounded-xl p-2"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
              {erroData && <span className="text-red-500 text-sm">{erroData}</span>}
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
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
              {erroCelular && <span className="text-red-500 text-sm">{erroCelular}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                className="border-1 border-slate-700 rounded-xl p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {erroEmail && <span className="text-red-500 text-sm">{erroEmail}</span>}
            </div>
          </div>
        )}

        {/* Checkbox termos */}
        {step === 1 && (
          <div className="flex items-center w-full gap-2 mt-2">
            <input
              type="checkbox"
              id="termos"
              name="termos"
              className="accent-orange-400"
              checked={termos}
              onChange={(e) => setTermos(e.target.checked)}
            />
            <label htmlFor="termos" className="text-sm font-normal">
              Li e concordo com os{' '}
              <a href="#" className="underline text-orange-500">
                termos da política de dívidas
              </a>.
            </label>
          </div>
        )}
        {erroTermos && step === 1 && (
          <span className="text-red-500 text-sm mt-1">{erroTermos}</span>
        )}

        {/* Etapa 2 - Criar senha */}
        {step === 2 && (
          <>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mb-3 text-orange-500 cursor-pointer px-105"
            >
              ← Voltar
            </button>

            <div className="flex flex-col w-full max-w-3xl border-2 border-orange-400 rounded-2xl p-8 shadow gap-3 px-5">
              <div className="flex flex-col relative">
                <label htmlFor="senha">Senha</label>
                <input
                  type={showSenha ? 'text' : 'password'}
                  id="senha"
                  name="senha"
                  placeholder="Digite sua senha"
                  className="border-1 border-slate-700 rounded-xl p-2 pr-10"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <span
                  onClick={() => setShowSenha(!showSenha)}
                  className="absolute right-3 top-9 cursor-pointer"
                >
                  {showSenha ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-600" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-600" />
                  )}
                </span>
              </div>

              <div className="flex flex-col relative">
                <label htmlFor="confirmarSenha">Confirmar Senha</label>
                <input
                  type={showConfirmar ? 'text' : 'password'}
                  id="confirmarSenha"
                  name="confirmarSenha"
                  placeholder="Confirme sua senha"
                  className="border-1 border-slate-700 rounded-xl p-2 pr-10"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                />
                <span
                  onClick={() => setShowConfirmar(!showConfirmar)}
                  className="absolute right-3 top-9 cursor-pointer"
                >
                  {showConfirmar ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-600" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-600" />
                  )}
                </span>
                {erroSenha && (
                  <span className="text-red-500 text-sm mt-1">{erroSenha}</span>
                )}
              </div>
            </div>
          </>
        )}

        {/* Botões */}
        <div className="flex justify-start w-full gap-8 mt-4 ">
          {step === 1 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="rounded-xl border-1 border-orange-400 text-white bg-orange-400 hover:bg-orange-100 hover:text-orange-500 w-1/2 py-2 transition-all cursor-pointer"
            >
              Continuar
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinalizarCadastro}
              className="rounded-xl border-1 border-orange-400 text-white bg-orange-400 hover:bg-orange-100 hover:text-orange-500 w-1/2 py-2 transition-all cursor-pointer"
            >
              Finalizar Cadastro
            </button>
          )}
        </div>
      </form>

      {/* Imagem do lado direito */}
      <div className="fundoCadastro hidden lg:block h-[300px] w-[300px] mt-10"></div>
    </div>
  );
}

export default Cadastro;
