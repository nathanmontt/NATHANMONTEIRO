import FooterNav from "./FooterNav"

function MainContent() {
  return (
    <>
        <div id="container-texts" 
            class="
                text-(--text-color)
                absolute top-0 right-0 bottom-0 left-0
                flex justify-center flex-col pl-5 md:pl-12">

            <p className="greetings"
                class="w-50 mb-2 text-[14px]">PRAZER, ME CHAMO</p>

            <p className="dev-name font-(family-name:--secondary-font) text-7xl md:text-8xl">NATHAN MONTEIRO</p>
            <p className="dev-info md:text-[20px]">Desenvolvedor Frontend.</p>
        </div>

        <FooterNav />
    </>
  )
}

export default MainContent
