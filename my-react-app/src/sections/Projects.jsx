import React from 'react';
import { Box5 } from '../components/SectionContainer';
import { ContentWrapper2 } from '../components/ContentWrapper';
import HorizontalWrapper from '../components/HorizontalWrapper';
import SectionTitle from '../components/SectionTitle';
import SectionTitleWrapper from '../components/SectionTitleWrapper';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
    const { t } = useTranslation();
    const n = 4; // Number of project to display
    const projectsList = t("projects.projectList", { returnObjects: true }).slice(0, n); //returns array of projects (only first n)

    return (
        <Box5 id="projects">
            <ContentWrapper2>
                <SectionTitle>{t("projects.title")}</SectionTitle>
                {projectsList.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    labels={project.labels}
                    image={project.image}
                    demo="Live Demo"
                    sourceCode="Source Code"
                />
            ))}
            <MoreProjects>{t("projects.more")}</MoreProjects>
            </ContentWrapper2>
        </Box5>
    )
}

export default Projects;

const MoreProjects = styled.button`
    background-color: black;
    margin: 3rem;
    font-size: 1.5rem;
    border-radius: 10px;
    border: 2px solid black;
    `