// Trending movies data
const trendingMovies = [
    {
        title: 'Dragon',
        image: 'https://m.media-amazon.com/images/M/MV5BMTkzY2MzYjUtZDVmMi00ZTU3LTkxYTMtOTVlYjY5YmJkZGRhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
        rank: 1
    },
    {
        title: 'Leo',
        image: 'https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
        rank: 2
    },
    {
        title: 'Officer',
        image: 'https://m.media-amazon.com/images/M/MV5BZTJhOWU4YjQtZjE1YS00ZjU1LWE5ZDgtMjVhYjYzMzE5ZDM3XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg',
        rank: 3
    },
    {
        title: 'Khakee',
        image: 'https://m.media-amazon.com/images/M/MV5BZjBlMjIxN2ItNTMyNi00NDk5LWFhMzEtNzdiODE0Y2M4MWI2XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
        rank: 4
    },
    {
        title: 'Squid Game',
        image: 'https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
        rank: 5
    },
    {
        title: 'Viduthalai',
        image: 'https://m.media-amazon.com/images/M/MV5BMjI0YzU0YjItNGZlYS00YjRkLTk5NzMtZjNhNDRlZDM5ZjM4XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg',
        rank: 6
    },
    {
        title: 'Emergency',
        image: 'https://m.media-amazon.com/images/M/MV5BMzg0ZDkwZDItMzVkZC00YjI2LTk5OTAtMmE4YTZjNjM0M2RmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
        rank: 7
    }
];

// Populate trending section
function populateTrendingSection() {
    const trendingGrid = document.querySelector('.trending-grid');
    trendingGrid.innerHTML = ''; // Clear existing content

    trendingMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'trending-item';
        movieElement.setAttribute('data-rank', movie.rank);

        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="trending-poster" 
                 onerror="this.src='https://via.placeholder.com/200x300?text=${movie.title}'"/>
            <div class="rank">${movie.rank}</div>
        `;

        trendingGrid.appendChild(movieElement);
    });
}

// Email validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Handle email signup
function handleEmailSignup() {
    const emailInput = document.querySelector('.email-input');
    const getStartedBtn = document.querySelector('.get-started-btn');

    getStartedBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        
        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Here you would typically handle the signup process
        console.log('Sign up initiated with email:', email);
        // Redirect to signup page or show next step
        window.location.href = `/signup?email=${encodeURIComponent(email)}`;
    });

    // Also handle enter key press
    emailInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            getStartedBtn.click();
        }
    });
}

// Smooth scrolling for navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Header background opacity based on scroll
function initHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)';
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateTrendingSection();
    handleEmailSignup();
    initSmoothScroll();
    initHeaderScroll();
});

// Handle language selection
document.querySelector('.language-select').addEventListener('change', (e) => {
    const lang = e.target.value;
    // Here you would typically handle language change
    console.log('Language changed to:', lang);
    // You could reload the page with the new language parameter
    // window.location.href = `/?lang=${lang}`;
});

// Add hover effect for plan cards
document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
}); 