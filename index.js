const contactsOperations = require("./contacts.js");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");
program.parse(process.argv);

const argv = program.opts();


async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case "list":
        const contacts = await contactsOperations.listContacts();
        console.table(contacts);
        break;
  
      case "get":
        // ... id
        const contact = await contactsOperations.getContactById(id);
        console.table(contact);
        break;

        case "add":
            // ... name email phone
            const addedContact = await contactsOperations.addContact(
              name,
              email,
              phone
            );
            console.table(addedContact);
            break;

            case "remove":
      // ... id
      const removeContact = await contactsOperations.removeContact(id);
      console.table(removeContact);
      break;
    }
  }
  invokeAction(argv);