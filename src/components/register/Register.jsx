import React, {useState, useRef} from "react";
import {Link} from "react-router-dom";
import "./Register.css";

function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    function validate(){
        if(email === ""){
            emailRef.current.classList.add("validation-error");
        } else {
            emailRef.current.classList.remove("validation-error")
        }
        if(password === ""){
            passwordRef.current.classList.add("validation-error")
        }
        else {
            passwordRef.current.classList.remove("validation-error")
        }
        if(name === ""){
            nameRef.current.classList.add("validation-error")
        }
        else {
            nameRef.current.classList.remove("validation-error")
        }
    }

    return <div className="register-box">
        <h1>Zarejestruj się</h1>
        <input type="text"
               placeholder="Imię"
               value={name}
               ref={nameRef}
               onChange={(e) => setName(e.target.value)}/>
        <input type="text"
               placeholder="Email"
               value={email}
               ref={emailRef}
               onChange={(e) => setEmail(e.target.value)}/>
        <input type="password"
               placeholder="Hasło"
               value={password}
               ref={passwordRef}
               onChange={(e) => setPassword(e.target.value)}/>
        <p>Masz już konto? <Link to="/login">Zaloguj się</Link></p>
        <button onClick={validate}>Zarejestruj się</button>
        <p><Link to="/">Kontynuuj bez rejestracji</Link></p>
    </div>
}

export default Register;