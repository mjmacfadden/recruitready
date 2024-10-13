<?php 
    include ('header.php');
?>

<div class="container py-4 mt-4 home">
    <div class="row py-4 mt-4">
        <div class="col text-center py-4 mt-4">
            <h1 class="text-uppercase">Find a mentor, Reach your potential</h1>
            <h3>Real college athletes. Realtime communication. Real advice.</h3>
            <div class="d-flex search mb-4">
                <input id="searchInput" class="form-control" type="search" placeholder="find a mentor..." aria-label="Search" oninput="filterContent()">
            </div>
        </div>
    </div>
    <div class="row" id="content-container">

    </div>
</div>

<!-- Link to the shared JavaScript file -->
<script src="scripts.js"></script>
<!--
<script>
  const contentContainer = document.getElementById("content-container");
  let contentHTML = "";

  contentArray.forEach(item => {
    contentHTML += `
        <div class="col-md-4">
            <div class="content-item" id="item-${item.id}">
                <a href="profile.php?id=${item.id}">
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
</script>
-->


<?php 
    include ('footer.php');
?>

