const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "/images/1.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "/images/2.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "/images/3.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "/images/4.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "/images/5.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "/images/6.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "/images/7.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "/images/8.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "/images/9.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
const rowDom = document.getElementById("rowId");

const displayAll = () => {
  rowDom.innerHTML = ``;
  menu.forEach((element) => {
    rowDom.innerHTML += `
    <div class="col-sm-12 col-lg-6 menu-items">
    <img
    class="photo"
    src="${element.img}"
    alt=""
  />

      <div class="menu-info">
        <div class="menu-title">
          <h4 class="mb-0">${element.title}</h4>
          <h4>${element.price}</h4>
        </div>
       <div class="menu-text">${element.desc}</div>
      </div>
    </div>
    `;
  });
};
const displayFilter = (filterID) => {
  rowDom.innerHTML = ``;
  const filteredRecipes = menu.filter((recipe) => recipe.category === filterID);
  filteredRecipes.forEach((element) => {
    rowDom.innerHTML += `
    <div class="col-sm-12 col-lg-6 menu-items">
    <img
    class="photo"
    src="${element.img}"
    alt=""
  />

      <div class="menu-info">
        <div class="menu-title">
          <h4 class="mb-0">${element.title}</h4>
          <h4>${element.price}</h4>
        </div>
       <div class="menu-text">${element.desc}</div>
      </div>
    </div>
    `;
  });
};
displayAll();
