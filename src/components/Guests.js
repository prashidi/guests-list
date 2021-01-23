import Guest from "./Guest";

const Guests = ({ guests, onDelete, onCheckedIn }) => {
  return (
    <>
      <div className='card'>
        <div className='card-header'>
          Guests <span className='my-2 my-sm-0'>1/2</span>
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
            {guests.map((guest) => (
              <Guest
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
