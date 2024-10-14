<?php 
    include ('header.php');
?>

<div class="container py-4 mt-4 home">
    <div class="row py-4 mt-4">
        <div class="col text-center py-4 mt-4">
            <h1 class="text-uppercase">Find a mentor, Reach your potential</h1>
            <h3>Real college athletes. Realtime communication. Real advice.</h3>
            <div class="d-flex search mb-4">
                <input id="searchInput" class="form-control" type="search" placeholder="find a mentor..." aria-label="Search">
            </div>
        </div>
    </div>
    <div class="row" id="content-container"></div>
</div>

<!-- Link to the shared JavaScript file -->
<script src="scripts.js"></script>

<?php 
    include ('footer.php');
?>
