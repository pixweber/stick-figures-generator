import React, {useEffect, useState} from 'react';
import './App.css';

import Main from "./Main";

const App = () => {
    const [isVerified, setIsVerified] = useState(false);

    const checkPw = () => {
        // gets the current input value
        const answer = localStorage.getItem('pwd');

        if (answer === "Marc") {
            setIsVerified(true);
        } else {
            alert("Password incorrect");

            const pwd = prompt("Enter password");

            if (pwd === 'Marc') {
                setIsVerified(true);
                localStorage.setItem('pwd', pwd);
                window.location.reload();
            } else {
                checkPw();
                setIsVerified(false);
            }
        }
    }

    useEffect(checkPw, [isVerified]);

    return isVerified ? <Main/> : null;
}

export default App;
