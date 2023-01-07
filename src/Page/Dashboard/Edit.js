import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ student, selectedStudent, setStudent, setIsEditing, setIsIn }) {
  const date = new Date();
  
  let currentTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
  // console.log(currentTime)


    const id = selectedStudent.id;

    const [name, setName] = useState(selectedStudent.name);
    const [roll, setRoll] = useState(selectedStudent.roll);
    const [checkin, setCheckin] = useState(selectedStudent.checkin);
    const [flag, setFlag] = useState(selectedStudent.flag);
    
    const handleUpdate = e => {
        e.preventDefault();
        

        const studentt = {
          id,
          name,
          roll,
          checkin:currentTime,
          checkout:"",
          flag:"0"
        }

        for(let i=0; i<student.length;i++){
          if(student[i].id === id){
            student.splice(i,1,studentt)
            break;
          }
        }
        setStudent(student);
        setIsIn(false);
        setIsEditing(false);
    
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
        <h1>Check In</h1>
        <label htmlFor='name'>{name}</label>
        
        <label htmlFor='roll'>Roll-{roll}</label>
        
        <div style={{marginTop: "30px"}}>
          <input type="submit" value="Check In" />
        </div>
      </form>
        </div>
    );
}

export default Edit