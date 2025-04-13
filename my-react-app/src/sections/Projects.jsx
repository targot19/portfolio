import React from 'react';
import SectionContainer from '../components/SectionContainer';
import ContentWrapper from '../components/ContentWrapper';
import HorizontalWrapper from '../components/HorizontalWrapper';
import SectionTitle from '../components/SectionTitle';
import SectionTitleWrapper from '../components/SectionTitleWrapper';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Projects = () => {
    const { t } = useTranslation();
    const n = 2; // Number of project to display
    const projectsList = t("projects.projectList", { returnObjects: true }).slice(0, n); //returns array of projects (only first n)

    return (
        <SectionContainer id="projects">
            <ContentWrapper>
                <SectionTitle>{t("projects.title")}</SectionTitle>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Projects;