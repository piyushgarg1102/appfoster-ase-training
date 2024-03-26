const userListing = document.querySelector(".user-listing");
const mainModalData = document.querySelector(".mainModalData");

let url = `https://gorest.co.in/public/v2/users`;

async function getUserListings() {
  let response = await fetch(`https://gorest.co.in/public/v2/users`);
  let data = await response.json();
  renderUserListings(data);
}
// getUserListings().then((data) => console.log(data));

function renderUserListings(data) {
  data.map((user) => {
    userListing.innerHTML += `
    <div class="user-listing-item">
        <h5 class="text-primary">${user.name}</h5>
        <button
        type="button"
        class="btn text-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onclick=buttonClicked(${user.id})
        >
        <i class="fa fa-eye"></i>
        </button>
    </div>
    `;
  });
}
getUserListings();

async function buttonClicked(id) {
  console.log(id);
  let userResponse = await fetch(`${url}/${id}`);
  let data = await userResponse.json();
  setModalData(data);
}

function setModalData(data) {
  console.log(data);
  mainModalData.innerHTML = `
    <div class="modal-body">
    <div class="userData">
    <div class="data-div">
    <p class="data-heading">Name: </p>
    <p class="text-primary">${data.name}</p>
    </div>
    <div class="data-div">
    <p class="data-heading">Email: </p>
    <p class="text-primary">${data.email}</p>
    </div>
    <div class="data-div">
    <p class="data-heading">Gender: </p>
    <p class="text-primary">${data.gender}</p>
    </div>
    <div class="data-div">
    <p class="data-heading">Status:</p>
    <p class="text-primary">${data.status}</p>
    </div>
    </div>
    </div>
    `;
}
