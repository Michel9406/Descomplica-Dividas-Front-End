import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <hr className="border-gray-300 border-t w-full mt-10" />
            <div
                className="w-full flex justify-center bg-orange-100 text-black"
            >
                <div className="container flex flex-col items-center py-1 gap-4">
                    <p className='text-base font-bold'>
                        {data}- Descomplica Dividas | Copyright:
                    </p>
                    <p className='text-sm font-semibold'>Acesse nossas redes sociais</p>
                    <div className='flex gap-6'>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedinLogo size={28} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramLogo size={28} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookLogo size={28} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer