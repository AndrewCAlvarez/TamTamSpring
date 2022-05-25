import  { getAllUsers } from "./fetch.js"
import  { addUser } from "./addUser.js"
import {updateUser} from "./updateUser.js"
import {deleteUser} from "./deleteUser.js"

getAllUsers();

let sendButton = document.getElementById('sendButton');
sendButton.onclick = addUser;

let updateButton = document.getElementById('updateUserButton');
updateButton.onclick = updateUser;

let deleteButton = document.getElementById('deleteUserButton');
deleteButton.onclick = deleteUser;