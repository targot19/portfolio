import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log("Environment Variables:", import.meta.env);
        console.log("Service ID:", import.meta.env.VITE_SERVICE_ID);
        console.log("Template ID:", import.meta.env.VITE_TEMPLATE_ID);
        console.log("Public Key:", import.meta.env.VITE_PUBLIC_KEY);

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(
            (result) => {
                setStateMessage('Message sent!');
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 3000); // Hide message after 3 seconds
            },
            (emailError) => {
                console.error("EmailJS Error:", emailError);
                setStateMessage('Something went wrong, please try again later');
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 3000); // Hide message after 3 seconds
            }
        );

        // Clears the form after sending the email
        e.target.reset();
    };

    return (
        <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
        </form>
    );
};

export default ContactForm;