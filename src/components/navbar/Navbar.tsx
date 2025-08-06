import { Link } from 'react-router-dom';
import logo from '/src/assets/navbar.png';

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-2  text-black'>
                <div className="container flex justify-between items-center text-lg">
                    <div className="flex items-center gap-4">
                       <Link to='/home' className=""><img src={logo} alt="Logo" className="w-45 h-15" /></Link>  
                    </div>
                    <nav>
                        <ul className='flex gap-10 justify-center items-center'>
                            <li className="hover:text-orange-400 cursor-pointer transition-colors"> <Link to='/home' className="">Início  </Link></li>
                            <li className="hover:text-orange-400 cursor-pointer transition-colors">Sobre nós</li>
                            <li className="hover:text-orange-400 cursor-pointer transition-colors">Blog</li>
                            <li
                                className="rounded-full bg-orange-400 text-black px-6 py-3 font-semibold cursor-pointer transition-all
                                           hover:bg-orange-200 hover:text-orange-500 border-none">
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