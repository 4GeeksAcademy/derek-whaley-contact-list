import React, { useContext } from "react";
import { AppContext } from "../store";
import { Link } from "react-router-dom";

const Home = () => {
  const { contacts, deleteContact } = useContext(AppContext);

  return (
    <div className="container">
      <div className="header">
        <h1>Contact List</h1>
        <Link to="/add" className="btn btn-add">
          Add New Contact
        </Link>
      </div>
      <div className="contact-list">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <div key={contact.id} className="contact-card">
              <div className="contact-avatar">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt={contact.name}
                  className="avatar"
                />
              </div>
              <div className="contact-info">
                <h3>{contact.name}</h3>
                <p>
                  <i className="fas fa-map-marker-alt"></i> {contact.address}
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i> {contact.phone}
                </p>
                <p>
                  <i className="fas fa-envelope"></i> {contact.email}
                </p>
              </div>
              <div className="contact-actions">
                <Link to={`/edit/${contact.id}`} className="btn btn-edit">
                  <i className="fas fa-edit"></i>
                </Link>
                <button
                  className="btn btn-delete"
                  onClick={() => deleteContact(contact.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No contacts available. Add a new contact!</p>
        )}
      </div>
    </div>
  );
};

export default Home;


