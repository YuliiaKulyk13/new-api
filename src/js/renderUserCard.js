const userContainer = document.querySelector(".user-container");

export default function renderUser(user) {
  const card = `
    <div class='card'>
    <img class="card-image" src="${user.avatar}" alt="photo user #${user.id}">
    <div class="person-info">
    <p class="user-name">
    ${user.first_name} ${user.last_name}
    </p>
    <p class="user-email">
    ${user.email}
    </p>
    </div>
    </div>
    
    `;
  userContainer.insertAdjacentHTML("beforeend", card);
}
