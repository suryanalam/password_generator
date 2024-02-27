import React, { useEffect, useState } from "react";

const PasswordStrengthIndicator = ({password}) => {
    const [strength, setStrength] = useState('');

    useEffect(()=>{
        if(password.length <= 4){
            setStrength('weak')
        }else if (password.length <= 8){
            setStrength('medium')
        }else if (password.length <= 12){
            setStrength('strong')
        }else{
            setStrength('very strong')
        }
    },[password.length])

  return (
    <section>
      <span>Password Strength:</span>
      <span>{strength}</span>
    </section>
  );
};

export default PasswordStrengthIndicator;
