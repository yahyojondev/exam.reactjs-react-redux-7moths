import { Button } from "@mui/material";
import React, { useState, memo } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Token = "6756877976:AAG0sVndx22BQXhwfR98bJrMqGYaguuPE6Q";

// updates: https://api.telegram.org/bot6756877976:AAG0sVndx22BQXhwfR98bJrMqGYaguuPE6Q/getUpdates//

const USER_ID = "1240482901";
const userID = "1808354246";
const CHAT_ID = "-1001563165933";
const userfazullo = "5088090819";

const Contact = () => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextare] = useState("");
  const handleOrder = (e) => {
    let text = "";
    text += `FullName: ${name}%0A`;
    text += `Email: ${email}%0A%0A`;
    text += `izoh: ${textarea}`;
    console.log(name);
    let url = ` https://api.telegram.org/bot${Token}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    toast.success("Kontaktingiz qabul qilindi");
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact__wrapper">
            <div className="contact__left">
              <h1>Get in touch</h1>
              <NavLink>contact@e-comm.ng</NavLink>
              <NavLink>+234 4556 6665 34</NavLink>
              <NavLink>20 Prince Hakerem Lekki Phase 1, Lagos.</NavLink>
            </div>
            <form className="contact__right">
              <div className="input__wrapper">
                <p>Full Name</p>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="James Doe"
                  type="text"
                />
              </div>
              <div className="input__wrapper">
                <p>Email</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="jamesdoe@gmail.com"
                  type="text"
                />
              </div>
              <div className="input__wrapper">
                <p>Mesaage</p>
                <textarea
                  value={textarea}
                  onChange={(e) => setTextare(e.target.value)}
                  required
                  placeholder="Type your message"
                  type="text"
                />
              </div>
              <Button
                className="contact__send__btn"
                onClick={handleOrder}
                variant="contained"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="search__wrapper">
          <div className="input_wrapper">
            <input placeholder="search query" type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Contact);
