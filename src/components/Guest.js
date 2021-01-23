import React from "react";

const Guest = ({ guest, onDelete, onCheckedIn }) => {
  return (
    <tr key={guest.id}>
      <td style={{ cursor: "pointer" }} onClick={() => onCheckedIn(guest.id)}>
        {guest.name}
      </td>
      <td>{guest.gender}</td>
      <td>{guest.table}</td>
      <td>
        {guest.attended && (
          <i
            className='fas fa-check px-3'
            style={{ color: "red", cursor: "pointer" }}
          ></i>
        )}
      </td>
      <td>
        <i
          className='far fa-edit mx-3'
          style={{ color: "teal", cursor: "pointer" }}
        ></i>
        <i
          className='far fa-trash-alt'
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(guest.id)}
        ></i>
      </td>
    </tr>
    // <div className='card my-3'>
    //   <div className='d-flex'>
    //     <div className='p-2 mr-auto '>
    //       <h4>{guest.name}</h4>
    //       <h5>Table Number: {guest.table}</h5>
    //     </div>
    //     <div className='p-2 my-auto'>
    //       <p>
    //         {guest.attended ? (
    //           <i className='fas fa-check px-3' style={{ color: "red" }}></i>
    //         ) : (
    //           ""
    //         )}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Guest;
