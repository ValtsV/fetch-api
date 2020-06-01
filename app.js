document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener("click", addPost);

function getText() {
  //   fetch("sample.txt")
  //     .then(function (response) {
  //       return response.text();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //     });

  fetch("sample.txt")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("output").innerText = data;
    })
    .catch((err) => console.log(err));
}

function getUsers() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach((user) => {
        output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function getPosts() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Pokemon</h2>";
      data.results.forEach((el) => {
        // output += `
        //           <ul>
        //               <li>ID: ${post.id}</li>
        //               <li>Name: ${post.title}</li>
        //               <li>Email: ${post.body}</li>
        //           </ul>
        //       `;
        output += `
          <div>
          <h3>${el.name}</h3>
          <div>
          `;
      });
      //   console.log(data);
      document.getElementById("output").innerHTML = output;
    });
}

function addPost(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch("https://pokeapi.co/api/v2/pokemon/", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
