import Image from "next/image"
import { TechBagde } from "../../../tech-bagde"
import { Button } from "../../../button/button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub } from "react-icons/tb"
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandWhatsapp } from "react-icons/tb";



const MOCK_CONTATCS = [
  {
    url:'https://github.com/MarceloBRj1',
    icon: <TbBrandGithub />
  },
  {
    url:'https://www.linkedin.com/in/marcelobarreira-dev/',
    icon: <TbBrandLinkedin />
  },
  {
    url:'https://wa.me/5585989284993',
    icon: <TbBrandWhatsapp />

  },
]



export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
    <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Marcelo Barreira</h2>
          
          <p className="text-gray-400 my-6 text-sm sm: ">Meu nome é Marcelo e sou blablabla</p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({length: 8}).map((_, index) => (
              <TechBagde name="Next.Js" key={index} />
            ))}
            
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="shadow-button w-max">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-gray-600 text-2xl flex items-center h-20 gap-5">
              {MOCK_CONTATCS.map((item, index) => (
                <a href={item.url}
                key={`item.${index}`}
                target="_blank"
                className="hover:text-gray-100 transition-colors"
                >
                  {item.icon}

                </a>
              ))}
          </div>

            </div>
        </div>
        <Image 
        className="flex"
          width={320}
          height={300}
          src='/images/pic2.png'
          alt="Eu o brabo"
        />
      </div>
    </section>
  )
}