import { Box4 } from "../components/SectionContainer";
import { SectionTitleEducation } from "../components/SectionTitle";
import { ContentWrapper1 } from "../components/ContentWrapper";
import HorizontalWrapper from "../components/HorizontalWrapper";
import { useTranslation } from "react-i18next";
import React from "react";
import styled from 'styled-components';
import EducationCard from "../components/EducationCard";

const Education = () => {
    const { t } = useTranslation();
    const educationsList = t("education.educationsList", { returnObjects: true }).slice(0);

    return (
        <Box4 id="education">
            <ContentWrapper1>
            <SectionTitleEducation>Education</SectionTitleEducation>
                <HorizontalWrapper>
                {educationsList.map((educationsList, index) => (
                <EducationCard
                    key={index}
                    title={educationsList.title}
                    year={educationsList.year}
                    description={educationsList.description}
                />
            ))}
                </HorizontalWrapper>
            </ContentWrapper1>
        </Box4>
    )
}

export default Education;