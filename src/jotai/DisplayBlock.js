import React, { useState } from 'react';
import { useAtom } from 'jotai';

import { basicData } from './jotaiStore';

export default function DisplayBlock() {
    const [formData, setFormData] = useAtom(basicData);
    const [skill, setSkill] = useState("");

    const { name, role, qualification, skills } = formData;

    const onValueChnage = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormData(prev=>({...prev, [name]:value}));
    };

    const onSkills = (e, identifier, index) => {
        if(identifier === "item"){
            setSkill(e.target.value);
        };

        if(identifier === "submit" && skill !== ""){
            const updatedSkills = [...skills, skill];
            setFormData(prev => ({ ...prev, skills: updatedSkills }));
            setSkill("");
        };

        if(identifier === "delete"){
            const updatedSkills = skills.filter((_, i) => i !== index); 
            setFormData(prev => ({ ...prev, skills: updatedSkills }));
        }
    }

    return (
        <div className="formMainContainer">
            <div className="formContainer">
                <h1>Biodata Form</h1>

                <h2>Name - {name}</h2>
                <input type="text" name="name" value={name} onChange={(e) => onValueChnage(e)} />

                <h2>Role - {role}</h2>
                <input type="text" name="role"value={role} onChange={(e) => onValueChnage(e)} />

                <h2>Qualification - {qualification}</h2>
                <input type="text" name="qualification"value={qualification} onChange={(e) => onValueChnage(e)} />

                <div className="skillContainer">
                    {skills.map((item, index)=>{
                        return(
                            <p className="skillBox" key={index}>
                                {item}{"  "}
                                    <svg className="skillDeteteIcon" onClick={(e) => onSkills(undefined, "delete", index)}
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    >
                                        <path d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z" fill="#607B96"/>
                                    </svg>
                            </p>
                        )
                    })}
                </div>
                <div className="skillsCon">
                    <input type="text" value={skill} name="skill" onChange={(e) => onSkills(e, "item")} />
                    <button name="submit" onClick={(e) => onSkills(e, "submit")}>Add Skills</button>
                </div>

                <button onClick={()=>("")} >Submit</button>
            </div>
        </div>
    )
};

