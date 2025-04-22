import { Box4 } from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { ContentWrapper1 } from "../components/ContentWrapper";
import HorizontalWrapper from "../components/HorizontalWrapper";
import { useTranslation } from "react-i18next";
import React from "react";
import styled from 'styled-components';

const EducationCard = ({ title, year, description }) => {

    return (
        <EducationCardContainer>
            <EducationTitle>{title}</EducationTitle>
            <EducationYear>{year}</EducationYear>
            <EducationDescription>{description}</EducationDescription>
        </EducationCardContainer>
    )
}

export default EducationCard;

const EducationCardContainer = styled.div`
    display: flex;
    flex-direction: column;`

const EducationTitle = styled.h3`
    font-size: 1.8rem;
    font-family: system-ui;
    font-weight: bold;
    //border: 2px solid red;
    margin: 2rem 0 0 0;
    `;

const EducationYear = styled.h4`
    font-size: 1.2rem;
    font-family: system-ui;
    font-weight: normal;
    //border: 2px solid blue;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    `;

const EducationDescription = styled.p`
    font-size: 1.5rem;
    font-family: system-ui;
    font-weight: normal;
    text-align: justify;
    word-break: break-word;
    //border: 2px solid green;
    padding-right: 2.5rem;
    line-height: 2rem;
    white-space: wrap;
    word-spacing: 0rem;
    `;