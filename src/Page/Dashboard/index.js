import React, { useState} from 'react'

import { studentData } from '../../data';


import Add from './Add';
import Edit from './Edit';
import Header from './Header';
import List from './List';
import Out from './Out';


//  const count=0;
 function Dashboard() {
    const [student, setStudent] = useState(studentData);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isOut, setIsOut] = useState(false);
    const [isIn, setIsIn] = useState(true);
    const [count, setCount] = useState(0);
    
    const handleCheckin = (id) => {
      const[studentt] = student.filter(studentt => studentt.id===id)
      // console.log(studentt);
      setSelectedStudent(studentt);
      setIsEditing(true);
      // setCheckin("Time");
      setCount(count+1);
    }
    const handleCheckout = (id) => {
      const[studentt] = student.filter(studentt => studentt.id===id)
      // console.log(studentt);
      setSelectedStudent(studentt);
      setIsOut(true);
      setCount(count-1);
    }

  return (
    <div className='container'>
      {!isAdding && !isEditing && !isOut && (
        <>
        <Header 
            setIsAdding={setIsAdding}
        />
        <List 
            student={student}
            handleCheckin={handleCheckin}
            handleCheckout={handleCheckout}
            isIn={isIn}
            setIsIn={setIsIn}
        />  
              <h3>Total Attendance of Today = {count}</h3>
 
        </>
      )}
      {isAdding && (
        <Add 
            student={student}
            setStudent={setStudent}
            setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
            student={student}
            selectedStudent={selectedStudent}
            setStudent={setStudent}
            setIsEditing={setIsEditing}
            setIsIn={setIsIn}
        />
      )} 
      {isOut && (
        <Out
            student={student}
            selectedStudent={selectedStudent}
            setStudent={setStudent}
            setIsOut={setIsOut}
        />
      )} 
      
    </div>
    
  )
}
export default Dashboard;