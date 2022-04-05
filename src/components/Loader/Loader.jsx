import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import "./Loader.css";
const Loader = () => {
    return (
        <div data-testid="loader">
            <SpinnerCircular />
            <div>loading</div>
        </div>
    );
};

export default Loader;
