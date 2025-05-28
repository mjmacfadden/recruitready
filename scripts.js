const contentArray = [
  {
    id: 1,
    image:
      "<img src='img/athletes/mary_grace_reynolds.webp' class='img-fluid' alt='Mary Grace Reynolds'>",
    name: "<h2>Mary Grace Reynolds</h2>",
    university: "<h3>Tufts University</h3>",
    division: "<h3>D3</h3>",
    sport: "<h3>Lacrosse</h3>",
    paragraph:
      "<p>Mary Grace graduated from Tufts University in 2023 and competed on the Women’s Lacrosse Team. Mary Grace brings a wealth of experience in a high-performing program, having competed in two National Championships and three NESCAC conference championships during her career. Despite the dual demands of athletics and academics, she excelled at both, setting and achieving the highest standards for herself on and off the field.</p><p>Hailing from the Chicago suburbs, Mary Grace navigated the recruiting process and was able to capture the attention of prestigious schools on the East Coast – the region that most dominates her sport. Her experiences both in the recruiting space and as a collegiate athlete lend her invaluable insights as a mentor for future recruits.</p>",
    button:
      "<a href='https://calendly.com' target='_blank'><button class='btn btn-danger'>Book Now</button>",
    socialLinks: ``,
  },
  {
    id: 2,
    image:
      "<img src='img/athletes/brandon-knieja.jpg' class='img-fluid' alt='Brandon Knieja'>",
    name: "<h2>Brandon Knieja</h2>",
    university: "<h3>Flagler College</h3>",
    division: "<h3>D3</h3>",
    sport: "<h3>Track</h3>",
    paragraph:
      "<p>Brandon Knieja is a senior business major at Flagler College and a standout student-athlete, competing in both track and cross country. Over the course of his collegiate career, he has earned five All-Conference honors and recently claimed first place in the 3000-meter race at the 2025 PBC Indoor Conference Championship. He began his college journey at the University of South Alabama before transferring to Flagler in his sophomore year, a transition that strengthened his leadership skills. Brandon’s experience as a collegiate athlete has instilled in him a strong sense of discipline, drive, and versatility–qualities he brings to both his academic work and professional aspirations.</p>",
    button:
      "<a href='https://calendly.com' target='_blank'><button class='btn btn-danger'>Book Now</button>",
    socialLinks: ``,
  },
  {
    id: 3,
    image:
      "<img src='img/athletes/enola-savel.jpg' class='img-fluid' alt='Enola Savel'>",
    name: "<h2>Enola Savel</h2>",
    university: "<h3>Flagler College</h3>",
    division: "<h3>D3</h3>",
    sport: "<h3>Track</h3>",
    paragraph:
      "<p>Enola Savel is a French senior at Flagler College graduating with a double major in International Business and Business Administration. A dedicated student-athlete, she came to the U.S. on an athletic scholarship to compete in both cross country and track. Throughout her four years at Flagler, Enola balanced the rigors of collegiate athletics with the demands of a double major, developing a strong sense of focus, discipline, and determination. Her personal best in the 5K is an impressive 17:40. As she explores career opportunities in business post-graduation, Enola is also passionate about mentoring and supporting future student-athletes as they navigate both academic and athletic challenges.</p>",
    button:
      "<a href='https://calendly.com' target='_blank'><button class='btn btn-danger'>Book Now</button>",
    socialLinks: ``,
  },
  {
    id: 4,
    image:
      "<img src='img/athletes/football_player.jpg' class='img-fluid' alt='Marcus Tate'>",
    name: "<h2>Marcus Tate</h2>",
    university: "<h3>Grand Valley State University</h3>",
    division: "<h3>D2</h3>",
    sport: "<h3>Football</h3>",
    paragraph:
      "<p>Marcus Tate is the starting quarterback for Grand Valley State University, leading one of the top Division II football programs in the country. Hailing from Columbus, Ohio, Marcus was a highly touted recruit known for his dual-threat capabilities—able to both throw deep and scramble for yards when needed. Now a junior at GVSU, he’s become a dynamic playmaker for the Lakers, with impressive stats in both passing and rushing yards. His leadership and clutch performances have been critical in guiding his team to multiple playoff appearances.</p><p>Marcus is pursuing a degree in Criminal Justice, with aspirations to enter law enforcement after his football career. Outside of football, he’s committed to making a positive impact in the community, regularly volunteering with local youth sports leagues and participating in mentorship programs. With his skill set and determination, Marcus has become a driving force for the Lakers, with high hopes of leading them to a Division II national championship.</p>",
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
      "<img src='img/athletes/gymnast.jpg' class='img-fluid' alt='Ryan Mitchel'>",
    name: "<h2>Ryan Mitchel</h2>",
    university: "<h3>Springfield College</h3>",
    division: "<h3>D3</h3>",
    sport: "<h3>Gymnastics</h3>",
    paragraph:
      "<p>Ryan Mitchell is a talented gymnast competing for Springfield College in Division III. Hailing from Richmond, Virginia, Ryan began his gymnastics journey at a young age, quickly falling in love with the sport. Known for his exceptional skills on the rings and parallel bars, he has earned multiple accolades in regional competitions and continues to shine on the national stage. Now a sophomore, Ryan is a key member of the Springfield team, consistently contributing to their success with his impressive routines and unwavering determination.</p><p>Ryan is pursuing a degree in Exercise Science, aspiring to work in sports performance and rehabilitation. Off the mat, he dedicates his time to coaching local youth gymnastics programs, inspiring the next generation of athletes. With his commitment to excellence and passion for the sport, Ryan aims to help lead his team to a national championship while paving the way for a successful career in sports.</p>",
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
      "<img src='img/athletes/swimmer.jpg' class='img-fluid' alt='Sophie Coehn'>",
    name: "<h2>Sophie Cohen</h2>",
    university: "<h3>Califoornia State University</h3>",
    division: "<h3>D2</h3>",
    sport: "<h3>Swim</h3>",
    paragraph:
      "<p>Sophie Cohen is a competitive swimmer at California State University, East Bay, making waves in Division II swimming. Originally from Seattle, Washington, Sophie has been passionate about the water since childhood, specializing in freestyle and butterfly events. Now a junior, she has already broken several school records and is a top contender in the Pacific West Conference, earning All-Conference honors for her outstanding performances in both individual and relay events.</p><p>Sophie is majoring in Environmental Science, driven by her commitment to ocean conservation and sustainability. Beyond the pool, she is an active member of the university's Environmental Club, participating in community clean-up events and awareness campaigns. With her dedication to both her sport and her studies, Sophie aims to leave a lasting impact on and off the pool deck, aspiring to compete at the national level and advocate for environmental protection in the future.</p>",
    button:
      "<a href='https://calendly.com' target='_blank'><button class='btn btn-danger'>Book Now</button>",
    socialLinks: `
      <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook danger"></i></a>
      <a href="https://www.twitter.com" target="_blank"><i class="bi bi-instagram danger"></i></a>
    `,
  },
  // Add more objects as needed
];

// Function to detect if PHP or static HTML environment
function isPhpEnvironment() {
  return window.location.pathname.includes(".php");
}

// Function to dynamically generate the link based on environment
function generateProfileLink(itemId) {
  if (isPhpEnvironment()) {
    return `profile.php?id=${itemId}`;
  } else {
    return `profile.html?id=${itemId}`; // Assuming static HTML files follow this naming convention
  }
}

// Function to render content dynamically
function renderContent() {
  const contentContainer = document.getElementById("content-container");
  let contentHTML = "";

  contentArray.forEach((item) => {
    contentHTML += `
      <div class="col-md-4">
        <div class="content-item" id="item-${item.id}">
          <a href="${generateProfileLink(item.id)}">
            <div class="image-container">
              ${item.image}
            </div>
            <div class="details-container">
              ${item.name}
              ${item.university},
              ${item.division},
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
      <div class="col-md-6 text-center px-4 mb-4">
        <div class="profile_img_container">
          ${item.image}
        </div>
      </div>
      <div class="col-md-6 px-4">
        ${item.name}
        ${item.university},
        ${item.division},
        ${item.sport}
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



// Function to handle search input and filter the content array
const inputField = document.getElementById('userInput');

// Add an event listener for the 'input' event to capture user input as they type
if (inputField) {
  inputField.addEventListener('input', function(event) {
    // Save the user input to a variable
    const userInputValue = event.target.value.toLowerCase().trim();

    // Log the variable to the console
    console.log("Captured input:", userInputValue);
    const filteredContent = contentArray.filter(
      (item) =>
        item.name.toLowerCase().includes(userInputValue) || // Match against name
        item.sport.toLowerCase().includes(userInputValue) || // Match against sport
        item.university.toLowerCase().includes(userInputValue) || // Match against university
        item.division.toLowerCase().includes(userInputValue),
    );
    renderFilteredContent(filteredContent); // Render the filtered results
    
  });
}

// Function to render filtered content based on search query
function renderFilteredContent(filteredContent) {
  const contentContainer = document.getElementById("content-container");
  let contentHTML = "";

  // Check if there are any matching results
  if (filteredContent.length === 0) {
    contentHTML = `<p class="text-center">No results found for your search.</p>`;
  } else {
    // Iterate over the filtered content and build the HTML structure
    filteredContent.forEach((item) => {
      contentHTML += `
        <div class="col-md-4">
          <div class="content-item" id="item-${item.id}">
            <a href="${generateProfileLink(item.id)}">
              <div class="image-container">
                ${item.image}
              </div>
              <div class="details-container">
                ${item.name}
                ${item.university},
                ${item.division},
                ${item.sport}
                ${item.paragraph}
              </div>
            </a>
          </div>
        </div>
      `;
    });
  }

  // Update the content container with the new HTML
  contentContainer.innerHTML = contentHTML;
}

// Initialize functions
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("content-container")) {
    renderContent();
    //handleSearch();
  }

  if (document.getElementById("detail-container")) {
    renderProfile();
  }
});
