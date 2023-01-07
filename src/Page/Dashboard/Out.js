import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Out({ student, selectedStudent, setStudent, setIsOut }) {
  const date = new Date();
  let currentTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
  console.log(currentTime)
    const id = selectedStudent.id;
    const checkin =selectedStudent.checkin;

    const [name, setName] = useState(selectedStudent.name);
    const [roll, setRoll] = useState(selectedStudent.roll);
    const [flag, setFlag] = useState(selectedStudent.flag);
    
    const handleUpdate = e => {
        e.preventDefault();
        

        const studentt = {
          id,
          name,
          roll,
          checkin,
          checkout:currentTime,
          flag:"1"
        }

        for(let i=0; i<student.length;i++){
          if(student[i].id === id){
            student.splice(i,1,studentt)
            break;
          }
        }
        setStudent(student);
        setIsOut(false);
    
        Swal.fire({
          icon: 'success',
          title: 'Marked Attendance',
          text: `${name}'s data has been Added.`,
          showConfirmButton: false,
          timer: 1500
        })
    };

    return (
        <div className="small-container">
        <form onSubmit={handleUpdate}>
        <h1>Check-Out</h1>
        <label htmlFor='name'>{name}</label>
        
        <label htmlFor='roll'>Roll-{roll}</label>
        
        <div style={{marginTop: "30px"}}>
          <input type="submit" value="Check-Out" />
        </div>
      </form>
        </div>
    );
}

export default Out;