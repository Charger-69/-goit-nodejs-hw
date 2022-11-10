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
  
  function removeContact(contactId) {
    // ...твій код
  }
  
  function addContact(name, email, phone) {
    // ...твій код
  }