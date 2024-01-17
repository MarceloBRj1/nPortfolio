import Image from "next/image"

export const HeroSection = () => {
  return (
    <section className="w-full h-[755px] justify-end bg-no-repeat flex flex-col bg-hero-image bg-cover bg-center">
      <div className="container">
        <div>
          <p>Olá, meu nome é</p>
          <h2>Marcelo Barreira</h2>
          
          <p>Meu nome é Marcelo e sou blablabla</p>
          <div>
            techs
          </div>
          <div>
            contato
          </div>
        </div>
        <Image 
        className="rounded"
          width={320}
          height={300}
          src='/images/pic2.png'
          alt="Eu o brabo"
        />
      </div>
    </section>
  )
}