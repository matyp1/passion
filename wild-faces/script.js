// Wild Faces JavaScript - Dynamic Functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize the application based on current page
function initializeApp() {
  const currentPage = getCurrentPage();
  
  switch(currentPage) {
    case 'index':
      initializeHomePage();
      break;
    case 'rock':
      initializeRockPage();
      break;
    case 'submit':
      initializeSubmitPage();
      break;
    case 'about':
      initializeAboutPage();
      break;
    case '404':
      initialize404Page();
      break;
    default:
      console.log('Unknown page');
  }
  
  // Add some delightful interactions
  addDelightfulInteractions();
}

// Get current page name from URL
function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  
  if (filename === '' || filename === 'index.html') return 'index';
  if (filename === 'rock.html') return 'rock';
  if (filename === 'submit.html') return 'submit';
  if (filename === 'about.html') return 'about';
  if (filename === '404.html') return '404';
  
  return 'unknown';
}

// Initialize home page with rock gallery
function initializeHomePage() {
  displayRockGallery();
}

// Display all rocks in gallery format
function displayRockGallery() {
  const galleryContainer = document.getElementById('rock-gallery');
  if (!galleryContainer) return;
  
  const rocks = getAllRocks();
  
  galleryContainer.innerHTML = rocks.map(rock => `
    <a href="rock.html?id=${rock.id}" class="rock-card" data-rock-id="${rock.id}">
      <img src="${rock.image}" alt="${rock.name}" class="rock-image">
      <h3 class="rock-name">${rock.name}</h3>
      <p class="rock-location">📍 ${rock.lastSeen}</p>
      <p class="rock-date">Last seen ${rock.lastSeenDate}</p>
    </a>
  `).join('');
  
  // Add click handlers for smooth transitions
  addRockCardClickHandlers();
}

// Add click handlers to rock cards
function addRockCardClickHandlers() {
  const rockCards = document.querySelectorAll('.rock-card');
  rockCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Add a little bounce animation on click
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
}

// Initialize rock profile page
function initializeRockPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const rockId = urlParams.get('id');
  
  if (rockId) {
    displayRockProfile(rockId);
  } else {
    showError('No rock ID provided');
  }
}

// Display individual rock profile
function displayRockProfile(rockId) {
  const rock = getRockById(rockId);
  
  if (!rock) {
    showError('Rock not found');
    return;
  }
  
  // Update page title
  document.title = `${rock.name} - Wild Faces`;
  
  // Fill in rock profile data
  updateElement('rock-name', rock.name);
  updateElement('rock-personality', rock.personality);
  updateElement('rock-story', rock.story);
  updateElement('rock-last-seen', rock.lastSeen);
  updateElement('rock-last-seen-date', rock.lastSeenDate);
  
  // Update rock image
  const rockImage = document.getElementById('rock-image');
  if (rockImage) {
    rockImage.src = rock.image;
    rockImage.alt = rock.name;
  }
  
  // Display sightings history
  displaySightingsHistory(rock.sightings);
  
  // Update submit button link
  const submitButton = document.querySelector('.btn-primary');
  if (submitButton) {
    submitButton.href = `submit.html?rock=${rock.id}`;
  }
}

// Display sightings history
function displaySightingsHistory(sightings) {
  const sightingsContainer = document.getElementById('sightings-list');
  if (!sightingsContainer || !sightings) return;
  
  sightingsContainer.innerHTML = `
    <h3>🗺️ Journey History</h3>
    ${sightings.map(sighting => `
      <div class="sighting-item">
        <div>
          <strong>${sighting.location}</strong><br>
          <small>Found by ${sighting.finder}</small>
        </div>
        <div class="sighting-date">${sighting.date}</div>
      </div>
    `).join('')}
  `;
}

// Initialize submit page
function initializeSubmitPage() {
  // Pre-populate rock selection if coming from rock page
  const urlParams = new URLSearchParams(window.location.search);
  const preselectedRockId = urlParams.get('rock');
  
  if (preselectedRockId) {
    populateRockSelect(preselectedRockId);
  } else {
    populateRockSelect();
  }
  
  // Add form submit handler
  const submitForm = document.getElementById('submit-form');
  if (submitForm) {
    submitForm.addEventListener('submit', handleFormSubmit);
  }
}

// Populate rock selection dropdown
function populateRockSelect(preselectedId = null) {
  const rockSelect = document.getElementById('rock-select');
  if (!rockSelect) return;
  
  const rocks = getAllRocks();
  
  rockSelect.innerHTML = `
    <option value="">Choose a Wild Face...</option>
    ${rocks.map(rock => `
      <option value="${rock.id}" ${preselectedId == rock.id ? 'selected' : ''}>
        ${rock.name} - ${rock.personality}
      </option>
    `).join('')}
  `;
  
  // If a rock was preselected, show its current location
  if (preselectedId) {
    const selectedRock = getRockById(preselectedId);
    if (selectedRock) {
      const foundLocationInput = document.getElementById('found-location');
      if (foundLocationInput) {
        foundLocationInput.placeholder = `Last seen at: ${selectedRock.lastSeen}`;
      }
    }
  }
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(e.target);
  const submission = {
    rockId: formData.get('rock-id'),
    finderName: formData.get('finder-name'),
    foundLocation: formData.get('found-location'),
    hiddenLocation: formData.get('hidden-location'),
    message: formData.get('message'),
    timestamp: new Date().toISOString()
  };
  
  // Validate required fields
  if (!submission.rockId || !submission.foundLocation || !submission.hiddenLocation) {
    showError('Please fill in all required fields!');
    return;
  }
  
  // Simulate saving the submission (in a real app, this would go to a backend)
  console.log('Submission data:', submission);
  
  // Show success message
  showSuccessMessage();
  
  // Reset form
  e.target.reset();
  populateRockSelect();
}

// Show success message
function showSuccessMessage() {
  const successMessage = document.getElementById('success-message');
  if (successMessage) {
    successMessage.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 5000);
  }
}

// Initialize about page
function initializeAboutPage() {
  // Add any special about page functionality here
  console.log('About page initialized');
}

// Initialize 404 page
function initialize404Page() {
  // Add bouncing animation to lost rock emoji
  const emoji = document.querySelector('.lost-rock-emoji');
  if (emoji) {
    console.log('404 page initialized with bouncing rock');
  }
}

// Add delightful micro-interactions
function addDelightfulInteractions() {
  // Add hover effects to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  // Add click effects to cards
  const cards = document.querySelectorAll('.rock-card, .detail-card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 100);
    });
  });
  
  // Add typing animation to story text (if on rock page)
  const storyElement = document.querySelector('.rock-story');
  if (storyElement && storyElement.textContent.trim()) {
    addTypingAnimation(storyElement);
  }
}

// Add typing animation to text
function addTypingAnimation(element) {
  const text = element.textContent;
  element.textContent = '';
  element.style.borderRight = '2px solid var(--color-leafy-green)';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 20);
    } else {
      // Remove cursor after typing is complete
      setTimeout(() => {
        element.style.borderRight = 'none';
      }, 1000);
    }
  };
  
  // Start typing animation after a short delay
  setTimeout(typeWriter, 500);
}

// Utility function to update element content
function updateElement(id, content) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = content;
  }
}

// Show error message
function showError(message) {
  alert(`Oops! ${message}`);
  console.error(message);
}

// Add some Easter eggs and fun interactions
function addEasterEggs() {
  // Konami code easter egg
  let konamiCode = [];
  const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
  
  document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
      konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
      activatePartyMode();
    }
  });
}

// Activate party mode (easter egg)
function activatePartyMode() {
  document.body.style.animation = 'rainbow 2s infinite';
  
  // Add rainbow animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  // Show party message
  setTimeout(() => {
    alert('🎉 Party mode activated! The rocks are dancing! 🎉');
  }, 500);
  
  // Disable party mode after 10 seconds
  setTimeout(() => {
    document.body.style.animation = '';
    document.head.removeChild(style);
  }, 10000);
}

// Initialize easter eggs
addEasterEggs();

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

// Add loading state for images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.rock-image');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
      this.style.transform = 'scale(1)';
    });
    
    // Set initial state
    img.style.opacity = '0';
    img.style.transform = 'scale(0.8)';
    img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
});