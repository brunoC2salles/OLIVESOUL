'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface FormData {
  name: string
  email: string
  whatsapp: string
  product: string
  message: string
}

const products = [
  'Salou Residence',
  'Jardins de Versalhes',
  'Mirador de Alicante',
  'Todos'
]

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
    product: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === 'whatsapp') {
      setFormData({
        ...formData,
        [name]: formatWhatsApp(value)
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário')
      }

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        product: '',
        message: ''
      })

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar formulário')
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section id="contact" className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col justify-center gap-12"
          >
            {/* Label and Heading */}
            <motion.div variants={itemVariants}>
              <SectionLabel>Contato</SectionLabel>
              <h2 className="font-display font-light text-5xl md:text-6xl text-navy-900 mt-4 leading-tight">
                Pronto para dar o próximo passo?
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-body font-normal text-lg text-stone-600 leading-relaxed"
            >
              Nossa equipe está pronta para apresentar as melhores oportunidades alinhadas ao seu perfil.
            </motion.p>

            {/* Contact Methods */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/5547900000000?text=Olá, tenho interesse em imóveis em Porto Belo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Envie uma mensagem no WhatsApp"
                variants={itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400/20 transition-colors">
                  <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.393-1.476-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006a9.87 9.87 0 00-4.946 1.348l-.354.214-3.675-.964.984 3.595-.235.374a9.848 9.848 0 .524 4.978c.44 2.425 1.566 4.6 3.359 6.262 1.520 1.407 3.562 2.55 5.852 3.195 2.407.72 5.088.944 7.718.32 1.665-.41 3.23-1.247 4.445-2.459-1.5 1.5-3.5 2.5-5.5 2.5-4.418 0-8-3.582-8-8s3.582-8 8-8c2.209 0 4.217.896 5.66 2.34" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-body font-medium text-base text-navy-900">WhatsApp</p>
                  <p className="font-body font-normal text-sm text-stone-600">Resposta em minutos</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:contato@visionestates.com.br"
                aria-label="Envie um email para contato"
                variants={itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400/20 transition-colors">
                  <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-body font-medium text-base text-navy-900">Email</p>
                  <p className="font-body font-normal text-sm text-stone-600">contato@visionestates.com.br</p>
                </div>
              </motion.a>

              {/* Address */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-body font-medium text-base text-navy-900">Endereço</p>
                  <p className="font-body font-normal text-sm text-stone-600">Porto Belo, Santa Catarina</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-body font-normal text-xs uppercase tracking-wide text-stone-500">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
                className="font-body font-normal text-base text-navy-900 bg-transparent border-b border-stone-300 focus:border-navy-900 focus:outline-none py-3 placeholder-stone-400 transition-colors duration-300"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-body font-normal text-xs uppercase tracking-wide text-stone-500">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
                className="font-body font-normal text-base text-navy-900 bg-transparent border-b border-stone-300 focus:border-navy-900 focus:outline-none py-3 placeholder-stone-400 transition-colors duration-300"
              />
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-2">
              <label htmlFor="whatsapp" className="font-body font-normal text-xs uppercase tracking-wide text-stone-500">
                WhatsApp
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="(47) 99999-9999"
                className="font-body font-normal text-base text-navy-900 bg-transparent border-b border-stone-300 focus:border-navy-900 focus:outline-none py-3 placeholder-stone-400 transition-colors duration-300"
              />
            </div>

            {/* Product Select */}
            <div className="flex flex-col gap-2">
              <label htmlFor="product" className="font-body font-normal text-xs uppercase tracking-wide text-stone-500">
                Produto de interesse
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="font-body font-normal text-base text-navy-900 bg-transparent border-b border-stone-300 focus:border-navy-900 focus:outline-none py-3 transition-colors duration-300 cursor-pointer"
              >
                <option value="" disabled className="text-stone-400">
                  Selecionar produto
                </option>
                {products.map((product) => (
                  <option key={product} value={product} className="text-navy-900">
                    {product}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-body font-normal text-xs uppercase tracking-wide text-stone-500">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos como podemos ajudar..."
                rows={4}
                className="font-body font-normal text-base text-navy-900 bg-transparent border-b border-stone-300 focus:border-navy-900 focus:outline-none py-3 placeholder-stone-400 transition-colors duration-300 resize-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded px-4 py-3"
              >
                <p className="font-body font-normal text-sm text-red-700">{error}</p>
              </motion.div>
            )}

            {/* Success Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-green-50 border border-green-200 rounded px-4 py-3 flex items-center gap-3"
              >
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="font-body font-normal text-sm text-green-700">Entraremos em contato em breve!</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-navy-900 text-white font-body font-medium text-base py-4 rounded hover:bg-navy-800 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-gold-400 border-t-gold-400 border-r-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar Mensagem'
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
