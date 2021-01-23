import { useState, useEffect } from "react";
import GuestForm from "./components/GuestForm";
import Guests from "./components/Guests";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
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
  const [search, setSearch] = useState("");
  const [filteredGuests, setFilteredGuests] = useState([]);

  const AddGuest = (guest) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newGuest = { id, ...guest };

    setGuests([...guests, newGuest]);
  };

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

  useEffect(() => {
    setFilteredGuests(
      guests.filter((guest) =>
        guest.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, guests]);

  return (
    <>
      <Header />
      <div className='container py-3'>
        <GuestForm onAdd={AddGuest} />
        <SearchForm onSearch={setSearch} />
        {guests.length > 0 ? (
          <Guests
            onDelete={deleteGuest}
            onCheckedIn={checkedIn}
            filteredGuests={filteredGuests}
          />
        ) : (
          <p>No Guest To Show</p>
        )}
      </div>
    </>
  );
};

export default App;
