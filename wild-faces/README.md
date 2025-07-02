# 🌍 Wild Faces - The Traveling Rock Project

A whimsical, multi-page web app that brings painted rocks to life through community storytelling and digital adventures. Wild Faces connects artists, adventurers, and curious explorers through handmade rocks that travel the world with unique personalities and growing stories.

## ✨ Features

### 🏠 **Home Page (`index.html`)**
- Dynamic rock gallery showcasing traveling characters
- Interactive rock cards with hover animations
- Community statistics and call-to-action sections
- Responsive design optimized for mobile and desktop

### 🪨 **Rock Profile Pages (`rock.html`)**
- Individual character profiles with personalities and stories
- Journey history tracking where each rock has been
- Dynamic content loading via URL parameters (`rock.html?id=1`)
- Interactive elements encouraging user participation

### 📝 **Submission Form (`submit.html`)**
- User-friendly form for reporting rock sightings
- Smart rock selection with pre-population features
- Form validation and success messaging
- Community guidelines and tips

### ℹ️ **About Page (`about.html`)**
- Project mission and community impact stories
- Step-by-step guide for creating Wild Faces
- Real community testimonials and fun statistics
- Comprehensive contact information

### 🎯 **404 Page (`404.html`)**
- Whimsical error handling with bouncing rock animation
- Helpful navigation suggestions
- Character quotes from the rock personalities
- Easter egg hints for added fun

## 🎨 Design System

### **Color Palette**
- **Sky Blue**: `#a8dadc` - Calming background gradients
- **Leafy Green**: `#99d98c` - Primary action buttons and accents
- **Sunflower Yellow**: `#ffd23f` - Attention-grabbing elements
- **Warm Clay**: `#e07a5f` - Headings and emphasis
- **Stone Gray**: `#9d9d9d` - Subtle text and borders

### **Typography**
- **Headings**: Fredoka (playful and rounded)
- **Body Text**: Baloo 2 (friendly and readable)
- Optimized for accessibility and mobile readability

### **Interactive Elements**
- Smooth hover animations and micro-interactions
- CSS-only animations for performance
- Touch-friendly button sizes (44px minimum)
- Visual feedback for all interactive elements

## 🛠️ Technical Architecture

### **Tech Stack**
- **Frontend**: Pure HTML5, CSS3, and Vanilla JavaScript
- **No Frameworks**: Lightweight and fast-loading
- **Responsive**: Mobile-first design approach
- **Accessibility**: Screen reader friendly with proper ARIA labels

### **File Structure**
```
wild-faces/
├── index.html          # Home page with rock gallery
├── rock.html           # Dynamic rock profile page
├── submit.html         # Submission form
├── about.html          # Project information
├── 404.html           # Error page
├── style.css          # Complete design system
├── script.js          # Application logic
├── data.js            # Mock rock data
└── README.md          # This file
```

### **JavaScript Features**
- **Dynamic Content Loading**: URL parameter-based rock profiles
- **Form Handling**: Client-side validation and success messaging
- **Animations**: Typing effects, image loading states, and hover interactions
- **Easter Eggs**: Konami code party mode for delightful surprises
- **Modular Architecture**: Clean separation of concerns

## 🚀 Getting Started

### **Quick Start**
1. **Download/Clone** the `wild-faces` folder
2. **Open** `index.html` in any modern web browser
3. **Explore** the rock gallery and click any rock to see their profile
4. **Test** the form submission and navigation

### **Local Development**
```bash
# Navigate to the project directory
cd wild-faces

# Open with a local server (recommended)
python -m http.server 8000
# OR
npx serve .

# Open in browser
open http://localhost:8000
```

### **Testing Navigation**
- **Home**: `index.html` - Rock gallery and overview
- **Rock Profile**: `rock.html?id=1` - Pebby's profile
- **Submit Form**: `submit.html` - Report a rock sighting
- **About**: `about.html` - Project information
- **404**: `404.html` - Error page with animations

## 🎮 Interactive Features

### **URL Parameters**
- `rock.html?id=1` - View Pebby #001's profile
- `rock.html?id=2` - View Blip #007's profile  
- `rock.html?id=3` - View Luna #015's profile
- `submit.html?rock=1` - Pre-select Pebby in submission form

### **Easter Eggs**
- **Konami Code**: `↑↑↓↓←→←→BA` on any page for party mode
- **Image Loading**: Smooth fade-in animations for all rock images
- **Typing Effect**: Animated story text on rock profile pages

### **Responsive Breakpoints**
- **Mobile**: < 480px (single column, larger touch targets)
- **Tablet**: 481px - 768px (adjusted spacing and layout)
- **Desktop**: > 768px (full multi-column layout)

## 📊 Rock Characters

The app includes 5 unique rock personalities with full backstories:

1. **Pebby #001** - Playground-loving adventurer
2. **Blip #007** - Frog-faced water enthusiast  
3. **Luna #015** - Mystical stargazing dreamer
4. **Sunny #003** - Cheerful happiness spreader
5. **Patches #012** - Loyal puppy-like companion

Each rock has:
- Unique personality and story
- Journey history with multiple sightings
- Realistic finder names and locations
- Consistent character voice and traits

## 🔮 Future Enhancements

### **Stage 2 Features** (Ready for Implementation)
- **Backend Integration**: Firebase/Airtable for real data storage
- **Image Uploads**: Real photo submission and display
- **User Accounts**: Track individual contributions
- **QR Code Generation**: Auto-create codes for physical rocks
- **Geolocation Map**: Interactive map showing rock locations
- **Push Notifications**: Alert users when their rocks are found

### **Advanced Features**
- **Social Sharing**: Built-in social media integration
- **Rock Analytics**: Distance traveled, finder statistics
- **Community Features**: Comments, ratings, and rock adoption
- **Mobile App**: Native iOS/Android companion app

## 🎯 Design Philosophy

### **Core Principles**
- **Whimsical**: Every interaction should spark joy and wonder
- **Inclusive**: Accessible to all ages and abilities
- **Community-Focused**: Encouraging connection and sharing
- **Performant**: Fast loading and smooth interactions
- **Scalable**: Built to grow with the community

### **User Experience Goals**
- **Discovery**: Easy to explore and find new rocks
- **Participation**: Simple to submit updates and contribute
- **Connection**: Feel part of a larger adventure community
- **Delight**: Unexpected moments of joy and surprise

## 🤝 Contributing

This is a community project! Ways to contribute:
- **Create Rock Characters**: Add new personalities and stories
- **Improve Accessibility**: Test with screen readers and assistive tech
- **Enhance Animations**: Add delightful micro-interactions
- **Expand Content**: Write more community stories and tips
- **Test Mobile**: Ensure great experience across all devices

## 📞 Contact & Support

- **Email**: hello@wildfaces.com
- **Issues**: Report bugs or suggest features
- **Community**: Join our social media groups
- **Schools**: Free classroom kits and presentations available

---

**Made with 💚 for rock adventurers everywhere**  
*© 2024 Wild Faces Project - Spreading joy one rock at a time*

> **"Every rock has a story. Every finder adds a chapter. Every journey connects us all."** 🌟