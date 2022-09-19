import styled from 'styled-components';
import { Portal, absolute } from 'Utilities';
import { Card } from './Cards';
import Icon from './Icon';

const ModalWarper = styled.div`
    ${absolute({})};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalCard = styled(Card)`
    position: relative;
    min-width: 320px;
    z-index: 10;
    margin-bottom: 100px;
`;

const CloseButton = styled.button`
    ${absolute({ x: 'right', y: 'top' })};
    border: none;
    background: transparent;
    padding: 10px;
    cursor: pointer;
`;

const Background = styled.div`
    ${absolute({})};
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
`;

const Modal = props => {
    const { visible, onToggle, children } = props;

    return (
        <Portal>
            {visible ? (
                <ModalWarper>
                    <ModalCard>
                        <CloseButton onClick={onToggle}>
                            <Icon name="close" color="grey" />
                        </CloseButton>
                        <div>{children}</div>
                    </ModalCard>
                    <Background onClick={onToggle} />
                </ModalWarper>
            ) : null}
        </Portal>
    );
};

export default Modal;
