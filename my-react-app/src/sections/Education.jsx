import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import ContentWrapper from "../components/ContentWrapper";
import HorizontalWrapper from "../components/HorizontalWrapper";
import { useTranslation } from "react-i18next";
import React from "react";
import styled from 'styled-components';

const Education = () => {
    const { t } = useTranslation();

    return (
        <SectionContainer id="education">
            <ContentWrapper>
            <SectionTitle>Education</SectionTitle>
                <HorizontalWrapper>
                    <Title>{t("education.master-title")}</Title>
                    <Year>{t("education.master-year-institution")}</Year>
                    <Description>{t("education.master-description")}</Description>
                </HorizontalWrapper>
                <HorizontalWrapper>
                    <Title>{t("education.exchange-title")}</Title>
                    <Year>{t("education.exchange-year-institution")}</Year>
                    <Description>{t("education.exchange-description")}</Description>
                </HorizontalWrapper>
                <HorizontalWrapper>
                    <Title>{t("education.bachelor-title")}</Title>
                    <Year>{t("education.bachelor-year-institution")}</Year>
                    <Description>{t("education.bachelor-description")}</Description>
                </HorizontalWrapper>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Education;

const Title = styled.h3`
    font-size: 1.5em;
    font-family: system-ui;
    font-weight: bold;
    `;

const Year = styled.h4`
    font-size: 1.2em;
    font-family: system-ui;
    font-weight: normal;
    `;

const Description = styled.p`
    font-size: 1em;
    font-family: system-ui;
    font-weight: normal;
    `;