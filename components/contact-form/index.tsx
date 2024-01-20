'use client'
import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../button/button"
import { SectionTitle } from "../section-title"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

const contactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  mensagem: z.string().min(3).max(500),
})
const onSubmit = (data: ContactFormData) => {
  console.log(data)
}

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const {handleSubmit, register} = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })
  return (
    <section className="py-16 px-6 md:py-34 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle 
          subtitle="Contato" 
          title="Vamos trabalhar juntos?"
          className="items-center text-center"
          />

        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 w-full flex flex-col gap-4">
          <input placeholder="Nome"
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4"
          {...register("name")}
          />
          <input placeholder="E-mail"
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4"
          {...register("email")}
          />
          <textarea placeholder="Mensagem"
          maxLength={500}
          className="resize-none w-full h-[138px]  bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4"
          {...register("mensagem")}
          />

          <Button className="w-max mt-6 mx-auto shadow-button">
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>

      </div>
      
    </section>
  )
}