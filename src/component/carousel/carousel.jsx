import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Item from "./item";
import Button from "./button";

const CarouselStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
  width: 20rem;
  height: 20rem;
  margin: auto;
  * {
    // box-sizing: border-box;
  }
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
`;
const Carousel = ({ images }) => {
  const totalItems = images.length;
  const [current, setCurrent] = useState(0);

  const isMoving = useRef(false);
  const ItemList = images.map((item, index) => {
    const key = `item_${index}`;

    const prev = current === 0 ? totalItems - 1 : current - 1;
    const next = current === totalItems - 1 ? 0 : current + 1;

    return (
      <Item
        src={item}
        key={key}
        active={index === current}
        prev={index === prev}
        next={index === next}
      />
    );
  });

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 500);
  }, [current]);
  useEffect(() => {
    if (!!images) {
    }
  }, []);
  const moveNext = () => {
    if (!isMoving.current) {
      if (current === totalItems - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  };

  const movePrev = () => {
    if (!isMoving.current) {
      if (current === 0) {
        setCurrent(totalItems - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  };

  return (
    <CarouselStyle>
      <div className="carousel">
        {ItemList}

        <Button prev handleSlide={movePrev} />
        <Button next handleSlide={moveNext} />
      </div>
    </CarouselStyle>
  );
};

export default Carousel;
