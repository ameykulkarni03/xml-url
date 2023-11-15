const form = document.getElementById('sitemap-form');
form.addEventListener('submit', handleSubmit);
const container = document.getElementById('url-list');
container.style.display = 'none';

async function handleSubmit(e) {

  e.preventDefault();

  const url = document.getElementById('sitemap-url').value;

  try {

    const urls = await getUrls(url);

    displayUrls(urls);

  } catch (err) {

    displayError(err);

  }

}

async function getUrls(url) {

  const response = await fetch('api.php?url=' + encodeURIComponent(url));

  if (!response.ok) {
    throw new Error('Unable to extract sitemap URLs'); 
  }

  return await response.json();

}

function displayUrls(urls) {

  container.style.display = 'block';

  const ul = document.createElement('ul');

  urls.forEach(url => {
    const li = document.createElement('li');
    li.textContent = url;
    ul.appendChild(li);
  });

  container.appendChild(ul);

}

function displayError(err) {
  
  const container = document.getElementById('error');
  container.textContent = err;
  
}