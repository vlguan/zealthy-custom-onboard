import React from "react";
const Wizard: React.FC<{currentPage: 'login' | 'page2' | 'page3'}> = ({currentPage}) => {
    const pageNumber = currentPage === 'login' ? 1 : currentPage === 'page2' ? 2 : 3;

    return (
        <div className="wizard">
            <h3>Page {pageNumber} out of 3</h3>
        </div>
    );
};
export default Wizard;