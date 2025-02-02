// 1. Toggle menu for small screens with smooth transition
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});

// 2. Smooth scroll for internal links with easing effect
const smoothScroll = (target, duration) => {
    const targetPosition = document.querySelector(target).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'), 1000);
    });
});

// 3. Dynamic Content Loading (Fetch latest football highlights from an API)
const loadHighlights = async () => {
    try {
        const response = await fetch('https://api.football-data.org/v2/matches', {
            headers: { 'X-Auth-Token': 'YOUR_API_KEY' }
        });
        const data = await response.json();
        const highlightsContainer = document.querySelector('.blog-section .blogs');
        
        // Process and display highlights (for demonstration purposes)
        data.matches.forEach(match => {
            const blogPost = document.createElement('article');
            blogPost.classList.add('blog-post');
            blogPost.innerHTML = `
                <img src="${match.homeTeam.crestUrl}" alt="${match.homeTeam.name}" loading="lazy">
                <div class="blog-content">
                    <span class="category">Football</span>
                    <span class="read-time">5 min read</span>
                    <h3>${match.homeTeam.name} vs ${match.awayTeam.name}</h3>
                    <p>${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</p>
                    <a href="#">Read more</a>
                </div>
            `;
            highlightsContainer.appendChild(blogPost);
        });
    } catch (error) {
        console.error('Error fetching highlights:', error);
    }
};

window.onload = loadHighlights;

// 4. User Preferences (Store favorite teams and players in localStorage)
let userPreferences = JSON.parse(localStorage.getItem('userPreferences')) || { teams: [], players: [] };

// Function to add a team to user preferences
function addTeam(team) {
    if (!userPreferences.teams.includes(team)) {
        userPreferences.teams.push(team);
        localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
        alert(`${team} has been added to your favorite teams!`);
    } else {
        alert(`${team} is already in your favorite teams.`);
    }
}

// Function to add a player to user preferences
function addPlayer(player) {
    if (!userPreferences.players.includes(player)) {
        userPreferences.players.push(player);
        localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
        alert(`${player} has been added to your favorite players!`);
    } else {
        alert(`${player} is already in your favorite players.`);
    }
}

// Example: Adding teams and players to the preferences
document.querySelector('#teams').addEventListener('click', function() {
    addTeam('Manchester United');
});

document.querySelector('#players').addEventListener('click', function() {
    addPlayer('Cristiano Ronaldo');
});

// 5. Scroll Animations: Reveal content as the user scrolls
const revealElements = document.querySelectorAll('.reveal');

const scrollAnimation = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);

// 6. Interactive Features: Buttons that trigger dynamic actions
document.querySelector('.get-started').addEventListener('click', function() {
    alert("Welcome! Let's get you started with personalized highlights.");
});

document.querySelector('.join').addEventListener('click', function() {
    alert("Thank you for joining! Stay tuned for updates.");
});

document.querySelector('.explore').addEventListener('click', function() {
    alert("Explore the features and enjoy personalized football highlights!");
});
