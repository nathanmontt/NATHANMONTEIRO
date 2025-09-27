import Github from "../icons/Github"
import Linkedin from "../icons/Linkedin"

function TopLeftContent() {
    return (
        <div id="container-top-left-content"
            className="pt-[3em] pr-[3em] pl-[3em]">
            <div id="container-texts-info">
                <p id="dev-name"
                    className="text-[1.5em] font-semibold">
                        Nathan Monteiro
                </p>

                <p id="dev-ocupation"
                    className="text-[.9em] font-light">
                    S.H.A (Junior SDR) at <a href="https://grilo.com.br" rel="noreferrer noopener nofollow" target="_blank">Grilo</a>
                </p>
            </div>

            <div id="container-text-about">
                <div className="dev-about
                                mt-[2em]"
                >
                    <p>
                        Entusiasta em <span className="font-semibold">Desenvolvimento Frontend</span> (<em>ainda no básico</em>) e em <span className="font-semibold">Análise de Dados</span> (<em>mais básico ainda</em>). Possuo experiência prática em desenvolvimento e mentoria de novos programadores, atuando tanto em projetos próprios quanto no ambiente de startups. Atuo como <span className="font-semibold">Smart Hiring Associate (Junior SDR)</span> na Grilo, e como <span className="font-semibold">CEO e CTO</span> da <a href="https://devstart-project.vercel.app/" rel="noreferrer noopener nofollow" target="_blank">devStart();</a>, uma iniciativa voluntária, onde guio e mentoro mais de 30 programadores iniciantes em sua jornada no desenvolvimento web.
                    </p>
                </div>
            </div>

            <div id="container-social-icons"
                className="flex gap-2">
                <Github />
                <Linkedin />
            </div>

            {/* <div id="container-who-made">
                Feito por mim (colocar um link aqui)
            </div> */}
        </div>
    )
}

export default TopLeftContent