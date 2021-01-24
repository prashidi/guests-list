import Guest from "./Guest";

const Guests = ({ onDelete, onCheckedIn, guests }) => {
  const totalGuests = guests.length;

  const totalAttended = Object.values(guests).filter(
    (guest) => guest.attended === true
  ).length;

  return (
    <>
      <div className='card card-horizontal'>
        <div className='card-header'>
          <div class='row'>
            <div class='col align-self-start'>
              <h5 className='flex-column'>Total Checked In: {totalAttended}</h5>
            </div>
            <div class='col align-self-end'>
              <h5>Total Guests: {totalGuests}</h5>
            </div>
          </div>
        </div>
        <table className='card-table table'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Gender</th>
              <th scope='col'>Table</th>
              <th scope='col'>Checked In</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest, idx) => (
              <Guest
                key={idx}
                guest={guest}
                onDelete={onDelete}
                onCheckedIn={onCheckedIn}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Guests;
