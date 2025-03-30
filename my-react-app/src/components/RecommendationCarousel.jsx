import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import ContentWrapper from "../components/ContentWrapper";

const Recommendations = [
  { _id: 1, text: "Multi-Byg A/S" },
  { _id: 2, text: "Kikkertland ApS" },
  { _id: 3, text: "SIND Ungdom" },
  { _id: 4, text: "Jonas Holm" },
];

const RecommendationCarousel = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= Recommendations.length ? 0 : prevIndex + 2
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Recommendations.length - 2 : prevIndex - 2
    );
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle>
          {t("recommendations.title")} ({Recommendations.length})
        </SectionTitle>
        <Carousel>
          <ArrowButton style={{ left: "0px" }} onClick={handlePrev}>
            &#8592;
          </ArrowButton>
          <CardWrapper
          style={{
            transform: `translateX(-${currentIndex * (100 / 2)}%)`,
          }}
          >
            {Recommendations.slice(currentIndex, currentIndex + 2).map(
              (recommendation) => (
                <Card key={recommendation._id}>
                  <CardBody>
                    <CardTitle>{recommendation.text}</CardTitle>
                    <CardText>Hi</CardText>
                    <CardButton>Click</CardButton>
                  </CardBody>
                </Card>
              )
            )}
          </CardWrapper>
          <ArrowButton style={{ right: "0px" }} onClick={handleNext}>
            &#8594;
          </ArrowButton>
        </Carousel>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default RecommendationCarousel;

// Styled Components
const Carousel = styled.div`
  max-width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  height: 300px;
  overflow: hidden;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 20px; /* Add spacing between cards */
  justify-content: center;
  width: calc(100% * ${Recommendations.length / 2});
  transition: transform 0.5s ease-in-out;
`;

const Card = styled.div`
  padding: 10px;
  background-color: rgb(95, 44, 44);
  text-align: center;
  width: 18rem;
  margin: 0 auto;
  border-radius: 8px;
`;

const CardBody = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const CardTitle = styled.h3`
  color: blue;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const CardButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;