import { useState } from "react";
import Button from "./components/Button";
import "./styles.css";
import Checkbox from "./components/Checkbox";
import PasswordStrengthIndicator from "./components/PasswordStrengthIndicator";
import usePasswordGenerator from "./hooks/usePasswordGenerator";

function App() {
  const [passwordLength, setPasswordLength] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  const [checkboxData, setCheckboxData] = useState([
    {
      title: "Include Upper Case Letters",
      status: false,
    },
    {
      title: "Include Lower Case Letters",
      status: false,
    },
    {
      title: "Include Numbers / Numerals",
      status: false,
    },
    {
      title: "Include Special Characters",
      status: false,
    },
  ]);

  let {password, errorMsg, generatePassword} = usePasswordGenerator();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);

    setTimeout(()=>{
      setIsCopied(false);
    },1000);

  };

  const updateCheckboxData = (index) => {
    let updateCheckboxData = [...checkboxData];
    updateCheckboxData[index].status = !updateCheckboxData[index].status;
    setCheckboxData(updateCheckboxData);
  };

  return (
    <>
      <header>Password Generator</header>
      <main className="container-bg">
        {password && (
          <section>
            <span className="password">Password: {password}</span>
            <Button
              customClass={"copyBtn"}
              onClickFun={copyToClipboard}
              text={isCopied ? "copied" : "copy"}
            />
          </section>
        )}
        <section className="range-div">
          <section>
            <label>No. of Characters:</label>
            <span>{passwordLength}</span>
          </section>
          <input
            type="range"
            max={20}
            name="passwordLength"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </section>
        {checkboxData && (
          <section>
            {checkboxData.map((item, index) => {
              return (
                <Checkbox
                  key={index}
                  title={item.title}
                  status={item.status}
                  onChangeFun={() => updateCheckboxData(index)}
                />
              );
            })}
          </section>
        )}
        {password && <PasswordStrengthIndicator password={password} />}
        {errorMsg && <span className="error-msg">{errorMsg}</span>}
        <Button
          customClass={"generateBtn"}
          onClickFun={()=>generatePassword(passwordLength, checkboxData)}
          text={"generate password"}
        />
      </main>
    </>
  );
}

export default App;
