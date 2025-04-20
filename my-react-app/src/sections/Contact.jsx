import styled from "styled-components";
import Profile from "../assets/Profile.jpg";
import Icons from "../components/Icons.jsx";
import { Box5 } from "../components/SectionContainer.jsx";
import ContentWrapper from "../components/ContentWrapper.jsx";
import HorizontalWrapper from "../components/HorizontalWrapper.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <Box5 id="contact">
            <HorizontalWrapper>
                <ProfilePic src={Profile} alt="Profile picture" />
                <Icons />
            </HorizontalWrapper>
            <ContentWrapper>
                <SectionTitle>{t("contact.title")}</SectionTitle>
                    <ContactForm />
            </ContentWrapper>
        </Box5>
    );
}

export default Contact;

const ProfilePic = styled.img`
    overflow: hidden;
    width: 25em;
    height: 25em;
    object-fit: cover;
    border-radius: 50%;
    z-index: 1;
`;