<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo $page_title ?? 'Recruit Ready Athletics'; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- SEO Meta Tags -->
    <meta name="author" content="Recruit Ready Athletics" />
    <meta name="keywords" content="" />
    <!-- Meta Description -->
    <meta name="description" content="<?php echo $meta_description ?? 'Welcome to Recruit Ready Athletics. Real college athletes. Realtime communication. Real advice.'; ?>" />

    <!-- Open Graph Data -->
    <?php
    // Set default Open Graph values, in case they're not defined in individual pages
    $og_title = isset($og_title) ? $og_title : "Recruit Ready Athletics";
    $og_description = isset($og_description) ? $og_description : "Real college athletes. Realtime communication. Real advice.";
    $og_url = isset($og_url) ? $og_url : "https://recruitreadyatheltics.com";
    $og_image = isset($og_image) ? $og_image : "https://recruitreadyathletics.com/img/og/og_homepage.jpg";
    $og_type = isset($og_type) ? $og_type : "website";
    ?>
    <meta property="og:title" content="<?php echo htmlspecialchars($og_title); ?>" />
    <meta property="og:description" content="<?php echo htmlspecialchars($og_description); ?>" />
    <meta property="og:url" content="<?php echo htmlspecialchars($og_url); ?>" />
    <meta property="og:image" content="<?php echo htmlspecialchars($og_image); ?>" />
    <meta property="og:type" content="<?php echo htmlspecialchars($og_type); ?>" />
    <meta property="og:site_name" content="Recruit Ready Athletics" />
    <!-- Twitter Card Data -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo htmlspecialchars($og_title); ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($og_description); ?>">
    <meta name="twitter:image" content="<?php echo htmlspecialchars($og_image); ?>">

    <base href="/recruitready/">
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>
<body>


  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <!-- Logo Image in the top left -->
      <a class="navbar-brand" href="index.php">
        <img src="img/recruit_ready_athletics.webp" alt="Recruit Ready Athletics" height="30" class="d-inline-block align">
      </a>
      <!-- Navbar toggler for responsive view -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.php">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.php">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<!-- Modal -->
<div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <!-- Close button (X) -->
          <button type="button" class="btn-close close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex justify-content-center align-items-center">
          <!-- Search Form -->
          <form class="d-flex" action="search.php" method="GET">
                <!-- Search Input -->
                <input class="form-control me-2 searchInput" type="search" placeholder="search..." name="q" id="searchInput" aria-label="Search">
                <!-- Submit Button -->
                <button class="btn btn-primary searchSubmit" type="submit">GO</button>
          </form>
        </div>
      </div>
    </div>
</div>