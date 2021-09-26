import React from 'react';
import './Header.css';

// header section 
const Header = () => {
    return (
        <div className="header text-center m-3  p-5 rounded">
            <h1 className="fw-bold ">Seven <span style={{color: "tomato"}}>Bir Sreshtho</span></h1>
            <h3>
            This medal has been given to seven freedom fighters who were martyred in the war of independence of Bangladesh.</h3>
            <p>The United States intelligence agency, the CIA and the State Department estimated that <span style={{color:"tomato",}}>200,000 people had been killed</span>  in the genocide.</p>
            <p>The war ended on 16 December 1971</p>
        </div>
    );
};

export default Header;