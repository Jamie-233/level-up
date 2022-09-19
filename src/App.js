import { animated, useSpring, transitions, useTransition } from '@react-spring/web';
import Toggle from './Toggle';
// import Modal from './Modal';
// import User from './User';
import UserProvider from './UserProvider';

const FadeIn = ({ visible, children }) => {

    const transitions = useTransition(visible, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
        // onRest: () => setItems([]),
      })


    // const styles = useTransition({
    //     from: {
    //         opacity: 0,
    //     },
    //     to: {
    //         opacity: 1,
    //     },
    //     leave: {
    //         opacity: 0,
    //     }
    //     // opacity: visible ? 1 : 0,
    //     // y: visible ? 0 : 24
    // });

    return transitions(({opacity}, item) => {
        console.log(item);
        console.log(opacity);
        return (
            <>
                <animated.div>{children}</animated.div>
            </>
        )
    });
};

const App = () => {


    return (
        <UserProvider>
            {/* <User /> */}
            <section>
                <Toggle>
                    {({ visible, onToggle }) => (
                        <>
                            {visible && (
                                <FadeIn visible={visible}>show me</FadeIn>
                            )}
                            {
                                transitions
                            }
                            {/* {visible && <animated.h1 style={styles}>show me</animated.h1>} */}
                            {/* <Modal visible={visible} onToggle={onToggle}>
                            <h1>111111111111</h1>
                        </Modal> */}
                            <button onClick={onToggle}>Show / Hide</button>
                        </>
                    )}
                </Toggle>
            </section>
        </UserProvider>
    );
};

export default App;
