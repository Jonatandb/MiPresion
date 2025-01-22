import { useState } from 'react'
import emailjs from '@emailjs/browser'

import styles from "./ContactForm.module.css"

const ContactForm = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true)

    const formData = new FormData(event.target as HTMLFormElement);
    const from_name = formData.get('name') as string;
    const from_email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      await emailjs.send(
        'service_a3a16rs',
        'template_6x8vumk',
        {
          from_name: from_name + ' (Usuario de MiPresión)',
          to_name: 'Jonatandb',
          from_email,
          to_email: 'jonatandb@gmail.com',
          message,
        },
        'inLQYkCaAWoFLWU9m',
      )

      alert(`Hola ${from_name}! Gracias por escribir, aprecio tu interés, en breve leeré tu mensaje.`);

      (event.target as HTMLFormElement)?.reset()

    } catch (error) {
      console.log(error)
      alert('Oh oh! Algo salió mal... Por favor intentá de nuevo más tarde (o escribime directamente a jonatandb@gmail.com)')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.contactFormContainer}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" placeholder="Mi nombre" required />
        <input type="email" id="email" name="email" placeholder="mi@correo.com" required />
        <textarea id="message" name="message" rows={2} autoComplete="off" placeholder="Hola Jonatandb! te escribo para decirte..." required></textarea>
        <button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </div>
  )
}

export default ContactForm