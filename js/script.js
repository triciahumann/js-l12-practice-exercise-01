const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch (
        "https://randomuser.me/api?results=5"
    );
    const data = await usersRequest.json();
    const userResults = data.results; // array of objects
    displayUsers(userResults);
    //console.log(userResults); log out to make sure i got the array
};

getData();

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    for (let user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageURL = user.picture.medium;
        const userDiv = document.createElement("div")
            userDiv.innerHTML = `
                <h3>$${name}</h3>
                <p>${country}</p>
                <img src=${imageURL} alt = "User avatar" />
            `;
        randomFolks.append(userDiv);
    }
};