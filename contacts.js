/*
 * Розкоментуйте і запиши значення
 * const contactsPath = ;
 */

const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.resolve(__dirname, "./db/contacts.json");

// TODO: задокументувати кожну функцію

  async function listContacts() {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
    try {
    } catch (error) {
      console.log(error.message);
    }
  }
  
  async function getContactById(contactId) {
    try {
      const contacts = await listContacts();
      const result = contacts.find(({ id }) => id === contactId);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }
  
  async function addContact(name, email, phone) {
    try {
      const newContact = { id: v4(), name: name, email: email, phone: phone };
      const allContacts = await listContacts();
      const changedCollection = [...allContacts, newContact];
      updateSourceFile(changedCollection);
      return newContact;
    } catch (error) {
      console.log(error);
    }
  }

  async function removeContact(contactId) {
    try {
      const allContacts = await listContacts();
      const changedCollection = allContacts.filter(({ id }) => id !== contactId);
      updateSourceFile(changedCollection);
      return allContacts.filter(({ id }) => id === contactId);
    } catch (error) {
      console.log(error);
    }
  }
  


  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };