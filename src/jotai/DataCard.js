import React from 'react';
import { basicData } from './jotaiStore';
import { useAtom } from 'jotai';

function DataCard() {
    const [data] = useAtom(basicData);
    const { name, role, qualification, skills } = data;

    return (
        <div className="formContainer">
            <h1>Biodata Form</h1>
            <h2>Name - {name}</h2>
            <h2>Role - {role}</h2>
            <h2>Qualification - {qualification}</h2>
            <div className="skillContainer">
                {skills.map((item, index)=>{
                    return(
                        <p className="skillBox" key={index}>
                            {item}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default DataCard
