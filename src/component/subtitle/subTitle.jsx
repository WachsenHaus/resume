import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const SubtitleStyle = styled.div`
  width: 100%;
  color: rgba(22, 17, 11, 0.61);
  left: 0;
  font-size: 2rem;
  margin-top: 1rem;
  span {
    font-size: 2rem;
    color: rgba(22, 17, 11, 1);
  }
  ${({ name }) =>
    name &&
    `
    &:before {
      opacity: 0.5;
        content: "${name}";
    }
  `}
  ${({ active }) =>
    active &&
    `
    &:before {
      opacity: 1;
      color : black;
      border-bottom: 1px solid rgba(22, 17, 11, 1);
      transition : all 0.3s ease-in;
  }
`}
`;

export default function SubTitle({ name, active }) {
  return <SubtitleStyle name={name} active={active}></SubtitleStyle>;
}
