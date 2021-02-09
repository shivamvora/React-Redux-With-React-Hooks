import React, {useState} from 'react'
import {useDispatch} from "react-redux";

function AddActivity() {
    const dispatch = useDispatch();
    const [data,setData] = useState({
        name:"",
        duration:""
    });

    const handleChange = (e) => {
        
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
        
    }
    const addActivity = () => { 
            dispatch({
                type: "CREATE_ACTIVITY",
                payload:{
                    name: data.name,
                    duration: data.duration
                }
            })
    }
    return (
        <div className={"add"}>
            <div className={"input-section"}>
                <p>Activity:</p>
                <input onChange={handleChange} name={"name"} placeholder={"Activity Name....."}/>
            </div>

            <div className={"input-section"}>
                <p>Duration:</p>
                <input onChange={handleChange} name={"duration"} placeholder={"Activity Name....."}/>
            </div>
                <button onClick={addActivity}>Add Activity</button>            
        </div>
    )
}

export default AddActivity;
