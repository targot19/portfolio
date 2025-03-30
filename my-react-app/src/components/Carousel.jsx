import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const reviews = [
  { _id: 1, text: "Multi-Byg A/S" },
  { _id: 2, text: "Kikkertland ApS" },
  { _id: 3, text: "SIND Ungdom" },
  { _id: 4, text: "Børnehuset Jægergårdsgade 68" },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // Show 3 cards at a time
    partialVisibilityGutter: 60, // Add more spacing between cards and edges
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 20,
  },
};

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => {
  return (
    <ArrowButton style={{ left: "-20px" }} onClick={onClick}>
      &#8592;
    </ArrowButton>
  );
};

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => {
  return (
    <ArrowButton style={{ right: "-20px" }} onClick={onClick}>
      &#8594;
    </ArrowButton>
  );
};

const CustomCarousel = () => {
  const { t } = useTranslation();

  return (
    <CarouselSection>
      <h1 className="text-center fw-bold my-5">
        {t("recommendations.title")} ({reviews.length})
      </h1>
      <CarouselWrapper>
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
          partialVisible={true} // Enable partial visibility
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {reviews.map((review) => (
            <Card key={review._id} style={{ width: "18rem", margin: "0 auto" }}>
              <Card.Body>
                <Card.Title>{review.text}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </Carousel>
      </CarouselWrapper>
    </CarouselSection>
  );
};

export default CustomCarousel;

const CarouselSection = styled.div`
  padding: 0px 20px;
  background-color: #f9f9f9;
  text-align: center;
  max-width: 100%; /* Allow the section to take full width */
  margin: 0 auto; /* Center the section */
`;

const CarouselWrapper = styled.div`
  max-width: 80%; /* Reduce the width of the carousel */
  margin: 0 auto; /* Center the carousel horizontally */
  height: 300px; /* Set a fixed height for the carousel */
  padding: 0 40px; /* Add padding to prevent overflow at the edges */
  overflow: hidden; /* Hide any overflowing content */
  position: relative; /* Ensure proper positioning for the buttons */
  @media (max-width: 568px) {
    max-width: 90%; /* Make it more compact on smaller screens */
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