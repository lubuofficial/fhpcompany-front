import { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  position: relative;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? `
        border-color: #ccc;
    `
      : `
        border-color: transparent;
        opacity: .7;
    `}
  border: 2px solid #ccc;
  height: 40px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

const Magnifier = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  border: 2px solid #ccc;
  // border-radius: 50%;
  background-size: 300% 300%;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
  display: none;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width;
    const y = (e.pageY - top) / height;
    setPosition({ x, y });
  };

  return (
    <>
      <BigImageWrapper>
        <BigImage 
          src={activeImage} 
          onMouseMove={handleMouseMove}
          onMouseEnter={() => document.getElementById("magnifier").style.display = "block"}
          onMouseLeave={() => document.getElementById("magnifier").style.display = "none"} />
        <Magnifier id="magnifier" style={{backgroundImage: `url(${activeImage})`, backgroundPosition: `${position.x * 100}% ${position.y * 100}%`}} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
