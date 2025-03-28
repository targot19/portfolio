import styled from "styled-components";
import Profile from "../assets/Profile.jpg";
import Icons from "../components/Icons.jsx";

const Contact = () => {
    return (
        <ContactSectionContainer>
            <ProfilePic src={Profile} alt="Profile picture" />
            <ContentWrapper>
                <h2>Let's talk!</h2>
                    <HorizontalWrapper>
                        <p>Contact me</p>
                    </HorizontalWrapper>
                    <Icons />
            </ContentWrapper>
        </ContactSectionContainer>
    );
}

export default Contact;

const ContactSectionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 3px solid black;
    //gap: 10px;
    `

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid blue;
    `

const HorizontalWrapper = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: row;
    border: 2px dotted purple;
    `

const ProfilePic = styled.img`
    //visibility: hidden;
    overflow: hidden;
    width: 25%;
    height: 25%;
    object-fit: cover;
    border: 2px dotted red;

    &:hover {
    transform: scale(1.05);
    transition: all .35s linear;
    }
    `