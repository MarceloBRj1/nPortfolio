import Image from "next/image"
import { TechBagde } from "../../../../../tech-bagde"

import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "../../../../../Link"

export const ProjectCard = () => {
  return (
    <div className="flex justify-start items-center gap-6 lg:gap-12 flex-col lg:flex-row ">
      <div className="w-full h-full rounded-lg object-cover mb-5">
        <Image
        className="w-full lg:min-h-full"
        width={420}
        height={304}
        alt="Pagina inicial"
        src='https://i.imgur.com/IqnFWOt.png'
        />
      </div>

    <div>

      <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50 ">
        <Image 
        width={20}
        height={20}
        alt='sim'
        src="../images/icons/icone.svg"
        />
        <p className="text-3xl">ApiDogs</p>
      </h3>

      <p className="text-gray-400 my-6 text-2xl">
        Projeto com API de cachorros com Javascript, HTML e Css. usando uma API privada, com postantes, likes e comentários.
      </p>

      <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[340px]">
        <TechBagde name="Javascript" />
        <TechBagde name="Javascript" />
        <TechBagde name="Javascript" />
        <TechBagde name="Javascript" />
        <TechBagde name="Javascript" />
      </div>


      
      <Link href="/projects/api-dogs">
        Ver projeto
        <HiArrowNarrowRight size={18} />
      </Link>
    </div>

    </div>
  )
}