import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const ModalStyle = styled.div`
  height: 365px;
  width: 650px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 45px;
  display: block;
  z-index: 1011;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};

  .popup-modal__close {
    position: absolute;
    font-size: 2rem;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }
`;

export default function Modal({ isVisible, onSetIsVisible }) {
  return (
    <ModalStyle isVisible={isVisible}>
      <i className="popup-modal__close" onClick={() => onSetIsVisible(false)}>
        <GrClose size={16} />
      </i>
      <h1>에이콘 Escape</h1>
      <div>
        오메메메메
        <br />
        우라차차 <br />
        팝업 내용 123 <br />
        팝업 내용 123 <br />
        팝업 내용 123
      </div>
    </ModalStyle>
  );
}
