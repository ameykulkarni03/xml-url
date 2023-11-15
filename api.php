<?php

// Get sitemap URL
$sitemapUrl = $_GET['url']; 

// Load XML 
$sitemap = new DOMDocument();
$sitemap->load($sitemapUrl);

// Initialize empty array
$urls = []; 

// Extract URLs from <loc> nodes
$locs = $sitemap->getElementsByTagName('loc');
foreach ($locs as $loc) {
  $urls[] = $loc->textContent;
}

// Return JSON response 
header('Content-Type: application/json');
echo json_encode($urls);

?>