import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import './Login.css';

function Login() {
    const [showSenha, setShowSenha] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de autenticação aqui
        alert('Login efetuado com sucesso !');
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
            {/* Formulário */}
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full max-w-lg border-2 border-orange-400 rounded-2xl p-10 shadow gap-5 px-12"
            >
                <h2 className="text-slate-900 text-5xl mb-5">Entrar</h2>

                {/* Campo Usuário */}
                <div className="flex flex-col w-full">
                    <label htmlFor="usuario">Usuário</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Email ou CPF"
                        className="border border-slate-700 rounded-xl p-2 w-full"
                    />
                </div>

                {/* Campo Senha com ícone */}
                <div className="flex flex-col w-full relative">
                    <label htmlFor="senha">Senha</label>
                    <div className="relative">
                        <input
                            type={showSenha ? "text" : "password"}
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border border-slate-700 rounded-xl p-2 pr-10 w-full"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-orange-500 cursor-pointer"
                            onClick={() => setShowSenha(!showSenha)}
                        >
                            {showSenha ? (
                                <EyeSlashIcon className="h-5 w-5" />
                            ) : (
                                <EyeIcon className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Botão Entrar */}
                <button
                    type="submit"
                    className="rounded-xl border border-orange-400 text-white bg-orange-400 hover:bg-orange-100 hover:text-orange-500 w-1/2 py-2 transition-all cursor-pointer"
                >
                    Entrar
                </button>
                <hr className="border-slate-800 w-full" />
                {/* Links Criar conta / Esqueci senha */}
                <div className="flex justify-between items-center mt-2">

                    <a
                        href="/esqueci-senha"
                        className="text-orange-500 underline hover:text-orange-700 transition-colors"
                    >
                        Esqueci minha senha
                    </a>
                </div>
            </form>

            {/* Fundo à direita */}
            <div className="fundoLogin hidden lg:block"></div>
        </div>
    );
}

export default Login;
