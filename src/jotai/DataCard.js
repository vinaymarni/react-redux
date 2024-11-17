import React, { useEffect } from 'react';
import { basicData, defaultData } from './jotaiStore';
import { useAtom } from 'jotai';
import { fetchingData } from './apis';

function DataCard() {
    const [data, setData] = useAtom(basicData);
    const { name, role, qualification, skills } = data;

    useEffect(()=>{
        console.log(data);
    }, [name]);

    return (
        <div className="formContainer">
            <button onClick={()=>fetchingData()}>Fetch Data</button>

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

            <button onClick={()=>setData(defaultData)}>Clear Data</button>
        </div>
    )
};

export default DataCard
