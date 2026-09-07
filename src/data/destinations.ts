import { Destination } from '../types';

const image = (name: string) => `images/${name.replace(/\.jpg$/i, '.webp')}`;

export const DESTINATIONS: Destination[] = [
  {
    id: 'udaipur',
    name: 'Udaipur',
    tagline: 'Lakes, palaces, and slow sun-drenched evenings',
    location: 'Rajasthan, India',
    state: 'Rajasthan',
    category: 'Culture',
    image: image('udaipur.jpg'),
    gallery: [
      image('udaipur.jpg'),
      image('udaipur.jpg'),
      image('mount-abu.jpg')
    ],
    duration: '2 Days · 1 Night',
    durationDays: 2,
    budgetApprox: 6500,
    budgetText: '₹6,500 approx',
    budgetBreakdown: {
      stay: 2800,
      food: 1700,
      transport: 1200,
      activities: 800
    },
    shortDescription: 'Marvel at lakeside palace terraces, twilight boat rides on Lake Pichola, and rooftop dining with royal views.',
    detailedDescription: 'Udaipur is built for weekenders seeking romance, heritage, and relaxed lakeside walks. With its car-free ghats, centuries-old Havelis, and sunset boat safaris, 48 hours is the golden window to recharge.',
    whyVisit: 'Ideal for travelers craving regal architecture, golden hour ghat walks, and rooftop dining without the chaos of a megacity.',
    rating: 4.9,
    reviewsCount: 384,
    distanceInfo: '4.5 hrs drive from Ahmedabad / 1 hr direct flight',
    bestSeason: 'October to March',
    highlights: ['Lake Pichola Sunset Cruise', 'City Palace Heritage Tour', 'Ambrai Ghat Evening Vibes', 'Bagore Ki Haveli Folk Show'],
    bestFor: 'Couples, Heritage Enthusiasts, Architecture Lovers',
    isFeatured: true,
    curatedItinerary: [
      {
        dayNumber: 1,
        title: 'Lakeside Charms & Heritage Footsteps',
        slots: [
          { time: '09:00 AM', activity: 'Arrive & check into a heritage haveli near Lal Ghat', tip: 'Leave bags early and grab poha and masala chai' },
          { time: '11:00 AM', activity: 'Explore the grand corridors of Udaipur City Palace', tip: 'Pre-book online tickets to skip queue' },
          { time: '02:30 PM', activity: 'Traditional Rajasthani thali lunch at Natraj / Traditional haveli bistro' },
          { time: '05:00 PM', activity: 'Lake Pichola sunset boat ride past Jag Mandir', tip: 'Catch the reflection of palace domes in golden water' },
          { time: '07:30 PM', activity: 'Watch the Dharohar Folk Dance at Bagore Ki Haveli followed by dinner overlooking the illuminated lake' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Fortress Vistas & Artisan Bazaars',
        slots: [
          { time: '07:30 AM', activity: 'Peaceful morning walk along Fateh Sagar Lake and coffee at roadside kiosks' },
          { time: '10:00 AM', activity: 'Visit Saheliyon Ki Bari and Monsoon Palace (Sajjangarh) for panoramic mountain views' },
          { time: '01:30 PM', activity: 'Browse Hathi Pol bazaar for leather journals, miniature paintings, and bandhani textiles' },
          { time: '04:30 PM', activity: 'Chai at Ambrai Ghat before heading to the station/airport for your evening return' }
        ]
      }
    ],
    packingTips: ['Breathable cotton wear', 'Comfortable walking loafers/sneakers for cobblestone streets', 'Light shawl for breezy lakeside evenings', 'Sunglasses and UV protection']
  },
  {
    id: 'mount-abu',
    name: 'Mount Abu',
    tagline: 'Misty Aravalli hills, tranquil Nakki Lake, and cool breezes',
    location: 'Sirohi, Rajasthan',
    state: 'Rajasthan',
    category: 'Mountains',
    image: image('mount-abu.jpg'),
    gallery: [
      image('mount-abu.jpg'),
      image('udaipur.jpg'),
      image('manali.jpg')
    ],
    duration: '2 Days · 1 Night',
    durationDays: 2,
    budgetApprox: 4800,
    budgetText: '₹4,800 approx',
    budgetBreakdown: {
      stay: 2000,
      food: 1400,
      transport: 900,
      activities: 500
    },
    shortDescription: 'The only hill station in the Aravallis, offering cool mountain breezes, peaceful boating on Nakki Lake, and ancient marble temples.',
    detailedDescription: 'Tucked away at 1,220 meters elevation, Mount Abu provides a welcome chill away from the bustling plains. It is tailor-made for an effortless 48-hour road trip with family or friends.',
    whyVisit: 'Crisp mountain air, easy driving distance from Western India, and dramatic sunset rocks without demanding intense trekking.',
    rating: 4.7,
    reviewsCount: 295,
    distanceInfo: '4 hrs drive from Ahmedabad / 3 hrs from Udaipur',
    bestSeason: 'Year-round, best from July to February',
    highlights: ['Nakki Lake Pedal Boating', 'Guru Shikhar highest peak view', 'Intricate Dilwara Marble Temples', 'Sunset Point panoramic rocks'],
    bestFor: 'Nature Escapes, Families, Quick Road Trips',
    curatedItinerary: [
      {
        dayNumber: 1,
        title: 'Lake Promenade & Golden Hour Vistas',
        slots: [
          { time: '08:30 AM', activity: 'Scenic hill drive up the winding Aravalli pass' },
          { time: '11:00 AM', activity: 'Check-in and walk around Nakki Lake with ice-cream or fresh roasted corn' },
          { time: '01:00 PM', activity: 'Lunch at Arbuda or Chacha Café with scenic hill views' },
          { time: '03:30 PM', activity: 'Marvel at the breathtaking marble stone carvings of Dilwara Temples' },
          { time: '05:30 PM', activity: 'Hike or pony ride to Sunset Point to watch the sun drop behind jagged Aravalli ridges' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Peak Highs & Forest Serenity',
        slots: [
          { time: '06:30 AM', activity: 'Early morning drive to Guru Shikhar (highest peak in Rajasthan) for fresh crisp air' },
          { time: '10:00 AM', activity: 'Breakfast and stroll around Peace Park botanical grounds' },
          { time: '12:30 PM', activity: 'Visit Toad Rock viewpoint and pick up local handmade fudge and spices' },
          { time: '03:00 PM', activity: 'Begin descent for an easy return drive home' }
        ]
      }
    ],
    packingTips: ['Light fleece jacket or windbreaker', 'Comfortable trail footwear', 'Binoculars for viewpoints', 'Camera for lake reflections']
  },
  {
    id: 'goa',
    name: 'South Goa',
    tagline: 'Quiet palm fringes, hidden coves, and slow susegad rhythm',
    location: 'Goa, India',
    state: 'Goa',
    category: 'Beach',
    image: image('goa.jpg'),
    gallery: [
      image('goa.jpg'),
      image('goa.jpg'),
      image('saputara.jpg')
    ],
    duration: '3 Days · 2 Nights',
    durationDays: 3,
    budgetApprox: 8900,
    budgetText: '₹8,900 approx',
    budgetBreakdown: {
      stay: 4000,
      food: 2600,
      transport: 1300,
      activities: 1000
    },
    shortDescription: 'Skip the party crowds and unwind in South Goa: uncrowded white sand beaches, pastel Portuguese mansions, and oceanfront shacks.',
    detailedDescription: 'South Goa is all about barefoot luxury, swaying coconut palms, listening to crashing waves, and sipping fresh coconut water. Perfect for a Friday evening to Sunday flight getaway.',
    whyVisit: 'Clean unhurried beaches, heritage Latin quarters in Fontainhas, and fresh coastal seafood with zero rush.',
    rating: 4.9,
    reviewsCount: 520,
    distanceInfo: '1 hr direct flight from Mumbai/Bangalore/Delhi',
    bestSeason: 'October to May',
    highlights: ['Palolem & Agonda beach strolls', 'Kayaking in Cola Beach freshwater lagoon', 'Fontainhas heritage walk', 'Fresh prawn balchão at coastal shacks'],
    bestFor: 'Relaxation, Beach Lovers, Foodies, Slow Travel',
    curatedItinerary: [
      {
        dayNumber: 1,
        title: 'Coastal Unwinding & Seafood Shacks',
        slots: [
          { time: '11:00 AM', activity: 'Land in Goa, scooter rental, and check into beachside wooden cottage at Agonda' },
          { time: '01:30 PM', activity: 'Lazy lunch with Goan fish curry rice overlooking the turquoise waves' },
          { time: '04:30 PM', activity: 'Swim and sunbathe along the crescent bay of Palolem Beach' },
          { time: '07:30 PM', activity: 'Acoustic live music by the bonfire and stargazing on the sand' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Lagoon Kayak & Secret Coves',
        slots: [
          { time: '07:00 AM', activity: 'Morning beachfront yoga and swim' },
          { time: '10:00 AM', activity: 'Scenic coastal ride to Cola Beach; kayak through emerald freshwater lagoon' },
          { time: '02:00 PM', activity: 'Boutique café hop in cute village lanes of South Goa' },
          { time: '05:30 PM', activity: 'Sunset dolphin spotting boat excursion from Cabo de Rama fort' },
          { time: '08:30 PM', activity: 'Candlelit dinner with grilled catch of the day' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Heritage Walk & Departure',
        slots: [
          { time: '08:30 AM', activity: 'Morning walk through colourful streets of Fontainhas heritage quarter' },
          { time: '11:30 AM', activity: 'Visit bakery for warm Bebinca and Poee bread' },
          { time: '02:00 PM', activity: 'Airport transfer for evening flight home' }
        ]
      }
    ],
    packingTips: ['Swimwear & quick-dry microfiber towel', 'Reef-safe sunscreen & flip flops', 'Linen shirts & summer shorts', 'Waterproof phone pouch']
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Sacred Ganga temples, river rapids, and peaceful evening Aarti',
    location: 'Uttarakhand, India',
    state: 'Uttarakhand',
    category: 'Adventure',
    image: image('rishikesh.jpg'),
    gallery: [
      image('rishikesh.jpg'),
      image('manali.jpg'),
      image('mount-abu.jpg')
    ],
    duration: '2 Days · 1 Night',
    durationDays: 2,
    budgetApprox: 5400,
    budgetText: '₹5,400 approx',
    budgetBreakdown: {
      stay: 1800,
      food: 1400,
      transport: 1000,
      activities: 1200
    },
    shortDescription: 'White water rafting down the Ganga, ancient riverside temples, sunrise yoga, and soul-stirring evening Ganga Aarti.',
    detailedDescription: 'The Yoga Capital of the World offers an electrifying blend of spiritual peace and adrenaline rushes. Visit the 13-story Trayambakeshwar Temple, tackle Grade III rapids by day, and listen to holy chants at Parmarth Niketan.',
    whyVisit: 'Ancient riverbank temples, Ganga Aarti at dusk, thrilling white water rafting, and scenic mountain cafes.',
    rating: 4.8,
    reviewsCount: 410,
    distanceInfo: '4.5 hrs via expressway from Delhi / 30 mins from Dehradun Airport',
    bestSeason: 'September to June (rafting closes in peak monsoon)',
    highlights: ['Trayambakeshwar Temple & Ram Jhula', '16km White Water Rafting', 'Parmarth Niketan Evening Ganga Aarti', 'Beatles Ashram murals'],
    bestFor: 'Adventure Seekers, Spiritual Explorers, Friends Groups, Wellness',
    curatedItinerary: [
      {
        dayNumber: 1,
        title: 'River Rapids & Sacred Temple Chants',
        slots: [
          { time: '08:00 AM', activity: 'Reach Rishikesh; check in to riverside stay overlooking the foothills' },
          { time: '10:30 AM', activity: 'Gear up for 16 km rafting from Shivpuri with cliff jump' },
          { time: '02:00 PM', activity: 'Organic sourdough lunch at Beatles Café / Little Buddha Café' },
          { time: '04:30 PM', activity: 'Visit the multi-tiered Trayambakeshwar Temple and cross Ram Jhula' },
          { time: '06:00 PM', activity: 'Witness divine oil lamps and bells at Parmarth Niketan Ganga Aarti' },
          { time: '08:30 PM', activity: 'Riverside dinner under the starlit Himalayan sky' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Dawn Yoga & Historic Ashram',
        slots: [
          { time: '06:30 AM', activity: 'Sunrise meditation session listening to the sound of flowing holy water' },
          { time: '09:00 AM', activity: 'Pancake and fresh fruit bowl breakfast in Tapovan' },
          { time: '11:00 AM', activity: 'Explore the historic 1968 Beatles Ashram (Chaurasi Kutia) & meditation domes' },
          { time: '02:00 PM', activity: 'Pick up Ayurvedic herbal teas and souvenirs before evening departure' }
        ]
      }
    ],
    packingTips: ['Quick-dry synthetic clothing for river activities', 'Modest clothing for temple visits', 'Secure strap sandals or aqua shoes', 'Reusable water bottle']
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    tagline: 'Pink City sandstone facades, Hawa Mahal, and royal Amber Fort',
    location: 'Rajasthan, India',
    state: 'Rajasthan',
    category: 'Culture',
    image: image('jaipur.jpg'),
    gallery: [
      image('jaipur.jpg'),
      image('udaipur.jpg'),
      image('pushkar.jpg')
    ],
    duration: '2 Days · 1 Night',
    durationDays: 2,
    budgetApprox: 4500,
    budgetText: '₹4,500 approx',
    budgetBreakdown: {
      stay: 1800,
      food: 1300,
      transport: 800,
      activities: 600
    },
    shortDescription: 'Step into the legendary Pink City for a weekend admiring Hawa Mahal’s honeycomb facade, Amber Fort ramparts, and Johari Bazaar.',
    detailedDescription: 'Just a quick high-speed train or expressway drive away, Jaipur serves high royal drama in compact 48-hour chunks. Incredible street food, regal courtyards, and handcrafted treasures await.',
    whyVisit: 'Iconic Pink City architecture, Hawa Mahal rooftop views, mouth-watering pyaz kachoris, and rich royal heritage.',
    rating: 4.8,
    reviewsCount: 462,
    distanceInfo: '4 hrs via Delhi-Mumbai Expressway / 1 hr flight',
    bestSeason: 'October to March',
    highlights: ['Hawa Mahal Palace of Winds', 'Amber Fort Sheesh Mahal mirror work', 'Nahargarh Fort sunset view', 'Johari Bazaar shopping for silver & bandhani'],
    bestFor: 'History Buffs, Shoppers, Street Food Lovers, Families',
    curatedItinerary: [
      {
        dayNumber: 1,
        title: 'The Heart of the Pink City & Hawa Mahal',
        slots: [
          { time: '08:30 AM', activity: 'Arrive and energize with creamy lassi at Lassiwala on MI Road' },
          { time: '10:00 AM', activity: 'Marvel at Hawa Mahal with a cup of spiced masala tea at a rooftop café opposite' },
          { time: '11:30 AM', activity: 'Tour City Palace museums and the astronomical sundials of Jantar Mantar' },
          { time: '02:00 PM', activity: 'Hearty Dal Baati Churma feast at 1135 AD or Laxmi Mishthan Bhandar' },
          { time: '05:00 PM', activity: 'Climb Nahargarh Fort ramparts for a legendary sunset overlooking the pink metropolis' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Amber Fort Citadel & Crafts',
        slots: [
          { time: '08:00 AM', activity: 'Early entry to Amber Fort to avoid lines; admire the mirror work in Sheesh Mahal' },
          { time: '11:30 AM', activity: 'Stop by Jal Mahal floating palace on the lake' },
          { time: '01:00 PM', activity: 'Explore Anokhi Museum of hand block printing' },
          { time: '03:30 PM', activity: 'Shop for block-printed quilts, blue pottery, and silver jewelry in Bapu Bazaar' }
        ]
      }
    ],
    packingTips: ['Comfortable sneakers for fort climbs', 'Modest clothing for palace visits', 'Extra tote bag for bazaar finds', 'Sun hat and sunglasses']
  },
  {
    id: 'saputara',
    name: 'Saputara',
    tagline: 'Lush Sahyadri hills, Gira waterfalls, and tranquil green plateau',
    location: 'Dang district, Gujarat',
    state: 'Gujarat',
    category: 'Nature',
    image: image('saputara.jpg'),
    gallery: [
      image('saputara.jpg'),
      image('mount-abu.jpg'),
      image('manali.jpg')
    ],
    duration: '2 Days · 1 Night',
    durationDays: 2,
    budgetApprox: 3900,
    budgetText: '₹3,900 approx',
    budgetBreakdown: {
      stay: 1600,
      food: 1100,
      transport: 800,
      activities: 400
    },
    shortDescription: 'Gujarat’s beloved eco-hill station in Dang: cascading Gira waterfalls, pedal boating on Saputara Lake, and cable car views.',
    detailedDescription: 'Saputara sits peacefully on a plateau in the lush Sahyadri range of Dang. It is remarkably serene, offering clean unpolluted mountain air, dense teak forests, and authentic tribal handicrafts for an easy pocket-friendly weekend.',
    whyVisit: 'Super budget-friendly, roaring Gira waterfalls, soothing green Sahyadri landscapes, and refreshing mountain calm.',
    rating: 4.6,
    reviewsCount: 218,
    distanceInfo: '3.5 hrs drive from Surat / 4.5 hrs from Mumbai',
    bestSeason: 'July to March (monsoons are magical)',
    highlights: ['Gira Waterfalls cascade', 'Saputara Lake boating', 'Governor’s Hill ropeway cable car', 'Artist Village Warli painting workshops'],
    bestFor: 'Budget Travelers, Eco Tourists, Families, Road Trips',
    curatedItinerary: [
      {
        dayNumber: 1,
        title: 'Plateau Horizons & Lake Rowboats',
        slots: [
          { time: '09:00 AM', activity: 'Scenic drive through the winding forest and valleys of Dang' },
          { time: '11:30 AM', activity: 'Check into hotel and enjoy fresh Gujarati lunch' },
          { time: '02:00 PM', activity: 'Visit the Artist Village to see live Warli art and pottery making' },
          { time: '04:30 PM', activity: 'Board the aerial ropeway cable car across the valley to Sunset Point' },
          { time: '06:30 PM', activity: 'Pedal boat around Saputara Lake followed by warm street corn' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Waterfall Spray & Forest Walks',
        slots: [
          { time: '07:30 AM', activity: 'Morning walk in the Rose Garden and Step Garden' },
          { time: '10:00 AM', activity: 'Drive to the majestic Gira Waterfalls on the Ambika River' },
          { time: '01:00 PM', activity: 'Local organic bamboo and grain snacks for lunch' },
          { time: '03:30 PM', activity: 'Depart through the scenic green valleys towards home' }
        ]
      }
    ],
    packingTips: ['Waterproof jacket during monsoons', 'Sturdy walking shoes with grip for wet rocks', 'Binoculars for bird watching', 'Light jacket for cooler nights']
  },
  {
    id: 'pushkar',
    name: 'Pushkar',
    tagline: 'Sacred lake ghats, ancient Brahma temple, and golden desert dunes',
    location: 'Ajmer district, Rajasthan',
    state: 'Rajasthan',
    category: 'Relax',
    image: image('pushkar.jpg'),
    gallery: [
      image('pushkar.jpg'),
      image('jaipur.jpg'),
      image('udaipur.jpg')
    ],
    duration: '2 Days · 1 Night',
    durationDays: 2,
    budgetApprox: 4200,
    budgetText: '₹4,200 approx',
    budgetBreakdown: {
      stay: 1700,
      food: 1200,
      transport: 700,
      activities: 600
    },
    shortDescription: 'A sacred spiritual town nestled around holy Pushkar Lake with 52 ghats, the ancient Brahma Temple, camel safaris, and rooftop cafes.',
    detailedDescription: 'Few places boast the peaceful magic of Pushkar. Surrounded by sand dunes and ancient hills, this historic enclave is perfect for taking holy dips at Varaha Ghat, visiting the rare Brahma Temple, and enjoying sunset sitar music.',
    whyVisit: 'Spiritual tranquility, holy lake ghats with temple chimes, world-famous Brahma Temple, and fiery Thar desert sunsets.',
    rating: 4.8,
    reviewsCount: 312,
    distanceInfo: '2.5 hrs from Jaipur / 30 mins from Ajmer train junction',
    bestSeason: 'October to March',
    highlights: ['Pushkar Lake 52 Sacred Ghats', 'Jagatpita Brahma Temple darshan', 'Sunset camel safari in sand dunes', 'Varaha Ghat evening Maha Aarti'],
    bestFor: 'Relaxation, Spiritual Seekers, Solo Travelers, Photographers',
    curatedItinerary: [
      {
        dayNumber: 1,
        title: 'Sacred Lake Ghats & Sunset Dunes',
        slots: [
          { time: '10:00 AM', activity: 'Arrive in Pushkar, check into boutique haveli near the lake' },
          { time: '11:30 AM', activity: 'Walk the sacred ghats and visit the historic Jagatpita Brahma Temple' },
          { time: '01:30 PM', activity: 'Authentic falafel or wood-fired pizza lunch at rooftop café' },
          { time: '04:30 PM', activity: 'Camel safari out to the desert dunes to watch the red sun sink' },
          { time: '07:30 PM', activity: 'Varaha Ghat evening Maha Aarti followed by acoustic sitar music' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Savitri Temple Hill & Bazaar Finds',
        slots: [
          { time: '06:00 AM', activity: 'Sunrise hike or ropeway ride up Ratnagiri Hill to Savitri Devi Temple' },
          { time: '09:30 AM', activity: 'Healthy breakfast and fresh lassi overlooking the lake' },
          { time: '11:00 AM', activity: 'Browse the vibrant bazaar for rose water, handmade leather diaries, and silver trinkets' },
          { time: '02:00 PM', activity: 'Savor warm Rabdi Malpua at Halwai Gali before starting your journey back' }
        ]
      }
    ],
    packingTips: ['Comfortable slip-on shoes (taken off at all 52 ghats and temples)', 'Modest breathable clothing', 'Sun hat and sunglasses', 'Camera for ghat reflections']
  },
  {
    id: 'manali',
    name: 'Old Manali',
    tagline: 'Towering deodars, Hadimba temple, wooden cabins, and mountain cafes',
    location: 'Kullu Valley, Himachal Pradesh',
    state: 'Himachal Pradesh',
    category: 'Mountains',
    image: image('manali.jpg'),
    gallery: [
      image('manali.jpg'),
      image('mount-abu.jpg'),
      image('rishikesh.jpg')
    ],
    duration: '3 Days · 2 Nights',
    durationDays: 3,
    budgetApprox: 7800,
    budgetText: '₹7,800 approx',
    budgetBreakdown: {
      stay: 3200,
      food: 2200,
      transport: 1400,
      activities: 1000
    },
    shortDescription: 'Escape into wooden mountain cabins, ancient Hadimba pagoda temple, towering cedar woods, and live music cafes in Old Manali.',
    detailedDescription: 'Cross the bridge into Old Manali and leave modern traffic behind. Historic wooden houses with slate roofs, stone pathways, centuries-old Hadimba Temple amidst giant Deodars, and live indie music make this the ultimate mountain recharge.',
    whyVisit: 'Historic Hadimba wooden temple, snow-dusted Himalayan ridges, riverside trout, and crisp cedar-scented pine trails.',
    rating: 4.8,
    reviewsCount: 470,
    distanceInfo: 'Overnight Volvo from Delhi / 1.5 hrs from Kullu Airport',
    bestSeason: 'March to June (Summer) / Nov to Feb (Snow)',
    highlights: ['Hadimba Pagoda Temple cedar sanctuary', 'Jogini Waterfall pine forest hike', 'Riverside dining at Cafe 1947', 'Atal Tunnel drive to Sissu'],
    bestFor: 'Mountain Lovers, Backpackers, Couples, Scenic Hikes',
    curatedItinerary: [
      {
        dayNumber: 1,
        title: 'Cedar Shadows & Historic Hadimba Sanctuary',
        slots: [
          { time: '09:30 AM', activity: 'Arrive via morning Volvo, cross over to Old Manali wooden cottage' },
          { time: '11:00 AM', activity: 'Stroll through the towering Deodar cedar forest and visit Hadimba Temple' },
          { time: '02:00 PM', activity: 'Wood-fired pizza beside the gushing river at Café 1947' },
          { time: '04:30 PM', activity: 'Shop for Tibetan singing bowls and warm handknit woolen socks' },
          { time: '07:30 PM', activity: 'Hot chocolate by the fireplace with acoustic indie melodies' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Cascade Hikes & Apple Groves',
        slots: [
          { time: '08:00 AM', activity: 'Wholesome breakfast with wild apple preserve' },
          { time: '10:00 AM', activity: 'Hike through Vashisht village up to the roaring cascades of Jogini Waterfall' },
          { time: '02:00 PM', activity: 'Dip into the natural hot sulfur springs in Vashisht' },
          { time: '05:00 PM', activity: 'Sunset coffee overlooking snow peaks at Dylan’s Toasted & Roasted' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Solang Vistas & Homeward Bound',
        slots: [
          { time: '09:00 AM', activity: 'Scenic drive to Solang Valley or through Atal Tunnel to high Himalayan valleys' },
          { time: '01:00 PM', activity: 'Traditional Siddu delicacy lunch before evening bus departure' }
        ]
      }
    ],
    packingTips: ['Layered fleece and windproof jacket', 'Woolen beanie and gloves', 'High-grip hiking boots', 'Thermal flask for hot tea']
  }
];

export const VIBE_CATEGORIES: Array<{ id: Destination['category'] | 'All'; label: string; icon: string; description: string; count: number }> = [
  { id: 'All', label: 'All Escapes', icon: 'Compass', description: 'Explore all curated weekend getaways', count: 8 },
  { id: 'Mountains', label: 'Mountains', icon: 'Mountain', description: 'Fresh alpine air, mist, and quiet trails', count: 2 },
  { id: 'Beach', label: 'Beach', icon: 'Palmtree', description: 'Ocean shacks, golden sands, and sunsets', count: 1 },
  { id: 'Culture', label: 'Culture', icon: 'Landmark', description: 'Ancient palaces, heritage walks, and bazaars', count: 2 },
  { id: 'Adventure', label: 'Adventure', icon: 'Flame', description: 'River rapids, temples, and thrill', count: 1 },
  { id: 'Nature', label: 'Nature', icon: 'Trees', description: 'Cascades, evergreen plateaus, and forests', count: 1 },
  { id: 'Relax', label: 'Relax', icon: 'Sparkles', description: 'Holy ghats, yoga, slow music, and peace', count: 1 }
];
