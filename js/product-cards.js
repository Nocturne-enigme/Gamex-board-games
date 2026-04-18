const games = [
  {
    id: 1,
    createdAt: "2026-04-10",
    name: "Monopoly GO",
    description: "New updated game in the version of masters.",
    category: "strategy",
    oldPrice: 172,
    price: 67,
    rating: 4.9,
    reviews: 24,
    img: "img/product-card/product-card-monopoly.png",
    topLabel: "New edition",
    accentLabel: "New in stock",
  },

  {
    id: 2,
    createdAt: "2026-01-18",
    name: "Shadowverse Legend",
    description: "Fantastical realm of strategy and chanting adventure.",
    category: "strategy",
    oldPrice: 192,
    price: 167,
    rating: 4.7,
    reviews: 14,
    img: "img/product-card/product-card-shadowverse.png",
    topLabel: "Hot release",
    accentLabel: null,
  },
  {
    id: 3,
    createdAt: "2025-04-10",
    name: "Interesting Journey",
    description: "An epic quest with unexpected twists and moments.",
    category: "adventure",
    oldPrice: 98,
    price: 72,
    rating: 4.8,
    reviews: 45,
    img: "img/product-card/product-card-interesting-journey.png",
    topLabel: null,
    accentLabel: "Only 3 left",
  },
  {
    id: 4,
    createdAt: "2026-04-05",
    name: "Gadeiar Wonders",
    description: "The ultimate deck and mystical realms on your board today.",
    category: "adventure",
    oldPrice: 254,
    price: 89,
    rating: 4.2,
    reviews: 5,
    img: "img/product-card/product-card-gadeiar-wonders.png",
    topLabel: "Top rated",
    accentLabel: null,
  },
  {
    id: 5,
    createdAt: "2026-03-15",
    name: "Bagdar",
    description: "Treacherous terrains and cunning opponents a survival.",
    category: "competitive",
    oldPrice: 154,
    price: 112,
    rating: 5.0,
    reviews: 12,
    img: "img/product-card/product-card-bagdar.png",
    topLabel: "Party favorite",
    accentLabel: "Selling fast",
  },
  {
    id: 6,
    createdAt: "2026-02-10",
    name: "Legends of Eldoria",
    description: "Ancient civilizations and mystical artifacts immersive...",
    category: "adventure",
    oldPrice: 96.99,
    price: 45,
    rating: 4.3,
    reviews: 17,
    img: "img/product-card/product-card-legends-of-eldoria.png",
    topLabel: null,
    accentLabel: "New in stock",
  },
  {
    id: 7,
    createdAt: "2026-01-25",
    name: "Mystic Realms",
    description: "Sparkling challenges of matching and collecting...",
    category: "competitive",
    oldPrice: 282,
    price: 112,
    rating: 3.9,
    reviews: 65,
    img: "img/product-card/product-card-mystic-realms.png",
    topLabel: "Award winner",
    accentLabel: null,
  },
  {
    id: 8,
    createdAt: "2026-01-10",
    name: "Badet Adtalo",
    description: "Mysteries of a forgotten world in an enchanting journey.",
    category: "adventure",
    oldPrice: 65.99,
    price: 23.99,
    rating: 4.5,
    reviews: 114,
    img: "img/product-card/product-card-badet-adtalo.png",
    topLabel: "Kids Favorite",
    accentLabel: "Newest popular",
  },
];

const productList = document.querySelector(".product-list");
const buttonContainer = document.querySelector(".catalogue-section__list");
const loadMoreBtn = document.querySelector(".catalogue-section__button-more");
let visibleGames = 8;
let filtered = games;
function displayGames(data) {
  let display = data.slice(0, visibleGames).map((item) => {
    const topLabel = `
<span class="product-card__label ${!item.topLabel ? "hidden" : ""}">
  <svg class="product-card__badge-icon" width="100" height="21">
    <use href="img/symbol-icons.svg#badge-icon"></use>
  </svg>

  <div class="product-card__top-icons">
    <svg class="product-card__sun-icon" width="10" height="10">
      <use href="img/symbol-icons.svg#sun-icon"></use>
    </svg>

    <span class="product-card__top-text">
      ${item.topLabel || ""}
    </span>
  </div>
</span>
`;
    const accentLabel = `<p class="product-card__label product-card__label--accent ${!item.accentLabel ? "hidden" : ""}">
                      ${item.accentLabel || ""}  
                    </p>`;
    return ` <li>
              <article class="product-card">
                <div class="product-card__top">
                   ${topLabel}
                  <button class="product-card__like-btn">
                    <svg class="product-card__like-icon" width="20" height="20">
                      <use href="img/symbol-icons.svg#like-heart-icon"></use>
                    </svg>
                  </button>
                </div>
                <img
                  class="product-card__img"
                  src=${item.img}
                  alt=${item.name}
                />
                <div class="product-card__wrapper">
                  <div class="product-card__block">
                    ${accentLabel}
                    <div class="product-card__description">
                      <h4 class="card-title"><a>${item.name}</a></h4>
                      <div class="product-card__description-block">
                        <p class="product-card__text text-jost-regular">
                         ${item.description}
                        </p>
                        <a class="product-card__info-icon">
                          <svg width="15" height="15">
                            <use href="img/symbol-icons.svg#info-icon"></use>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div class="product-card__bottom">
                      <div class="product-card__bottom-price">
                        <p class="product-card__price">$${item.price}</p>
                        <p class="product-card__old-price">$${item.oldPrice}</p>
                      </div>
                      <p class="product-card__reviews">${item.rating} ★ (${item.reviews} reviews)</p>
                    </div>
                    <button type="button" class="button product-card__button">
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            </li>`;
  });
  display = display.join("");
  productList.innerHTML = display;

  if (visibleGames >= data.length) {
    loadMoreBtn.classList.add("catalogue-section__button-more--disabled");
  } else {
    loadMoreBtn.classList.remove("catalogue-section__button-more--disabled");
  }
}

displayGames(games);
displayButtons();

function displayButtons() {
  const categories = ["all", ...new Set(games.map((game) => game.category))];
  const categoryBtn = categories
    .map((item) => {
      return ` <li>
                <button type="button" class="catalogue-section__link" data-category="${item}" >${item}</button>
              </li>`;
    })
    .join("");
  buttonContainer.innerHTML = categoryBtn;
}

// now we'll get those buttons here
const filterBtn = document.querySelectorAll(".catalogue-section__link");

filterBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.category;
    visibleGames = 8;

    if (category === "all") {
      filtered = games;
    } else {
      filtered = games.filter((game) => game.category === category);
    }
    filtered = sortGames(filtered);
    displayGames(filtered);
  });
});

// loading more

loadMoreBtn.addEventListener("click", () => {
  visibleGames += 8;
  displayGames(filtered);
});

// Sorting

let currentSort = "newest";

function sortGames(games) {
  const sorted = [...games];

  switch (currentSort) {
    case "newest":
      return sorted.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );

    case "popular":
      return sorted.sort((a, b) => b.reviews - a.reviews);

    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);

    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);

    default:
      return sorted;
  }
}

const sortBtns = document.querySelectorAll(".catalogue-section__sort-item");
sortBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentSort = e.currentTarget.dataset.sort;
    visibleGames = 8;
    filtered = sortGames(filtered);
    displayGames(filtered);
  });
});
