import React from 'react';
import SectionContainer from '../components/SectionContainer';
import ContentWrapper from '../components/ContentWrapper';
import HorizontalWrapper from '../components/HorizontalWrapper';
import SectionTitle from '../components/SectionTitle';
import en from '../locales/en.json';

const Experience = () => {
    return (
        <SectionContainer>
            <SectionTitle>Skillset</SectionTitle>
            <ContentWrapper>
                <HorizontalWrapper>
                    <p>("introduction.title")</p>
                </HorizontalWrapper>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default Experience;