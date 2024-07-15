import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.css';
import contactImage from '../assets/contact.jpg'; // Assurez-vous que l'image existe

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_r03520k', // Votre Service ID
      'template_e3uf0wt', // Votre Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Osama Rahim', // Nom du destinataire
        to_email: 'osama.rahim@outlook.fr' // L'adresse email où vous souhaitez recevoir les messages
      },
      'qYEcejfCKA0EF7rpq' // Votre User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Message envoyé avec succès!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      toast.error('Erreur lors de l\'envoi du message, veuillez réessayer.');
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contactez-moi</h2>
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImage} alt="Contact" />
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="btn">Envoyer</button>
        </form>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toastify-container"
        toastClassName="toastify-toast"
      />
    </section>
  );
}

export default Contact;
