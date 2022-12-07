import React from 'react';
import avatar from './../../images/boy.png';
import addIcon from './../../images/addButton.svg';
import { Link } from 'react-router-dom';
import './ChildrenNav.css';

function ChildrenNav() {
    return (
        <>
            <div className="child-wrapper">
                <Link className="child-avatar-box" to="/addChild">
                    <img className="child-avatar" src={avatar} alt="child" />
                    <p>Jano</p>
                </Link>
                <Link to="/addChild">
                    <img src={addIcon} alt="addIcon" className="add_icon" />
                </Link>
            </div>
            <div>
                <button></button>
            </div>
        </>
    );
}

export default ChildrenNav;
