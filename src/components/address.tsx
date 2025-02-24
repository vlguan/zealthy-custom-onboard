import React, {useEffect, useState} from 'react';
// import axios from 'axios';
interface AddressPageProps {
    onNext: () => void;
}
const AddressPage: React.FC<AddressPageProps> = ({onNext}) => {
    return(
        <div>
            <p>address test</p>
            <button onClick={onNext}> Next</button>
        </div>
    )
};
export default AddressPage;