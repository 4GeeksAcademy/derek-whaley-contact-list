import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const API_BASE = "https://playground.4geeks.com/contact/agendas/4geeks-user";

const AppProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await fetch(`${API_BASE}/contacts`);
      if (res.status === 404) {
        await createAgenda();
      }
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      const data = await res.json();
      setContacts(data.contacts);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      alert("Failed to fetch contacts.");
    }
  };

  const createAgenda = async () => {
    try {
      const res = await fetch(API_BASE, { method: "POST" });
      if (!res.ok) throw new Error("Failed to create agenda");
      console.log("Agenda created successfully.");
      fetchContacts();
    } catch (err) {
      console.error(err.message);
    }
  };

  const addContact = async (contact) => {
    const payload = {
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      address: contact.address,
    };
    try {
      const res = await fetch(`${API_BASE}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to add contact.");
      await res.json();
      fetchContacts();
    } catch (err) {
      console.error("Add contact error:", err.message);
    }
  };

  const deleteContact = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/contacts/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete contact.");
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Delete error:", err.message);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <AppContext.Provider value={{ contacts, addContact, deleteContact }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

