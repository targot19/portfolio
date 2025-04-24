import React, { useState, useEffect } from "react";
import { IntroSection } from "../components/SectionContainer";
import { IntroWrapper } from "../components/ContentWrapper";
import { IntroWrapperHorizon } from "../components/HorizontalWrapper";
import styled from "styled-components";
import Profile from "../assets/Profile.jpg";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    const { t, i18n } = useTranslation();
    const [title, setTitle] = useState("");

    // Update the title whenever the language changes
    useEffect(() => {
        const translatedTitle = t("introduction.title", { defaultValue: "Meet Tania" });
        setTitle(translatedTitle);
    }, [t, i18n.language]);

    const handleOnClick = () => {
        window.open('https://github.com/targot19', '_blank');
    };

    const downloadFile = () => {
        if (i18n.language === "en") {
            window.open('/src/assets/EN-CV.pdf', '_blank');
        } else if (i18n.language === "da") {
            window.open('/src/assets/DA-CV.pdf', '_blank');
        }
    };

    return (
        <IntroSection id="introduction">
            <IntroWrapper>
            {title && (
                    <TypeAnimation
                        key={title}
                        sequence={[
                            1000,
                            title,
                            1000,
                        ]}
                        wrapper="span"
                        speed={5}
                        style={{ fontSize: "2.5rem", display: "inline-block", fontWeight: "bold" }}
                        repeat={Infinity}
                    />
                )}
                <IntroWrapperHorizon>
                    <IntroText>{t("introduction.description")}</IntroText>
                </IntroWrapperHorizon>
                <IntroWrapperHorizon>
                    <StyledButton>
                        <a onClick={handleOnClick}>
                            {t("download.github")}
                        </a>
                    </StyledButton>
                    <StyledButton>
                        <a onClick={downloadFile}>
                            {t("download.resume")}
                        </a>
                    </StyledButton>
                </IntroWrapperHorizon>
            </IntroWrapper>
        </IntroSection>
    );
};

export default Introduction;

const IntroText = styled.p`
    color: black;
    font-size: 1.4rem;
    padding-right: 1rem;
    place-content: center;

    @media (max-width: 1024px) {
        font-size: 1.3rem;
        padding-right: 0.9rem;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        padding-right: 0.8rem;
    }

    @media (max-width: 420px) {
        font-size: 1.1rem;
        padding-right: 0.7rem;
    }
`;

const StyledButton = styled.button`
    background-color: #3D405B;
    border-radius: 5px;
    justify-content: space-evenly;
    border: none;
    transition: border 0.3s ease-in-out;
    //font-family: "Poppins", serif;
    font-weight: bold;
    padding: 0.2rem 0.8rem;
    width: 8rem;
    height: 3rem;
    font-size: 1.2rem;

    &:hover {
        border-bottom: 5px solid #81B29A;
        border-left: 4px solid #81B29A;
    }

    @media (max-width: 1024px) {
        width: 8rem;
        height: 3rem;
        font-size: 1.1rem;
    }

    @media (max-width: 768px) {
        width: 6rem;
        height: 1rem;
        font-size: 1rem;
    }

    @media (max-width: 420px) {
        width: 5rem;
        height: 0.9rem;
        font-size: 1rem;
    }
}`;