// Mock rock data for Wild Faces
const rocks = [
  {
    id: 1,
    name: "Pebby #001",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=200&fit=crop&crop=center",
    story: "Hey! I'm Pebby. I was born under a gumtree in someone's backyard and love swings and sand. I dream of seeing every playground in the world! Thanks for finding me — can you help me get to my next adventure?",
    personality: "Cheerful and playground-loving",
    lastSeen: "Lily Creek Park - by the big slide",
    lastSeenDate: "3 days ago",
    sightings: [
      { location: "Backyard gumtree", date: "2 weeks ago", finder: "Emma" },
      { location: "School garden", date: "1 week ago", finder: "Class 3B" },
      { location: "Lily Creek Park", date: "3 days ago", finder: "Adventure Sam" }
    ]
  },
  {
    id: 2,
    name: "Blip #007",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=200&fit=crop&crop=center",
    story: "Ribbit! I'm Blip the frog-faced rock. I was painted green with big googly eyes and I absolutely LOVE rainy gardens and puddles. The bigger the splash, the better! I once hid inside a letterbox for 2 whole days!",
    personality: "Frog-faced and water-loving",
    lastSeen: "Behind the local library - in the rain garden",
    lastSeenDate: "1 week ago",
    sightings: [
      { location: "Grandma's pond", date: "3 weeks ago", finder: "Little Maya" },
      { location: "School letterbox", date: "2 weeks ago", finder: "Postie Pete" },
      { location: "Library rain garden", date: "1 week ago", finder: "Book Worm Billy" }
    ]
  },
  {
    id: 3,
    name: "Luna #015",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&crop=center",
    story: "✨ Hello stargazer! I'm Luna, painted on a full moon night. I'm covered in silver glitter and golden stars, and I glow softly in moonlight. I love high places where I can see the sky and dream about space adventures!",
    personality: "Mystical and star-gazing",
    lastSeen: "Trail near Ghost Tree Ridge - on the lookout rock",
    lastSeenDate: "5 days ago",
    sightings: [
      { location: "Rooftop garden", date: "2 weeks ago", finder: "Sky Watcher Sarah" },
      { location: "Hill top picnic spot", date: "1 week ago", finder: "Telescope Tim" },
      { location: "Ghost Tree Ridge", date: "5 days ago", finder: "Hiking Hannah" }
    ]
  },
  {
    id: 4,
    name: "Sunny #003",
    image: "https://images.unsplash.com/photo-1471919743851-c4df8b6ee585?w=200&h=200&fit=crop&crop=center",
    story: "🌻 Hi there! I'm Sunny, bright yellow with a big smile painted on my face. I was created to spread happiness wherever I go! I love warm sunny spots, flower gardens, and making people smile. My mission is to brighten someone's day!",
    personality: "Cheerful sunshine spreader",
    lastSeen: "Community garden - next to the sunflowers",
    lastSeenDate: "2 days ago",
    sightings: [
      { location: "Bus stop bench", date: "1 week ago", finder: "Morning Mike" },
      { location: "Café windowsill", date: "4 days ago", finder: "Coffee Kate" },
      { location: "Community garden", date: "2 days ago", finder: "Green Thumb Grace" }
    ]
  },
  {
    id: 5,
    name: "Patches #012",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=200&fit=crop&crop=center",
    story: "Woof! I'm Patches, painted to look like a friendly puppy with brown and white spots. I love parks, dog walks, and anywhere there are belly rubs to be had! I've been adopted by three different families so far - each one loved me so much they wanted to share me with others!",
    personality: "Loyal and puppy-like",
    lastSeen: "Dog park - under the big oak tree",
    lastSeenDate: "1 day ago",
    sightings: [
      { location: "Pet store window", date: "2 weeks ago", finder: "Dog Lover Dave" },
      { location: "Walking trail", date: "1 week ago", finder: "Jogger Jane" },
      { location: "Dog park", date: "1 day ago", finder: "Puppy Parent Paul" }
    ]
  }
];

// Function to get rock by ID
function getRockById(id) {
  return rocks.find(rock => rock.id === parseInt(id));
}

// Function to get all rocks
function getAllRocks() {
  return rocks;
}