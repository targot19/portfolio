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
    flex-direction: column;
`;

const EducationTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: bold;
    margin: 2rem 0 0 0;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }

    @media (max-width: 420px) {
        font-size: 1.2rem;
    }
`;

const EducationYear = styled.h4`
    font-size: 1.1rem;
    font-weight: normal;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 420px) {
        font-size: 1rem;
    }
`;

const EducationDescription = styled.p`
    font-size: 1.3rem;
    font-weight: normal;
    text-align: justify;
    word-break: break-word;
    line-height: 2rem;
    word-wrap: break-word;

    @media (max-width: 1024px) {
        font-size: 1.2rem;
        line-height: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        line-height: 1.8rem;
    }

    @media (max-width: 420px) {
        font-size: 1.1rem;
        line-height: 1.8rem;
        text-align: left;
    }
`;