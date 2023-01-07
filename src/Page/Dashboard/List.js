import React from "react";

function List({ student, handleCheckout, handleCheckin ,isEditing,isIn}) {
  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Roll</th>
            <th className="text-center" >
              Actions
            </th>
            
            <th>CheckIn Time</th>
            <th>CheckOut Time</th>
          </tr>
        </thead>
        <tbody>
          {student.length > 0 ? (
            student.map((student, i) => (
              <tr key={student.id}>
                <td>{i * 1+1}</td>
                <td>{student.name}</td>
                <td>{student.roll}</td>
                {student.flag==="1" ? (
                  <td className="text-center">
                  <button
                    onClick={() => handleCheckin(student.id)}
                    className="button muted-button"
                  >
                    Check-In
                  </button>
                  </td>

                ):
                (
                <td className="text-center" >
                  <button
                    onClick={() => handleCheckout(student.id)}
                    className="button muted-button"
                  >
                    Check-Out
                  </button>
                </td>
                )}
                
                
                <td>{student.checkin!=="-1" && (student.checkin)}</td>
                <td>{student.checkout!=="-1" &&student.checkout}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Student</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
