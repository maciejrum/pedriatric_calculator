import React, {useEffect, useState} from "react";
import boy from "./../../images/boy.png";
import girl from "./../../images/girl.png";
import "./AddChild.css";

function AddChild() {
    const [childName, setChildName] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");

    useEffect(() => {
        if(height > 0 && weight > 0 ){
            setBmi(Math.round(weight / (height / 100) ** 2))
        }
    }, [height, weight])


    function validateChildName(e) {
        setChildName(e.target.value);
    }

    function handleGender(e){
        setGender(e.target.value);
    }

    function handleWeight(e) {
        setWeight(Math.abs(e.target.value))
    }

    function handleHeight(e) {
        setHeight(Math.abs(e.target.value))
    }

    return <div className="child-card">
        <form>
            <div className="child-container">
                <img className="child-avatar" src={gender === "male" ? boy : girl } alt="Child"/>
                <input
                    type="text"
                    placeholder="Imię"
                    value={childName}
                    onChange={validateChildName}
                />
            </div>
            <div className="child-layout">
            <label htmlFor="birthDay">Data urodzenia</label>
            <input type="date" id="birthDay"/>
            </div>
            <div className="child-layout">
            <label htmlFor="weight">Waga</label>
            <input
                type="number"
                id="weight"
                value={weight}
                onChange={handleWeight}
            />
        </div>
            <div className="child-layout">
            <label htmlFor="height">Wzrost</label>
            <input
                type="number"
                id="height"
                value={height}
                onChange={handleHeight}
            />
            </div>

            <div className="child-layout">
            <label htmlFor="gender">Płeć: </label>
            <div>
            <label htmlFor="female">Kobieta</label>
            <input
                type="radio"
                name="gender"
                id="gender"
                value="female"
                onChange={handleGender}
            />
            </div>
            <div>
            <label htmlFor="female">Mężczyzna</label>
            <input
                type="radio"
                name="gender"
                id="gender"
                value="male"
                onChange={handleGender}
            />
            </div>
            </div>
            <div className="child-layout">
            <label htmlFor="bmi">BMI</label>
            <input type="text" id="bmi" value={bmi}/>
            </div>

        </form>
    </div>
}

export default AddChild;