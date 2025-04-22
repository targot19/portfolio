import { EducationBox } from "../components/SectionContainer";
import { SectionTitleEducation } from "../components/SectionTitle";
import { EducationWrapper } from "../components/ContentWrapper";
import { EducationWrapperHorizon } from "../components/HorizontalWrapper";
import { useTranslation } from "react-i18next";
import React from "react";
import styled from 'styled-components';
import EducationCard from "../components/EducationCard";

const Education = () => {
    const { t } = useTranslation();
    const educationsList = t("education.educationsList", { returnObjects: true }).slice(0);

    return (
        <EducationBox id="education">
            <EducationWrapper>
            <SectionTitleEducation>Education</SectionTitleEducation>
                <EducationWrapperHorizon>
                {educationsList.map((educationsList, index) => (
                <EducationCard
                    key={index}
                    title={educationsList.title}
                    year={educationsList.year}
                    description={educationsList.description}
                />
            ))}
                </EducationWrapperHorizon>
            </EducationWrapper>
        </EducationBox>
    )
}

export default Education;