import React, {useContext,useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { StuContext } from "../Context/ContextApi";

const AddStudent = () => {
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [course,setCourse] = useState("");
  const [batch,setBatch] = useState("");

  const [data , setData] = useContext(StuContext);
  const navigate=useNavigate();

  const handelInput=(e)=>{
      setName(e.target.value)
      console.log(name);
  }

    const submitHandel=(e) => {
        e.preventDefault();
        setData([...data,
            {
                id:(data.length+1).toString(),
                name:name,
                age:age,
                course:course,
                batch:batch,
            }
        ])
        navigate("/students");
        console.log("Navigated");
        
    }

  return (
    <>
      <Box component="form"sx={{"& >:not(style)": { m: 1, width: "25ch" }}}noValidate autoComplete="off" className="Box">

        <TextField id="outlined-basic" label="Name" name="name"  variant="outlined" className="tf1" value={name} onChange={handelInput} />
        <TextField id="outlined-basic" label="Age" name="age" variant="outlined" className="tf2" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <TextField id="outlined-basic" label="Course" variant="outlined" className="tf3" value={course} onChange={(e)=>setCourse(e.target.value)}/>
        <TextField id="outlined-basic" label="Batch" variant="outlined" className="tf4" value={batch} onChange={(e)=>setBatch(e.target.value)} />

      </Box>

      <div>
        <button className="close"><Link to="/students">Close</Link></button>
        <button className="update" onClick={submitHandel} >Submit</button>
      </div>
    </>
  );
};

export default AddStudent;
