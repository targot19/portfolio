/** https://www.emailjs.com/docs/examples/reactjs/ */
/** https://easyfrontend.com/component-details/bootstrap-contact-form?lang=react-js&frame=react-bootstrap&mode=sources&colorScheme=light */
/** https://mui.com/material-ui/react-alert/ */

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Button, Form } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';

const SubmitButton = styled(Button)`
    background-color: #CB997E;
    border: none;
    color: white;
    &:hover {
        background-color:rgb(203, 144, 112);
        color: black;
    }
`;

export const ContactForm = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pv3ty6t', 'template_rhqew6l', form.current, {
        publicKey: 'N-Q7P6Y8axbSr2D0s',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          form.current.reset();

          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3 mt-2">
				<Form.Control type="text" name="user_name" placeholder={t("contact.name")} />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3 mt-2">
				<Form.Control type="email" name="user_email" placeholder={t("contact.mail")} />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Control as="textarea" rows={3} name="message" placeholder={t("contact.message")} />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<div className="text-end">
          <SubmitButton type="submit">
            {t("contact.submit")}
          </SubmitButton>
			</div>
		</Form>
      {isSubmitted && (
          <Alert severity="success" className="mt-3">
            {t("contact.success")}
          </Alert>
        )}
    </>
  );
};

export default ContactForm;