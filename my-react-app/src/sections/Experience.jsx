import React from 'react';
import SectionContainer from '../components/SectionContainer';
import ContentWrapper from '../components/ContentWrapper';
import HorizontalWrapper from '../components/HorizontalWrapper';
import SectionTitle from '../components/SectionTitle';
import { SectionTitleWrapper1 } from '../components/SectionTitleWrapper';
import en from '../locales/en.json';

const Experience = () => {
    return (
        <SectionContainer>
            <SectionTitleWrapper1>
                <SectionTitle>Work Experience</SectionTitle>
            </SectionTitleWrapper1>
            <ContentWrapper>
                <HorizontalWrapper>
                    <p>("introduction.title")</p>
                </HorizontalWrapper>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Experience;