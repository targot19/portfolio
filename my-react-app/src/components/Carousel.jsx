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
    partialVisibilityGutter: 40, // Add more spacing between cards and edges
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
        >
          {reviews.map((review) => (
            <Card key={review._id} style={{ width: "18rem", margin: "0 auto" }}>
              <Card.Body>
                <Card.Title>{review.text}</Card.Title>
                <Card.Text>
                  Hi
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