import React from "react";

const Guest = ({ guest, onDelete, onCheckedIn }) => {
  return (
    <tr key={guest.id}>
      <td>{guest.name}</td>
      <td>{guest.gender}</td>
      <td>{guest.table}</td>
      <td style={{ cursor: "pointer" }} onClick={() => onCheckedIn(guest.id)}>
        {guest.attended && (
          <i
            className='fas fa-check px-3'
            style={{ color: "red", cursor: "pointer" }}
          ></i>
        )}
      </td>
      <td>
        <i
          className='far fa-trash-alt'
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(guest.id)}
        ></i>
      </td>
    </tr>
  );
};

export default Guest;
