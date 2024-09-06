let empInfo = [
  {
    src: "images/mohLinkedin.jpg",
    name: "Mohammad Alkhalaileh",
    date: "12/8/2024",
    durration: "2 weeks",
    salary: "2400",
  },
  {
    src: "images/mohLinkedin.jpg",
    name: "Waleed Aziz",
    date: "12/8/2024",
    durration: "1 weeks",
    salary: "1500",
  },
  {
    src: "images/mohLinkedin.jpg",
    name: "khalid Jamal",
    date: "12/8/2024",
    durration: "2 weeks",
    salary: "1390",
  },
  {
    src: "images/mohLinkedin.jpg",
    name: "Mohammad Hussam",
    date: "12/8/2024",
    durration: "2 weeks",
    salary: "1500",
  },
  {
    src: "images/mohLinkedin.jpg",
    name: "Sami Ahmad",
    date: "12/8/2024",
    durration: "2 weeks",
    salary: "3000",
  },
  {
    src: "images/mohLinkedin.jpg",
    name: "Ali Abdullah",
    date: "12/8/2024",
    durration: "2 weeks",
    salary: "1000",
  },
];

function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}

let showLength = 4;
for (i = 0; i < showLength; i++) {
  const myCard = elementFromHtml(`
  <div class="col" id="${i}">
            <div class="emp-card card">
              <div class="mx-auto">
                <img src="${empInfo[i].src}" class="imgc card-img-top  mt-2" alt="..." />
              </div>
              <div class="card-body">
                <h4 id="empName" class="emp-name mx-auto" vlaue="name">${empInfo[i].name}</h4>
                <p>Submitted on:</p>
                <p class="vac-date output">${empInfo[i].date}</p>
                <p>Duration:</p>
                <p class="vac-durration output">${empInfo[i].durration}</p>
                <p>Salary:</p>
                <div class="emp-salary output">${empInfo[i].salary}</div>
                <div class="mx-auto">
                  <button type="button" class="btn btn-success">Decline</button>
                  <button type="button" class="btn btn-outline-success">
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </div>
`);
  document.body.children[1].children[3].children[1].appendChild(myCard);
}

function search() {
  let name, input, filter, element;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  for (i = 0; i < 4; i++) {
    name = empInfo[i].name;
    element = document.getElementById(i);
    if (name.toUpperCase().indexOf(filter) > -1) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  }
}
