<?php 
    include ('header.php');
?>

<div class="container profile_page">
    <div class="row" id="detail-container"></div>
</div>

<!-- Link to the shared JavaScript file -->
<script src="scripts.js"></script>
<script>
  const id = getUrlParameter('id');
  const item = contentArray.find(content => content.id == id);

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
    document.getElementById("detail-container").innerHTML = "<p>Item not found.</p>";
  }
</script>

<?php 
    include ('footer.php');
?>