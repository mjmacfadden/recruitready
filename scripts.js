const contentArray = [
  {
    id: 1,
    image:
      "<img src='img/athletes/mary_grace_reynolds.webp' class='img-fluid' alt='Mary Grace Reynolds'>",
    name: "<h2>Mary Grace Reynolds</h2>",
    university: "<h3>Tufts University</h3>",
    division: "<h3>D1</h3>",
    sport: "<h3>Lacrosse</h3>",
    paragraph:
      "<p>Mary Grace graduated from Tufts University in 2023 and competed on the Women’s Lacrosse Team. Mary Grace brings a wealth of experience in a high-performing program, having competed in two National Championships and three NESCAC conference championships during her career. Despite the dual demands of athletics and academics, she excelled at both, setting and achieving the highest standards for herself on and off the field.</p><p>Hailing from the Chicago suburbs, Mary Grace navigated the recruiting process and was able to capture the attention of prestigious schools on the East Coast – the region that most dominates her sport. Her experiences both in the recruiting space and as a collegiate athlete lend her invaluable insights as a mentor for future recruits.</p>",
    button:
      "<a href='https://calendly.com' target='_blank'><button class='btn btn-danger'>Book Now</button>",
    socialLinks: `
      <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook danger"></i></a> 
      <a href="https://www.twitter.com" target="_blank"><i class="bi bi-instagram danger"></i></a>
    `,
  },
  {
    id: 2,
    image:
      "<img src='img/athletes/track_runner.jpg' class='img-fluid' alt='Track Runner'>",
    name: "<h2>Firstname Lastname</h2>",
    university: "<h3>University</h3>",
    division: "<h3>D1</h3>",
    sport: "<h3>Track</h3>",
    paragraph:
      "<p>This is the first paragraph of content.</p><p>This is the second paragraph of content.</p>",
    button:
      "<a href='https://calendly.com' target='_blank'><button class='btn btn-danger'>Book Now</button>",
    socialLinks: `
      <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook danger"></i></a>
      <a href="https://www.twitter.com" target="_blank"><i class="bi bi-instagram danger"></i></a>
    `,
  },
  {
    id: 3,
    image:
      "<img src='img/athletes/baseball_player.jpg' class='img-fluid' alt='Mary Grace Reynolds'>",
    name: "<h2>Dave Macfadden</h2>",
    university: "<h3>Depaul University</h3>",
    division: "<h3>D1</h3>",
    sport: "<h3>Baseball</h3>",
    paragraph:
      "<p>Mary Grace graduated from DePaulUniversity in 2023 and competed on the Women’s Lacrosse Team. Mary Grace brings a wealth of experience in a high-performing program, having competed in two National Championships and three NESCAC conference championships during her career. Despite the dual demands of athletics and academics, she excelled at both, setting and achieving the highest standards for herself on and off the field.</p><p>Hailing from the Chicago suburbs, Mary Grace navigated the recruiting process and was able to capture the attention of prestigious schools on the East Coast – the region that most dominates her sport. Her experiences both in the recruiting space and as a collegiate athlete lend her invaluable insights as a mentor for future recruits.</p>",
    button:
      "<a href='https://calendly.com' target='_blank'><button class='btn btn-danger'>Book Now</button>",
    socialLinks: `
      <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook danger"></i></a> 
      <a href="https://www.twitter.com" target="_blank"><i class="bi bi-instagram danger"></i></a>
    `,
  },
  {
    id: 4,
    image:
      "<img src='img/athletes/football_player.jpg' class='img-fluid' alt='Track Runner'>",
    name: "<h2>Firstname Lastname</h2>",
    university: "<h3>University</h3>",
    division: "<h3>D2</h3>",
    sport: "<h3>Football</h3>",
    paragraph:
      "<p>This is the first paragraph of content.</p><p>This is the second paragraph of content.</p>",
    button:
      "<a href='https://calendly.com' target='_blank'><button class='btn btn-danger'>Book Now</button>",
    socialLinks: `
      <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook danger"></i></a>
      <a href="https://www.twitter.com" target="_blank"><i class="bi bi-instagram danger"></i></a>
    `,
  },
  {
    id: 5,
    image:
      "<img src='img/athletes/gymnast.jpg' class='img-fluid' alt='Mary Grace Reynolds'>",
    name: "<h2>Mary Grace Reynolds</h2>",
    university: "<h3>University</h3>",
    division: "<h3>D3</h3>",
    sport: "<h3>Gymnastics</h3>",
    paragraph:
      "<p>Mary Grace graduated from University in 2023 and competed on the Women’s Lacrosse Team. Mary Grace brings a wealth of experience in a high-performing program, having competed in two National Championships and three NESCAC conference championships during her career. Despite the dual demands of athletics and academics, she excelled at both, setting and achieving the highest standards for herself on and off the field.</p><p>Hailing from the Chicago suburbs, Mary Grace navigated the recruiting process and was able to capture the attention of prestigious schools on the East Coast – the region that most dominates her sport. Her experiences both in the recruiting space and as a collegiate athlete lend her invaluable insights as a mentor for future recruits.</p>",
    button:
      "<a href='https://calendly.com' target='_blank'><button class='btn btn-danger'>Book Now</button>",
    socialLinks: `
      <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook danger"></i></a> 
      <a href="https://www.twitter.com" target="_blank"><i class="bi bi-instagram danger"></i></a>
    `,
  },
  {
    id: 6,
    image:
      "<img src='img/athletes/swimmer.jpg' class='img-fluid' alt='Track Runner'>",
    name: "<h2>Firstname Lastname</h2>",
    university: "<h3>University</h3>",
    division: "<h3>D2</h3>",
    sport: "<h3>Swim</h3>",
    paragraph:
      "<p>This is the first paragraph of content.</p><p>This is the second paragraph of content.</p>",
    button:
      "<a href='https://calendly.com' target='_blank'><button class='btn btn-danger'>Book Now</button>",
    socialLinks: `
      <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook danger"></i></a>
      <a href="https://www.twitter.com" target="_blank"><i class="bi bi-instagram danger"></i></a>
    `,
  },
  // Add more objects as needed
];

// Function to render content dynamically
function renderContent() {
  const contentContainer = document.getElementById("content-container");
  let contentHTML = "";

  contentArray.forEach((item) => {
    contentHTML += `
      <div class="col-md-4">
        <div class="content-item" id="item-${item.id}">
          <a href="profile.html?id=${item.id}">
            <div class="image-container">
              ${item.image}
            </div>
            <div class="details-container">
              ${item.name}
              ${item.university}
              ${item.division}
              ${item.sport}
              ${item.paragraph}
            </div>
          </a>
        </div>
      </div>
    `;
  });

  contentContainer.innerHTML = contentHTML;
}

// Function to render profile details based on URL
function renderProfile() {
  const id = getUrlParameter("id");
  const item = contentArray.find((content) => content.id == id);

  if (item) {
    const detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = `
      <div class="col-md-6 text-center mb-4">
        <div class="profile_img_container">
          ${item.image}
        </div>
      </div>
      <div class="col-md-6">
        ${item.name}
        ${item.university}
        ${item.paragraph}
        ${item.button}
        <div class="social-links">
          ${item.socialLinks}
        </div>
      </div>
    `;
  } else {
    document.getElementById("detail-container").innerHTML =
      "<p>Item not found.</p>";
  }
}

// Function to get URL parameter by name
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to handle search
function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filteredContent = contentArray.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.sport.toLowerCase().includes(query) ||
        item.university.toLowerCase().includes(query)
    );

    renderFilteredContent(filteredContent);
  });
}

// Function to render filtered content based on search query
function renderFilteredContent(filteredContent) {
  const contentContainer = document.getElementById("content-container");
  let contentHTML = "";

  filteredContent.forEach((item) => {
    contentHTML += `
      <div class="col-md-4">
        <div class="content-item" id="item-${item.id}">
          <a href="profile.html?id=${item.id}">
            <div class="image-container">
              ${item.image}
            </div>
            <div class="details-container">
              ${item.name}
              ${item.university}
              ${item.division}
              ${item.sport}
              ${item.paragraph}
            </div>
          </a>
        </div>
      </div>
    `;
  });

  contentContainer.innerHTML = contentHTML;
}

// Initialize functions
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("content-container")) {
    renderContent();
    handleSearch();
  }

  if (document.getElementById("detail-container")) {
    renderProfile();
  }
});
