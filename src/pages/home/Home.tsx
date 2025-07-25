import React from 'react'

function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h2>Seja Bem Vindo!</h2>
                        <p>Descomplicamos sua vida financeira
Na Descomplica Dívidas, acreditamos que todo mundo merece uma segunda chance para recomeçar com tranquilidade e dignidade. Por isso, criamos uma plataforma simples, segura e acessível para ajudar brasileiros a renegociarem suas dívidas e retomarem o controle da sua vida financeira.

Nosso objetivo é claro: facilitar o acesso à negociação de dívidas, oferecendo soluções personalizadas, com condições justas e sem burocracia. Tudo 100% online, rápido e transparente.</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src="https://www.figma.com/design/HsSCFtiLmHnUhd33kY3E83/descomplica-d%C3%ADvidas?node-id=18-427&t=i0aHMec68UvQR17F-4" 
                            alt="Imagem da Página Home" 
                            width="500px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home