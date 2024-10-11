const contentArray = [
    {
      id: 1,
      image: "<img src='image1.jpg' alt='Image 1'>",
      paragraph: "<p>This is the first paragraph of content.</p><p>This is the second paragraph of content.</p>",
      button: "<button class='btn btn-danger'>Book Now</button>",
      socialLinks: `
        <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook danger"></i></a> | 
        <a href="https://www.twitter.com" target="_blank"><i class="bi bi-instagram danger"></i></a>
      `
    },
    {
      id: 2,
      image: "<img src='image2.jpg' alt='Image 2'>",
      paragraph: "<p>This is the first paragraph of content.</p><p>This is the second paragraph of content.</p>",
      button: "<button class='btn btn-danger'>Book Now</button>",
      socialLinks: `
        <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook danger"></i></a> | 
        <a href="https://www.twitter.com" target="_blank"><i class="bi bi-instagram danger"></i></a>
      `
    },
    // Add more objects as needed
  ];
  
  // Render the content in the DOM
  const contentContainer = document.getElementById("content-container");
  
  contentArray.forEach(item => {
    contentContainer.innerHTML += `
      <div class="content-item" id="item-${item.id}">
        ${item.image}
        ${item.paragraph}
        ${item.button}
        <div class="social-links">
          ${item.socialLinks}
        </div>
      </div>
      <hr>
    `;
  });
  