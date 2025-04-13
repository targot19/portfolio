/** https://www.emailjs.com/docs/examples/reactjs/ */
/** https://easyfrontend.com/component-details/bootstrap-contact-form?lang=react-js&frame=react-bootstrap&mode=sources&colorScheme=light */

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

export const ContactForm = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pv3ty6t', 'template_rhqew6l', form.current, {
        publicKey: 'N-Q7P6Y8axbSr2D0s',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3 mt-2">
				<Form.Control type="text" placeholder={t("contact.name")} />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3 mt-2">
				<Form.Control type="email" placeholder={t("contact.mail")} />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Control as="textarea" rows={3} placeholder={t("contact.message")} />
				<Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
			</Form.Group>
			<div className="text-end">
				<Button variant="primary" type="submit" className="ezy__contact6-btn">
          {t("contact.submit")}
				</Button>
			</div>
		</Form>
  );
};

export default ContactForm;