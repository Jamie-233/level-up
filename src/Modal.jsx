import styled from 'styled-components';
import Portal from './Portal';

const ModalWarper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalCard = styled.div`
    position: relative;
    background: white;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 10;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: .3;
`;

const Modal = (props) => {
    const { visible, onToggle, children } = props;

    return (
        <Portal>
            {visible ? (
                <ModalWarper>
                    <ModalCard>
                        <CloseButton onClick={onToggle}>Close</CloseButton>
                        <div>{children}</div>
                    </ModalCard>
                    <Background />
                </ModalWarper>
            ) : null}
        </Portal>
    );
};

export default Modal;
