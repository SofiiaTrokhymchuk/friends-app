import { usersList } from "./UsersList.js";
import { renderAllUsers } from "./renderUsers.js";
import { inputHandler } from "./inputHandler.js";

function main(){
    renderAllUsers(usersList);
    inputHandler();
}

main();
