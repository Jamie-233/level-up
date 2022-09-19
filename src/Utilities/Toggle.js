import { useState } from 'react';

const Toggle = ({ children }) => {
    const [visible, setVisible] = useState(false);

    const onToggle = () => {
        setVisible(stat => !stat);
    };

    return children({ visible, onToggle });
};

export default Toggle;
