const transition = ({ property = 'all', length = '0.3s', ease = 'ease' }) => {
    return `transition: ${property} ${length} ${ease};`;
};

export default transition;
