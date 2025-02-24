import React, {useEffect, useState} from 'react';
// import axios from 'axios';
interface AboutPageProps {
    onNext: () => void;
}
const AboutPage: React.FC<AboutPageProps> = ({onNext}) => {
    return(
        <div>
            <p>about test</p>
            <button onClick={onNext}> Next</button>
        </div>
    )
};
export default AboutPage;