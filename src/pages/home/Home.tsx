function Home() {
    return (
        <>
            <div className="bg-white flex justify-center mt-10">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-2">
                        <h2 className='text-5xl font-bold text-left'>
                            Descomplique suas<br />
                            dívidas <span className="text-blue-600 relative inline-block">
                                em poucos cliques!
                                <div className="h-1 bg-orange-400 w-full mt-1 rounded"></div>
                            </span>
                        </h2>
                        <p className='text-x text-black-400 font-semibold'>
                            Descomplique suas dívidas em poucos cliques<br />
                            Negocie com segurança, pague com tranquilidade e volte a ter o controle da sua vida financeira.
                        </p>

                        <div className="flex flex-col items-center gap-2 w-full max-w-md">
                            <label htmlFor="cpf" className="font-semibold text-lg mb-2"></label>
                            <input
                                id="cpf"
                                type="text"
                                placeholder=" Digite seu CPF"
                                className="rounded-xl border border-gray-600 px-6 py-3 w-150 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
                                maxLength={14}
                            />
                            <button
                                className="rounded-full text-black bg-orange-400 hover:bg-orange-500 hover:text-orange-200 transition-all duration-300 cursor-pointer 
                                           border-none py-3 px-6 w-150 mt-2 text-lg font-bold"
                            >
                                Consultar meu CPF gratis
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://i.imgur.com/bKRnHcp.png"
                            alt="Imagem Página Home"
                            className='w-2/3 h-full'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home