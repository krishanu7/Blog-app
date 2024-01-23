import { useState, useEffect } from "react";

const PasswordStrengthChecker = ({ password }) => {
    const [message, setMessage] = useState("");
    const [progress, setProgress] = useState("");

    const getActiveColor = (type) => {
        if (type === "Strong") return "#8BC926";
        if (type === "Medium") return "#FEBD01";
        return "#FF0054";
    };

    const handlePassword = (passwordValue) => {
        const strengthChecks = {
            length: 0,
            hasUpperCase: false,
            hasLowerCase: false,
            hasDigit: false,
            hasSpecialChar: false,
        };

        strengthChecks.length = passwordValue.length >= 8 ? true : false;
        strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
        strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
        strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
        strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

        let verifiedList = Object.values(strengthChecks).filter((value) => value);

        let strength = verifiedList.length === 5 ? "Strong" : verifiedList.length >= 2 ? "Medium" : "Weak";

        setProgress(`${(verifiedList.length / 5) * 100}%`);
        setMessage(strength);
    };

    useEffect(() => {
        handlePassword(password);
    }, [password]);

    return (
        <div className="progress-bg bg-gray-300 h-4 rounded-full">
            <div
                className={`progress ${getActiveColor(message)} h-full transition-width duration-300 ease-in`}
                style={{ width: progress }}
            ></div>
        </div>
    );
};
export default PasswordStrengthChecker;