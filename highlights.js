const apiUrl = "https://www.scorebat.com/video-api/v3/feed";
const apiKey = "MTk2MzQxXzE3MzgyMjI4ODhfYTQxMmJmZTk0MjM4YWMwMTIxYzc3ZjU1NzdlNmFmNTg1ZGM0ZDg2MA==";

const getHighlights = async () => {
    try {
        const response = await fetch(`${apiUrl}/?token=${apiKey}`);
        const data = await response.json();
        console.log(data);

        const highlights = data.response; // Array of matches
        const highlightContainer = document.getElementById("highlight-container");

        highlights.slice(0, 6).forEach(match => {
            const matchCard = document.createElement("div");
            matchCard.classList.add("highlight-card");

            matchCard.innerHTML = `
                <img src="${match.thumbnail}" alt="Match Thumbnail">
                <h3>${match.title}</h3>
                <button class="watch-button" onclick="window.open('${match.matchviewUrl}', '_blank')">Watch</button>
            `;

            highlightContainer.appendChild(matchCard);
        });

    } catch (error) {
        console.error("Error fetching highlights:", error);
    }
};

getHighlights();
