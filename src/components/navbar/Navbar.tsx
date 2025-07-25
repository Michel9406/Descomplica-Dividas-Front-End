import logo from '/src/assets/navbar.png';

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4  text-black'>
                <div className="container flex justify-between items-center text-lg">
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="Logo" className="w-45 h-15" />
                    </div>
                    <nav>
                        <ul className='flex gap-10'>
                            <li className="hover:text-orange-400 cursor-pointer transition-colors">Início</li>
                            <li className="hover:text-orange-400 cursor-pointer transition-colors">Sobre nós</li>
                            <li className="hover:text-orange-400 cursor-pointer transition-colors">Blog</li>
                            <li
                                className="rounded-xl bg-orange-400 text-white px-5 py-2 font-semibold cursor-pointer transition-all
                                           hover:bg-orange-100 hover:text-orange-500 border-none"
                            >
                                Consultar Dívidas
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr className="border-gray-300 border-t w-full" />
        </>
    )
}

export default Navbar