import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  position: absolute;
  top: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  transform: translateY(-50%);
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;
  border: 1px solid rgb(0, 0, 0, 0.5);

  &:after {
    content: " ";
    position: absolute;
    width: 5px;
    height: 5px;
    top: 50%;
    left: 54%;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    transform: translate(-50%, -50%) rotate(135deg);
  }

  ${({ prev }) =>
    prev &&
    `
    left:0;
  `}

  ${({ next }) =>
    next &&
    `
    right:0;

    &:after {
      left: 47%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `}
`;

export default function Button({ prev, next, handleSlide }) {
  return <ButtonStyle prev={prev} next={next} onClick={handleSlide} />;
}
