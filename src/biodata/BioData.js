import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import './component.css';
import { updateForm } from '../redux';
import { initialState } from '../redux/form/formReducer';


function BioData() {
    const {name, role, skills, qualification} = useSelector(state => state.form);
    const dispatch = useDispatch();

    return (
        <div className="formContainer">
            <h1>Biodata of User</h1>
            <p className="bioDataName">Name: <span className="nameSpan">{name}</span></p>
            <p className="bioDataName">Role: <span className="nameSpan">{role}</span></p>
            <p className="bioDataName">Qualification: <span className="nameSpan">{qualification}</span></p>
            <p className="bioDataName">Skills: <span className="nameSpan">{skills.join(", ")}</span></p>
            <button onClick={()=>dispatch(updateForm(initialState))}>Clear Details</button>
        </div>
    )
}

export default BioData;
