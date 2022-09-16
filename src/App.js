import Toggle from './Toggle';
// import Portal from './Portal';
import Modal from './Modal';

const App = () => {
    console.log('App');
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
