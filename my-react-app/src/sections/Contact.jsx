import styled from "styled-components";
import Profile from "../assets/Profile.jpg";
import Icons from "../components/Icons.jsx";
import SectionContainer from "../components/SectionContainer.jsx";
import ContentWrapper from "../components/ContentWrapper.jsx";
import HorizontalWrapper from "../components/HorizontalWrapper.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
    return (
        <SectionContainer id="contact">
            <ProfilePic src={Profile} alt="Profile picture" />
            <ContentWrapper>
                <SectionTitle>Let's connect</SectionTitle>
                    <HorizontalWrapper>
                        <p>Contact me</p>
                    </HorizontalWrapper>
                    <Icons />
            </ContentWrapper>
            <ContactForm />
        </SectionContainer>
    );
}

export default Contact;

const ProfilePic = styled.img`
    //visibility: hidden;
    overflow: visible;
    width: 25%;
    height: 25%;
    object-fit: cover;
    border: 2px dotted red;

    &:hover {
    transform: scale(1.05);
    transition: all .35s linear;
    }
    `