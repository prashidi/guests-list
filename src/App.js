import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Guests from "./components/Guests";
import SearchForm from "./components/SearchForm";
import GuestForm from "./components/GuestForm";

const App = () => {
  const [guests, setGuests] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const getGuests = async () => {
      const data = await fetchGuests();
      setGuests(data);
    };

    getGuests();
  }, []);

  //Fetch Guests
  const fetchGuests = async () => {
    const res = await fetch("http://localhost:5000/guests");

    const data = await res.json();

    return data;
  };

  //Fetch Guest
  const fetchGuest = async (id) => {
    const res = await fetch(`http://localhost:5000/guests/${id}`);

    const data = await res.json();

    return data;
  };

  //Filter Guests
  const search = (guests) => {
    return guests.filter(
      (guest) => guest.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
  };

  //Delete guest
  const deleteGuest = async (id) => {
    await fetch(`http://localhost:5000/guests/${id}`, { method: "DELETE" });
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  //Add guest

  const addGuest = async (guest) => {
    const res = await fetch("http://localhost:5000/guests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guest),
    });

    const newGuest = await res.json();

    setGuests([...guests, newGuest]);
  };

  //Set Check in
  const checkin = async (id) => {
    const guestToCheckedin = await fetchGuest(id);
    const updatedGuest = {
      ...guestToCheckedin,
      attended: !guestToCheckedin.attended,
    };

    const res = await fetch(`http://localhost:5000/guests/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedGuest),
    });

    const data = await res.json();

    setGuests(
      guests.map((guest) =>
        guest.id === id ? { ...guest, attended: data.attended } : guest
      )
    );
  };

  return (
    <Router>
      <Header />
      <div className='container main py-3'>
        <Route path='/add' component={() => <GuestForm onAdd={addGuest} />} />
        <Route path='/about' component={About} />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              <SearchForm keyword={keyword} setKeyword={setKeyword} />

              {guests.length > 0 ? (
                <Guests
                  guests={search(guests)}
                  onDelete={deleteGuest}
                  onCheckedIn={checkin}
                />
              ) : (
                <p>No Guest To Show</p>
              )}
            </>
          )}
        />
      </div>
      <div className='text-center'>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
