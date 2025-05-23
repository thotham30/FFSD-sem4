const allTours = [
  {
    id: "T67890",
    title: "Golden Triangle Tour: Delhi, Agra & Jaipur",
    tags: ["Cultural", "Heritage", "Guided"],
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Lotus_Temple_in_New_Delhi_03-2016.jpg/1024px-Lotus_Temple_in_New_Delhi_03-2016.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/India_Gate_in_New_Delhi_03-2016_img3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Taj_Mahal_%28Edited%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Hawa_Mahal_2011.jpg",
    ],
    rating: 5,
    duration: "7 days 6 nights",
    startLocation: "Delhi",
    description:
      "Discover India's rich history and architectural wonders with this Golden Triangle Tour covering Delhi, Agra, and Jaipur.",
    language: "Hindi",
    price: {
      currency: "INR",
      amount: 25000,
      discount: 0.15,
    },
    includes: [
      "Accommodation in 4-star hotels",
      "Daily breakfast & dinner",
      "Private vehicle with driver",
      "Guided sightseeing tours",
      "Entry tickets to monuments",
    ],
    destinations: [
      {
        name: "Delhi, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tomb_of_Humayun%2C_Delhi.jpg/1024px-Tomb_of_Humayun%2C_Delhi.jpg",
      },
      {
        name: "Agra, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/1200px-Taj_Mahal%2C_Agra%2C_India.jpg",
      },
      {
        name: "Jaipur, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1024px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
      },
    ],
    itinerary: [
      {
        day: 1,
        location: "Delhi",
        activities: [
          "Arrival and hotel check-in",
          "Visit India Gate & Qutub Minar",
          "Explore Connaught Place",
        ],
      },
      {
        day: 2,
        location: "Delhi",
        activities: [
          "Visit Humayun’s Tomb & Lotus Temple",
          "Shopping at Chandni Chowk",
          "Evening at Akshardham",
        ],
      },
      {
        day: 3,
        location: "Agra",
        activities: [
          "Drive to Agra",
          "Sunrise visit to the Taj Mahal",
          "Explore Agra Fort & Mehtab Bagh",
        ],
      },
      {
        day: 4,
        location: "Agra",
        activities: [
          "Fatehpur Sikri day tour",
          "Visit Itmad-ud-Daulah (Baby Taj)",
          "Leisure time at local markets",
        ],
      },
      {
        day: 5,
        location: "Jaipur",
        activities: [
          "Drive to Jaipur",
          "Visit City Palace & Jantar Mantar",
          "Explore Jaipur’s Pink City",
        ],
      },
      {
        day: 6,
        location: "Jaipur",
        activities: [
          "Morning visit to Amber Fort",
          "Hawa Mahal & Nahargarh Fort",
          "Cultural evening at Chokhi Dhani",
        ],
      },
      {
        day: 7,
        location: "Jaipur",
        activities: [
          "Shopping at Johari Bazaar",
          "Check out & departure",
        ],
      },
    ],
    availableMonths: [
      "September 2025",
      "October 2025",
      "November 2025",
    ],
    bookingDetails: [
      {
        startDate: "10 September 2025",
        startDay: "Wednesday",
        endDate: "16 September 2025",
        endDay: "Tuesday",
        status: "Available",
        discount: 0.15,
      },
    ],
  },
  {
    id: "T54321",
    title: "Kerala Backwaters Retreat: Alleppey & Kumarakom",
    tags: ["Nature", "Relaxation", "Luxury"],
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/432px-Alappuzha_Boat_Beauty_W.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Alleppey_Backwaters.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Kumarakom_Houseboat.jpg",
    ],
    rating: 5,
    duration: "5 days 4 nights",
    startLocation: "Kochi",
    description:
      "Immerse yourself in the tranquil beauty of Kerala's backwaters with a houseboat stay in Alleppey and Kumarakom.",
    language: "Malayalam",
    price: { currency: "INR", amount: 18000, discount: 0.1 },
    includes: [
      "Luxury houseboat stay",
      "Traditional Kerala meals",
      "Guided village walks",
      "Canoe ride through backwaters",
      "Airport transfers",
    ],
    destinations: [
      {
        name: "Alleppey, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%E0%B4%95%E0%B5%86%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B5%81%E0%B4%B5%E0%B4%B3%E0%B5%8D%E0%B4%B3%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE-%E0%B4%95%E0%B5%81%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B4%A8%E0%B4%BE%E0%B4%9F%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86_%E0%B4%AE%E0%B5%81%E0%B4%96%E0%B4%AE%E0%B5%81%E0%B4%A6%E0%B5%8D%E0%B4%B0.jpg/1024px-%E0%B4%95%E0%B5%86%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B5%81%E0%B4%B5%E0%B4%B3%E0%B5%8D%E0%B4%B3%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE-%E0%B4%95%E0%B5%81%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B4%A8%E0%B4%BE%E0%B4%9F%E0%B4%BF%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86_%E0%B4%AE%E0%B5%81%E0%B4%96%E0%B4%AE%E0%B5%81%E0%B4%A6%E0%B5%8D%E0%B4%B0.jpg",
      },
      {
        name: "Kumarakom, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Kumarkom.jpg/375px-Kumarkom.jpg",
      },
    ],
    itinerary: [
      {
        day: 1,
        location: "Alleppey",
        activities: [
          "Arrival and houseboat check-in",
          "Backwater cruise through Vembanad Lake",
          "Sunset dinner on the deck",
        ],
      },
      {
        day: 2,
        location: "Alleppey",
        activities: [
          "Morning canoe ride",
          "Visit local village & coir-making units",
          "Evening relaxation on the houseboat",
        ],
      },
      {
        day: 3,
        location: "Kumarakom",
        activities: [
          "Transfer to Kumarakom",
          "Bird watching at Kumarakom Bird Sanctuary",
          "Leisure time at a lakeside resort",
        ],
      },
      {
        day: 4,
        location: "Kumarakom",
        activities: [
          "Traditional Ayurvedic spa session",
          "Explore Vembanad Kayal",
          "Sunset boat ride",
        ],
      },
      {
        day: 5,
        location: "Kumarakom",
        activities: [
          "Morning yoga & meditation",
          "Check-out & return to Kochi for departure",
        ],
      },
    ],
    availableMonths: [
      "December 2025",
      "January 2026",
      "February 2026",
    ],
    bookingDetails: [
      {
        startDate: "5 December 2025",
        startDay: "Friday",
        endDate: "9 December 2025",
        endDay: "Tuesday",
        status: "Limited Slots",
        discount: 0.1,
      },
    ],
  },
  {
    id: "T12345",
    title: "Majestic Rajasthan: Udaipur, Jodhpur & Jaisalmer",
    tags: ["Cultural", "Heritage", "Desert", "Forts"],
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/1024px-Evening_view%2C_City_Palace%2C_Udaipur.jpg",
    images: [
      "https://www.rajasthantourism.gov.in/content/dam/rajasthan-tourism/images/city/large/udaipur-city-palace.jpg",
      "https://www.rajasthantourism.gov.in/content/dam/rajasthan-tourism/images/city/large/mehrangarh-fort-jodhpur.jpg",
      "https://www.rajasthantourism.gov.in/content/dam/rajasthan-tourism/images/excursion/large/sam-sand-dunes-jaisalmer.jpg",
    ],
    rating: 1,
    duration: "9 days 8 nights",
    startLocation: "Udaipur",
    description:
      "Explore the royal charm of Rajasthan with a journey through Udaipur, Jodhpur, and Jaisalmer. Experience magnificent forts, vibrant markets, and the golden sands of the Thar Desert.",
    language: "Hindi, English",
    price: {
      currency: "INR",
      amount: 45000,
      discount: 0.12,
    },
    includes: [
      "Accommodation in heritage hotels",
      "Daily breakfast",
      "Private air-conditioned vehicle",
      "Guided tours of forts and palaces",
      "Camel safari in Jaisalmer",
      "Cultural performances",
      "Entry fees to monuments",
    ],
    destinations: [
      {
        name: "Udaipur, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/1024px-Evening_view%2C_City_Palace%2C_Udaipur.jpg",
      },
      {
        name: "Jodhpur, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mehrangarh_Fort_sanhita.jpg/1024px-Mehrangarh_Fort_sanhita.jpg",
      },
      {
        name: "Jaisalmer, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Jaisalmer%2C_India%2C_Palace%2C_Haveli.jpg/1024px-Jaisalmer%2C_India%2C_Palace%2C_Haveli.jpg",
      },
    ],
    itinerary: [
      {
        day: 1,
        location: "Udaipur",
        activities: [
          "Arrival in Udaipur and hotel check-in",
          "Boat ride on Lake Pichola",
          "Visit City Palace",
        ],
      },
      {
        day: 2,
        location: "Udaipur",
        activities: [
          "Visit Jagdish Temple",
          "Explore Saheliyon Ki Bari",
          "Evening cultural show at Bagore Ki Haveli",
        ],
      },
      {
        day: 3,
        location: "Udaipur - Jodhpur",
        activities: [
          "Drive to Jodhpur",
          "Check-in to hotel",
          "Visit Mehrangarh Fort",
        ],
      },
      {
        day: 4,
        location: "Jodhpur",
        activities: [
          "Explore Jaswant Thada",
          "Visit Umaid Bhawan Palace Museum",
          "Shopping in Sardar Market",
        ],
      },
      {
        day: 5,
        location: "Jodhpur - Jaisalmer",
        activities: [
          "Drive to Jaisalmer",
          "Check-in to desert camp",
          "Camel safari and sunset at Sam Sand Dunes",
        ],
      },
      {
        day: 6,
        location: "Jaisalmer",
        activities: [
          "Visit Jaisalmer Fort",
          "Explore Patwon Ki Haveli and Salim Singh Ki Haveli",
          "Shopping in local markets",
        ],
      },
      {
        day: 7,
        location: "Jaisalmer",
        activities: [
          "Visit Gadisar Lake",
          "Explore Kuldhara Abandoned Village",
          "Enjoy a cultural evening with folk music and dance",
        ],
      },
      {
        day: 8,
        location: "Jaisalmer - Jodhpur",
        activities: [
          "Drive back to Jodhpur",
          "Hotel check-in and leisure time",
        ],
      },
      {
        day: 9,
        location: "Jodhpur",
        activities: [
          "Breakfast and check-out",
          "Departure from Jodhpur Airport/Railway Station",
        ],
      },
    ],
    availableMonths: [
      "October 2025",
      "November 2025",
      "December 2025",
    ],
    bookingDetails: [
      {
        startDate: "15 November 2025",
        startDay: "Saturday",
        endDate: "23 November 2025",
        endDay: "Sunday",
        status: "Available",
        discount: 0.12,
      },
      {
        startDate: "05 December 2025",
        startDay: "Friday",
        endDate: "13 December 2025",
        endDay: "Saturday",
        status: "Available",
        discount: 0.12,
      },
    ],
  },
  {
    id: "T23456",
    title: "Spiritual Varanasi & Sarnath Tour",
    tags: ["Spiritual", "Religious", "Ganges", "Temples"],
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg/357px-Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Dashashwamedh_Ghat_Varanasi.jpg/1280px-Dashashwamedh_Ghat_Varanasi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sarnath_Dhamek_Stupa.jpg/1280px-Sarnath_Dhamek_Stupa.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ganga_Aarti_Varanasi.jpg/1280px-Ganga_Aarti_Varanasi.jpg",
    ],
    rating: 2,
    duration: "4 days 3 nights",
    startLocation: "Varanasi",
    description:
      "Embark on a spiritual journey to Varanasi, one of the oldest living cities in the world. Witness ancient rituals, explore sacred temples, and experience the divine atmosphere of the Ganges River.",
    language: "Hindi, English",
    price: {
      currency: "INR",
      amount: 15000,
      discount: 0.08,
    },
    includes: [
      "Accommodation in a comfortable hotel",
      "Daily breakfast",
      "Guided tours of Varanasi and Sarnath",
      "Boat ride on the Ganges River",
      "Witnessing Ganga Aarti ceremony",
      "Entry fees to temples and monuments",
    ],
    destinations: [
      {
        name: "Varanasi, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg/357px-Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg",
      },
      {
        name: "Sarnath, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Ancient_Buddhist_monasteries_near_Dhamekh_Stupa_Monument_Site%2C_Sarnath.jpg/375px-Ancient_Buddhist_monasteries_near_Dhamekh_Stupa_Monument_Site%2C_Sarnath.jpg",
      },
    ],
    itinerary: [
      {
        day: 1,
        location: "Varanasi",
        activities: [
          "Arrival in Varanasi and hotel check-in",
          "Evening boat ride on the Ganges River",
          "Witness the mesmerizing Ganga Aarti ceremony",
        ],
      },
      {
        day: 2,
        location: "Varanasi",
        activities: [
          "Early morning boat ride to witness sunrise on the Ganges",
          "Visit Kashi Vishwanath Temple and other prominent temples",
          "Explore the ghats and narrow alleys of the old city",
        ],
      },
      {
        day: 3,
        location: "Sarnath",
        activities: [
          "Day trip to Sarnath, the place where Buddha gave his first sermon",
          "Visit Dhamek Stupa, Sarnath Museum, and other Buddhist sites",
        ],
      },
      {
        day: 4,
        location: "Varanasi",
        activities: [
          "Morning visit to a local market for souvenir shopping",
          "Check-out from hotel and departure",
        ],
      },
    ],
    availableMonths: [
      "September 2025",
      "October 2025",
      "November 2025",
    ],
    bookingDetails: [
      {
        startDate: "20 September 2025",
        startDay: "Saturday",
        endDate: "23 September 2025",
        endDay: "Tuesday",
        status: "Available",
        discount: 0.08,
      },
      {
        startDate: "15 October 2025",
        startDay: "Wednesday",
        endDate: "18 October 2025",
        endDay: "Saturday",
        status: "Available",
        discount: 0.08,
      },
    ],
  },
  {
    id: "T34567",
    title: "Kashmir Paradise: Srinagar, Gulmarg & Pahalgam",
    tags: [
      "Nature",
      "Scenic",
      "Mountains",
      "Lakes",
      "Adventure",
    ],
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Houseboats%2C_Dal_Lake%2C_Kashmir.jpg/395px-Houseboats%2C_Dal_Lake%2C_Kashmir.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gulmarg_Gondola.jpg/1280px-Gulmarg_Gondola.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Pahalgam_Valley.jpg/1280px-Pahalgam_Valley.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Srinagar_Mughal_Gardens.jpg/1280px-Srinagar_Mughal_Gardens.jpg",
    ],
    rating: 5,
    duration: "6 days 5 nights",
    startLocation: "Srinagar",
    description:
      "Discover the breathtaking beauty of Kashmir with a tour of Srinagar, Gulmarg, and Pahalgam. Experience stunning landscapes, serene lakes, snow-capped mountains, and adventure activities.",
    language: "Hindi, English, Kashmiri",
    price: {
      currency: "INR",
      amount: 35000,
      discount: 0.1,
    },
    includes: [
      "Accommodation in deluxe houseboats and hotels",
      "Daily breakfast and dinner",
      "Shikara ride on Dal Lake",
      "Gondola ride in Gulmarg",
      "Horse riding in Pahalgam",
      "Entry fees to gardens and attractions",
    ],
    destinations: [
      {
        name: "Srinagar, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Houseboats%2C_Dal_Lake%2C_Kashmir.jpg/395px-Houseboats%2C_Dal_Lake%2C_Kashmir.jpg",
      },
      {
        name: "Gulmarg, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Gulmarg_-_Jannat_on_Earth.jpg/372px-Gulmarg_-_Jannat_on_Earth.jpg",
      },
      {
        name: "Pahalgam, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pahalgam_views_13.JPG/375px-Pahalgam_views_13.JPG",
      },
    ],
    itinerary: [
      {
        day: 1,
        location: "Srinagar",
        activities: [
          "Arrival in Srinagar and check-in to a houseboat on Dal Lake",
          "Shikara ride on the lake",
          "Visit Mughal Gardens",
        ],
      },
      {
        day: 2,
        location: "Srinagar",
        activities: [
          "Visit Shankaracharya Temple",
          "Explore the local markets",
          "Enjoy a traditional Kashmiri dinner",
        ],
      },
      {
        day: 3,
        location: "Gulmarg",
        activities: [
          "Day trip to Gulmarg",
          "Gondola ride to Kongdoori Mountain",
          "Enjoy snow activities (optional)",
        ],
      },
      {
        day: 4,
        location: "Pahalgam",
        activities: [
          "Drive to Pahalgam",
          "Check-in to hotel",
          "Horse riding to Baisaran Valley",
        ],
      },
      {
        day: 5,
        location: "Pahalgam",
        activities: [
          "Visit Aru Valley and Betaab Valley",
          "Enjoy the scenic beauty and tranquility",
        ],
      },
      {
        day: 6,
        location: "Srinagar",
        activities: [
          "Drive back to Srinagar",
          "Check-out and departure",
        ],
      },
    ],
    availableMonths: ["April 2026", "May 2026", "June 2026"],
    bookingDetails: [
      {
        startDate: "10 April 2026",
        startDay: "Friday",
        endDate: "15 April 2026",
        endDay: "Wednesday",
        status: "Available",
        discount: 0.1,
      },
      {
        startDate: "20 May 2026",
        startDay: "Wednesday",
        endDate: "25 May 2026",
        endDay: "Monday",
        status: "Available",
        discount: 0.1,
      },
    ],
  },
  {
    id: "T45678",
    title: "Goa Beach & Adventure Tour",
    tags: [
      "Beach",
      "Adventure",
      "Water Sports",
      "Nightlife",
      "Relaxation",
    ],
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BeachFun.jpg/432px-BeachFun.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Calangute_Beach_North_Goa.jpg/1280px-Calangute_Beach_North_Goa.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Dudhsagar_Falls_Goa.jpg/1280px-Dudhsagar_Falls_Goa.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Goa_Water_Sports.jpg/1280px-Goa_Water_Sports.jpg",
    ],
    rating: 4,
    duration: "5 days 4 nights",
    startLocation: "Goa Airport",
    description:
      "Experience the vibrant energy of Goa with a mix of beach relaxation and adventure activities. Explore stunning beaches, indulge in water sports, and enjoy the lively nightlife.",
    language: "English, Hindi, Konkani",
    price: {
      currency: "INR",
      amount: 20000,
      discount: 0.15,
    },
    includes: [
      "Accommodation in a beachside hotel",
      "Daily breakfast",
      "Guided tour of Old Goa churches",
      "Water sports activities (parasailing, jet skiing, etc.)",
      "Sunset cruise",
      "Visit to Dudhsagar Falls",
    ],
    destinations: [
      {
        name: "North Goa, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Basilica_of_bom_jesus_-_Front_View.jpg/432px-Basilica_of_bom_jesus_-_Front_View.jpg",
      },
      {
        name: "South Goa, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BeachFun.jpg/432px-BeachFun.jpg",
      },
    ],
    itinerary: [
      {
        day: 1,
        location: "North Goa",
        activities: [
          "Arrival at Goa Airport and hotel check-in",
          "Relax and enjoy the beach",
          "Optional water sports activities",
        ],
      },
      {
        day: 2,
        location: "North Goa",
        activities: [
          "Visit Calangute, Baga, and Anjuna beaches",
          "Explore the vibrant markets and nightlife",
        ],
      },
      {
        day: 3,
        location: "South Goa",
        activities: [
          "Drive to South Goa",
          "Relax on Palolem or Agonda beach",
          "Enjoy a sunset cruise",
        ],
      },
      {
        day: 4,
        location: "Dudhsagar Falls",
        activities: [
          "Day trip to Dudhsagar Falls",
          "Jeep safari and trekking",
        ],
      },
      {
        day: 5,
        location: "Goa",
        activities: [
          "Visit Old Goa churches and historical sites",
          "Check-out and departure",
        ],
      },
    ],
    availableMonths: [
      "October 2025",
      "November 2025",
      "December 2025",
    ],
    bookingDetails: [
      {
        startDate: "25 October 2025",
        startDay: "Saturday",
        endDate: "29 October 2025",
        endDay: "Wednesday",
        status: "Available",
        discount: 0.15,
      },
      {
        startDate: "10 November 2025",
        startDay: "Monday",
        endDate: "14 November 2025",
        endDay: "Friday",
        status: "Available",
        discount: 0.15,
      },
    ],
  },
  {
    id: "T56789",
    title: "Himalayan Escape: Shimla & Manali",
    tags: ["Mountains", "Nature", "Adventure", "Hill Station"],
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Shimla_night.jpg/387px-Shimla_night.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shimla_Ridge.jpg/1280px-Shimla_Ridge.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Solang_Valley_Manali.jpg/1280px-Solang_Valley_Manali.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mall_Road_Shimla.jpg/1280px-Mall_Road_Shimla.jpg",
    ],
    rating: 3,
    duration: "7 days 6 nights",
    startLocation: "Chandigarh",
    description:
      "Experience the breathtaking beauty of the Himalayas with a serene escape to Shimla and Manali. Enjoy scenic views, adventure activities, and the cool mountain air.",
    language: "Hindi, English",
    price: {
      currency: "INR",
      amount: 35000,
      discount: 0.1,
    },
    includes: [
      "Accommodation in comfortable hotels",
      "Daily breakfast and dinner",
      "Private vehicle for transfers and sightseeing",
      "Guided tours of Shimla and Manali",
      "Visit to Solang Valley",
      "Toy train ride (optional, extra cost)",
    ],
    destinations: [
      {
        name: "Shimla, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Shimla_night.jpg/387px-Shimla_night.jpg",
      },
      {
        name: "Manali, India",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Manali_City.jpg/417px-Manali_City.jpg",
      },
    ],
    itinerary: [
      {
        day: 1,
        location: "Chandigarh - Shimla",
        activities: [
          "Arrival in Chandigarh and transfer to Shimla",
          "Check-in to hotel and leisure time",
        ],
      },
      {
        day: 2,
        location: "Shimla",
        activities: [
          "Visit Kufri",
          "Explore the Ridge and Mall Road",
          "Visit Jakhu Temple",
        ],
      },
      {
        day: 3,
        location: "Shimla - Manali",
        activities: [
          "Drive to Manali via Kullu Valley",
          "Check-in to hotel in Manali",
        ],
      },
      {
        day: 4,
        location: "Manali",
        activities: [
          "Visit Hadimba Devi Temple",
          "Explore Old Manali",
          "Visit Vashisht Village",
        ],
      },
      {
        day: 5,
        location: "Manali",
        activities: [
          "Visit Solang Valley (adventure activities)",
          "Explore Rohtang Pass (seasonal, extra cost)",
        ],
      },
      {
        day: 6,
        location: "Manali",
        activities: [
          "Visit Manu Temple",
          "Explore local markets",
          "Leisure time",
        ],
      },
      {
        day: 7,
        location: "Manali - Chandigarh",
        activities: [
          "Check-out and drive back to Chandigarh",
          "Departure from Chandigarh",
        ],
      },
    ],
    availableMonths: ["May 2025", "June 2025", "September 2025"],
    bookingDetails: [
      {
        startDate: "10 May 2025",
        startDay: "Saturday",
        endDate: "16 May 2025",
        endDay: "Friday",
        status: "Available",
        discount: 0.1,
      },
      {
        startDate: "15 June 2025",
        startDay: "Sunday",
        endDate: "21 June 2025",
        endDay: "Saturday",
        status: "Available",
        discount: 0.1,
      },
      {
        startDate: "20 September 2025",
        startDay: "Saturday",
        endDate: "26 September 2025",
        endDay: "Friday",
        status: "Available",
        discount: 0.1,
      },
    ],
  },
];

const tours = [
  {
    title: "Andaman Islands: Port Blair & Havelock",
    rating: 4,
    duration: "6 days 5 nights",
    price: "32,000.00",
    mainImage:
      "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZydGhhaWxhbmRfcGh1a2V0X2tvaF9waGlfOC1pbWFnZS1reWJhaDJpYi5qcGc.jpg",
  },
  {
    title: "Darjeeling & Gangtok: Himalayan Retreat",
    rating: 4,
    duration: "7 days 6 nights",
    price: "25,500.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspADhqmvbB5NqFX55mw05WhwgO1Z2Iso9qg&s",
  },
  {
    title: "Ranthambore & Jaipur: Wildlife & Heritage",
    rating: 5,
    duration: "5 days 4 nights",
    price: "23,000.00",
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Naulakha_gate%2Cranthambor_fort.jpg",
  },
  {
    title: "Rishikesh & Haridwar Yoga & Spiritual Retreat",

    rating: 3,
    duration: "5 days 4 nights",
    price: "18,000.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHAHWCb9Sfaa_jKKJ6h7qSKeD-9obvpvn0Q&s",
  },
  {
    title: "Meghalaya: Cherrapunji & Shillong Adventure",
    rating: 0,
    duration: "6 days 5 nights",
    price: "27,000.00",
    mainImage:
      "https://images.pexels.com/photos/18476582/pexels-photo-18476582/free-photo-of-waterfalls-on-rocks-in-deep-forest.jpeg",
  },
  {
    title: "Madurai, Rameshwaram & Kanyakumari Pilgrimage",

    rating: 2,
    duration: "6 days 5 nights",
    price: "21,500.00",
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/India_-_Madurai_temple_-_0781.jpg",
  },
  {
    title: "Sundarbans Wildlife Safari",
    rating: 5,
    duration: "4 days 3 nights",
    price: "19,000.00",
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Chital_deer%2C_Sundarbans_East_Wildlife_Sanctuary_01.jpg",
  },
  {
    title: "Ooty & Coorg Hill Station Retreat",
    rating: 5,
    duration: "6 days 5 nights",
    price: "24,500.00",
    mainImage:
      "https://live.staticflickr.com/3588/3445424333_f14c80b6da_b.jpg",
  },
  {
    title: "Leh & Ladakh Adventure Tour",
    rating: 5,
    duration: "7 days 6 nights",
    price: "40,000.00",
    mainImage:
      "https://live.staticflickr.com/7289/10991694376_40a1f41791_b.jpg",
  },
  {
    title: "Pondicherry & Mahabalipuram Coastal Tour",
    rating: 5,
    duration: "5 days 4 nights",
    price: "19,500.00",
    mainImage:
      "https://www.worldhistory.org/uploads/images/4127.jpg",
  },
  {
    title: "Lakshadweep Island Getaway",
    duration: "5 days 4 nights",
    rating: 5,
    price: "35,000.00",
    mainImage:
      "https://images.pexels.com/photos/22614625/pexels-photo-22614625/free-photo-of-idyllic-beach-on-bangaram-island-in-india.jpeg",
  },
  {
    title: "Bhubaneswar & Puri: Odisha Heritage",

    rating: 4,
    duration: "5 days 4 nights",
    price: "21,000.00",
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7Q96iTxbBt6p28T9o3Nl5knojVV7_GRBjQ&s",
  },
  {
    title: "Ajanta & Ellora: Maharashtra Heritage Tour",
    rating: 5,
    duration: "4 days 3 nights",
    price: "18,500.00",
    mainImage:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ajanta_Ellora_caves-_Maharashtra%2CIndia.jpg",
  },
];
