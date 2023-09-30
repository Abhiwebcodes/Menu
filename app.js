
// The code defines a 'menu' array containing food items with 
// properties like ID, title, category, price, image, and Description.

const menu = [{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "img/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "img/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "img/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "img/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "img/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "img/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "img/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "img/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "img/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "img/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// It selects HTML element with the classes "section-center"
// and "btn-container" using 'querySelector'.

const sectionCenter = document.querySelector(".section-center");
const Container = document.querySelector(".btn-container");

// When the DOM content is loaded, it calls the 
// 'displayMenuItems(menu)' and 'displayMenuButtons()' functions.

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
displayMenuButtons();
});
  
//  The 'displayMenuItems(MenuItems)' function generates
//  HTML markup for each menu item using the 'map' Method 
//  and displays them on the page.

function displayMenuItems(MenuItems) {
  let displayMenu = MenuItems.map(function (item) {


    return `<article class="menu-item">
              <img src=${item.img} alt=${item.title}  class="photo" />
                <div class="item-info">
                      <header>
                          <h4>${item.title}</h4>
                          <h4 class="price">$${item.price}</h4>
                      </header>
                          <p class="item-text">
                            ${item.desc}
                          </p>
                </div>
            </article> `;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

// The 'displayMenuButtons()' function is responsible for 
// displaying buttons for filtering the menu items based on thier 
// categoriers.

function displayMenuButtons() {

}

// The code uses the 'reduce' method to extract unique 
// categories form the 'menu' array and stores them in the 
// 'categories' array.

const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }

    return values

  }, ['all']);

  // It generates HTML markup for category buttons using the
  // 'map' method on 'categories'.

  const categoryBtns = categories.map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  Container.innerHTML = categoryBtns; 

  // Event listners are added to each filter button using 
  // 'queryaSelectorALL' and 'foreach'. When clicked, they filter 
  // the menu items by category and update the diplayed items accordingly.
  
  const filterBtns = Container.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category){

          return menuItem;
        }

      });
      
      if(category === "all"){
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });