import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false, 
    onLogout: () => {}, // hum nai yai is liay kia hai Q kay is sai humhay achi ide mil jaay gi mtlb kay hum kahi bhe props ya ctx ki help sai onLogout ko acces kry gay to easy way sai access ho jaay ga or jaisy hi hum likhy gay "prop." to vs code automatic provide kr day ga 
    onLogin: (email, password) => {}
});

 export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoginInformation = localStorage.getItem('isLoggedIn');
    
        if (storedLoginInformation === '1') {
          setIsLoggedIn(true);
        };
      }, [])
  
    const loginHandler = (email, password) => {
      localStorage.setItem('isLoggedIn', '1');
      setIsLoggedIn(true);
    };
    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;