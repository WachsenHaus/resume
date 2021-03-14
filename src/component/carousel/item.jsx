import styled from "styled-components";

const ItemStyle = styled.img`
  opacity: 0;
  position: absolute;
  top: 0;
  widht: 0px;
  height: 0px;
  max-width: 70%;
  max-height: 70%;
  margin: auto;
  padding: 1rem 4rem;
  border-radius: 50%;
  z-index: 100;
  transition: transform 0.25s, opacity 0.3s, z-index 0.5s, width 0.5s, height 0.5s;

  transform: ${(props) => (props.prev ? "translateX(-100%)" : "")};
  transform: ${(props) => (props.next ? "translateX(100%)" : "")};
  z-index: ${(props) => (props.prev || props.next ? 800 : "")};

  ${({ active }) =>
    active &&
    `
    opacity: 1;
    position: relative;
    height: 12rem;
    width : 12rem;
    z-index: 999;
  `}
`;

export default function Item({ src, active, prev, next }) {
  return <ItemStyle src={src} active={active} prev={prev} next={next} alt="" />;
}
