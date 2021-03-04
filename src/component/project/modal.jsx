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
  overflow: auto;

  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
  display: ${(props) => {
    console.log(props);
    if (props.index === props.selectedItem && props.isVisible === true) {
      return "block";
    } else {
      return "none";
    }
  }};
  .popup-modal__close {
    position: absolute;
    font-size: 2rem;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555151;
    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(211, 200, 200);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
const Modal = ({ index, selectedItem, projectContent, isVisible, onSetIsVisible }) => {
  console.log(index, selectedItem);
  return (
    <ModalStyle index={index} selectedItem={selectedItem} isVisible={isVisible}>
      <i className="popup-modal__close" onClick={() => onSetIsVisible(false)}>
        <GrClose size={16} />
      </i>
      {projectContent}
    </ModalStyle>
  );
};
export default Modal;
