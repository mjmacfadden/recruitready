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
    name: "<h2>Mary Grace Reynolds</h2>",
    university: "<h3>Tufts University</h3>",
    division: "<h3>D1</h3>",
    sport: "<h3>Baseball</h3>",
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
    university: "<h3>Tufts University</h3>",
    division: "<h3>D3</h3>",
    sport: "<h3>Gymnastics</h3>",
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

// Function to get URL parameter by name
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

//SEARCH
const contentContainer = document.getElementById("content-container");

// Function to display all items initially
function displayContent(content) {
  contentContainer.innerHTML = ""; // Clear existing content
  if (content.length === 0) {
    contentContainer.innerHTML =
      "<div class='col text-center'><p>No mentors found.</p></div>";
    return;
  }
  content.forEach((item) => {
    const contentHTML = `
      <div class="col-md-4">
        <div class="content-item" id="item-${item.id}">
          <a href="profile.php?id=${item.id}">
            <div class="image-container">
              ${item.image}
            </div>
            <div class="details-container">
              <h2>${item.name}</h2>
              <h3>${item.university}</h3>
              <h3>${item.division}</h3>
              <h3>${item.sport}</h3>
              ${item.paragraph}
            </div>
          </a>
        </div>
      </div>`;
    contentContainer.innerHTML += contentHTML;
  });
}

function filterContent() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();

  // Debugging: Check if the searchInput is captured correctly
  console.log("Search Input: ", searchInput); // Should print the current input

  // Debugging: Check the content array before filtering
  console.log("Content Array: ", contentArray); // Should print the full contentArray

  const filteredContent = contentArray.filter((item) => {
    // Debugging: Log each item's properties to see what's being compared
    console.log(`Checking item: ${item.name}`);
    return (
      item.name.toLowerCase().includes(searchInput) ||
      item.university.toLowerCase().includes(searchInput) ||
      item.division.toLowerCase().includes(searchInput) ||
      item.sport.toLowerCase().includes(searchInput)
    );
  });

  // Debugging: Check the filtered content
  console.log("Filtered Content: ", filteredContent); // Should print filtered results

  displayContent(filteredContent); // Display filtered results
}

// Display all content initially
displayContent(contentArray);
