import './Cadastro.css'

function Cadastro() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen font-bold">
        {/* Formulário do lado esquerdo */}
        <form className="flex flex-col justify-center items-start w-full max-w-lg gap-5 px-8">
          <h1 className="text-slate-900 text-5xl mb-4">Complete seu Cadastro</h1>
          
          {/* Grid para CPF, Data de Nascimento, Celular e Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF"
                className="border-2 border-slate-700 rounded p-2"
                maxLength={14}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                className="border-2 border-slate-700 rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="celular">Celular</label>
              <input
                type="tel"
                id="celular"
                name="celular"
                placeholder="(99) 99999-9999"
                className="border-2 border-slate-700 rounded p-2"
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
                className="border-2 border-slate-700 rounded p-2"
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
          <div className="flex justify-start w-full gap-8">
            <button
              type="reset"
              className="rounded border-2 border-orange-400 text-white bg-orange-400 hover:bg-orange-100 hover:text-orange-500 w-1/2 py-2 transition-all"
            >
              Continuar
            </button>
          </div>
        </form>
        {/* Imagem do lado direito */}
        <div className="fundoCadastro hidden lg:block"></div>
      </div>
    </>
  )
}

export default Cadastro