const API_KEY = "2013baa325f900dd9e24efca5e1b54f5"; // Your API key
const BASE_URL = "https://gnews.io/api/v4";
const NEWS_CONTAINER = document.getElementById("news-container");

// Fetch top headlines from GNews
async function fetchTopHeadlines() {
  const url = `${BASE_URL}/top-headlines?token=${API_KEY}&lang=en`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    displayNews(data.articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    NEWS_CONTAINER.innerHTML = `<p>Error loading news. Please try again later.</p>`;
  }
}

// Display news articles on the page
function displayNews(articles) {
  NEWS_CONTAINER.innerHTML = ""; // Clear existing content

  articles.forEach((article) => {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    articleDiv.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description || "No description available."}</p>
      <a href="${article.url}" target="_blank">Read More</a>
    `;

    NEWS_CONTAINER.appendChild(articleDiv);
  });
}

// Fetch and display news on page load
fetchTopHeadlines();
