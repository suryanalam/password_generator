import { useState } from "react";

const usePasswordGenerator = () => {
  let [password, setPassword] = useState("");
  let [errorMsg, setErrorMsg] = useState("");

  const generatePassword = (passwordLength, checkboxData) => {
    let generatedPassword = "", charset = "", selectedOptions;

    if (Number(passwordLength) === 0) {
      setErrorMsg("Set a valid password length !!");
      setPassword("");
      return;
    }

    selectedOptions = checkboxData.filter((item) => item.status);

    if (selectedOptions.length <= 0) {
      setErrorMsg("Select atleast one option !!");
      setPassword("");
      return;
    }

    selectedOptions.forEach((item) => {
      switch (item.title) {
        case "Include Upper Case Letters":
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case "Include Lower Case Letters":
            charset += "abcdefghijklmnopqrstuvwxyz";
            break;
        case "Include Numbers / Numerals":
            charset += "1234567890";
            break;
        case "Include Special Characters":
            charset += "!@#$%^&*()_+-=";
            break;
        default:
            break;
      }
    });

    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMsg("");
  };

  return { password, errorMsg, generatePassword };
};

export default usePasswordGenerator;
