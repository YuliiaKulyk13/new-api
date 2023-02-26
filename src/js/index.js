import getUsers from "./getUserApi";
import renderUser from "./renderUserCard";

const btn = document.querySelector(".get-users-btn");
const userContainer = document.querySelector(".user-container");

function onClickUsers(e) {
  userContainer.innerHTML = "";
  getUsers()
    .then((usersData) => {
      usersData.map((userData) => {
        renderUser(userData);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", onClickUsers);
