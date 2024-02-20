import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Center from "./Center";

const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 80px;
  .slick-slider {
    margin: 0;
  }
  .slick-slide {
    padding: 0 0.5rem;
  }
  .slick-dots {
    bottom: 150px;
  }
  height: 220px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 0;
  padding: 0;
  border-radius: 100px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

// const ImageCard = styled.div`
//   display: flex;
//   align-items: center;
//   background: #f5f5f5;
//   color: #666;
//   margin: 0;
//   padding: 0;
//   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
//   transition: 0.3s;

//   &:hover {
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//   }
// `;

const ImageCard = styled.div`
`;

const TextContainer = styled.div`

`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Center>
      <Container className="slider-container">
        <Slider {...settings}>
          <ImageCard>
            <Image src="https://res.cloudinary.com/do4asbc12/image/upload/v1708344205/SP2/uliozvishj9qvquwv11v.webp" />
              <Title>Engine Overhaul Kits</Title>
          </ImageCard>
          <ImageCard>
            <Image src="https://res.cloudinary.com/do4asbc12/image/upload/v1708344205/SP2/o7cc2vr4fq9dnzqidwxj.jpg" />
            <Title>Balancer units</Title>
          </ImageCard>
          <ImageCard>
            <Image src="https://res.cloudinary.com/do4asbc12/image/upload/v1708344205/SP2/dusvqrs0ygcqhey2z9bz.webp" />
            <Title>Front Axle & Steering</Title>
          </ImageCard>
          <ImageCard>
            <Image src="https://res.cloudinary.com/do4asbc12/image/upload/v1708344205/SP2/boct5qisoiqtlc49vzai.webp" />
            <Title>Gaskets</Title>
          </ImageCard>
          <ImageCard>
            <Image src="https://res.cloudinary.com/do4asbc12/image/upload/v1708344205/SP2/hgzkdwolfztqjoreadog.webp" />
            <Title>Pistons, Rings & Liner Kits</Title>
          </ImageCard>
        </Slider>
      </Container>
    </Center>
  );
}
