import { Toggle } from 'Utilities';
import { Modal } from 'Elements';

const App = () => {
    return (
        <>
            <Toggle>
                {({ visible, onToggle }) => (
                    <>
                        <Modal visible={visible} onToggle={onToggle}>
                            <h1>111111111111</h1>
                        </Modal>
                        <button onClick={onToggle}>Open</button>
                    </>
                )}
            </Toggle>
        </>
    );
};

export default App;
