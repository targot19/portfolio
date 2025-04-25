import styled from "styled-components";
import Profile from "../assets/Profile.jpg";
import Icons from "../components/Icons.jsx";
import { Box5 } from "../components/SectionContainer.jsx";
import { ContactWrapper } from "../components/ContentWrapper.jsx";
import { ContactWrapperHorizon } from "../components/HorizontalWrapper.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <Box5 id="contact">
            <ContactWrapperHorizon>
                <ProfilePic src={Profile} alt="Profile picture" />
                <Icons />
            </ContactWrapperHorizon>
            <ContactWrapper>
                <SectionTitle>{t("contact.title")}</SectionTitle>
                    <ContactForm />
            </ContactWrapper>
        </Box5>
    );
}

export default Contact;

const ProfilePic = styled.img`
    overflow: hidden;
    width: 25rem;
    height: 25rem;
    object-fit: cover;
    border-radius: 50%;
    z-index: 0;

    @media (max-width: 1024px) {
        width: 20rem;
        height: 20rem;
    }

    @media (max-width: 768px) {
        width: 13rem;
        height: 13rem;
    }

    @media (max-width: 420px) {
        width: 13rem;
        height: 13rem;
    }
`;