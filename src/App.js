import { useState } from "react";
import Guests from "./components/Guests";
import Header from "./components/Header";
const App = () => {
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: "Patrick Rashid",
      gender: "Male",
      attended: true,
      table: 1,
    },
    {
      id: 2,
      name: "Damaers Rashid",
      gender: "Female",
      attended: false,
      table: 2,
    },
  ]);

  const deleteGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  const checkedIn = (id) => {
    setGuests(
      guests.map((guest) =>
        guest.id === id ? { ...guest, attended: !guest.attended } : guest
      )
    );
  };
  return (
    <>
      <Header />
      <div className='container py-3'>
        {guests.length > 0 ? (
          <Guests
            guests={guests}
            onDelete={deleteGuest}
            onCheckedIn={checkedIn}
          />
        ) : (
          <p>No Guest To Show</p>
        )}
      </div>
    </>
  );
};

export default App;
