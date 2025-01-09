'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { sendEmail } from '../actions/send-email'
import { Loader2 } from 'lucide-react'
import { toast } from 'react-toastify'

export function ContactForm() {
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    try {
      const result = await sendEmail(formData)
      if (result.success) {
        toast.success('Email enviado com sucesso!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        // Limpa o formulário
        const form = document.getElementById('contact-form') as HTMLFormElement
        form.reset()
      } else {
        throw new Error(result.message)
      }
    } catch {
      toast.error('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <form 
      id="contact-form"
      action={handleSubmit}
      className="max-w-md mx-auto"
    >
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400"
          required
        />
      </motion.div>
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400"
          required
        />
      </motion.div>
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline h-32 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400"
          required
        ></textarea>
      </motion.div>
      <motion.div 
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            'Enviar'
          )}
        </button>
      </motion.div>
    </form>
  )
}

