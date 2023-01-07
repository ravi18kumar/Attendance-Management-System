import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';


function Add({student,setStudent,setIsAdding}) {

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  
  const textInput = useRef(null);

  useEffect(()=>{
    textInput.current.focus();
  },[])

  const handleAdd = e => {
    e.preventDefault();
    if(!name || !roll){
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All-fields are required',
        showConfirmButton: true
      });
    }
    for(let i=0;i<student.length;i++){
      if(student[i].roll===roll){
        return Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Roll no already exists',
          showConfirmButton: true
        });
      }
    }
    const id = student.length + 1;
    const newStudent = {
      id,
      name,
      roll,
      checkin:"-1",
      checkout:"-1",
      flag:"1"
    }
    student.push(newStudent);
    setStudent(student);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: `${name}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500
    })
  }


  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Student</h1>
        <label htmlFor='name'>Name</label>
        <input 
        id="name"
        type="text"
        ref={textInput}
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="[A-Za-z ]+" 
        title="Please enter only letters and spaces"
        />
        <label htmlFor='roll'>Roll</label>
        <input
        id="roll"
        type="number"
        name="roll"
        value={roll}
        onChange={e => setRoll(e.target.value)}
        />
        <div style={{marginTop: "30px"}}>
          <input type="submit" value="Add" />
          <input
              style={{marginLeft:'12px'}}
              className="muted-button"
              type="button"
              value="Cancel"
              onClick={() => setIsAdding(false)}
              />
        </div>
      </form>
    </div>
  )
}

export default Add