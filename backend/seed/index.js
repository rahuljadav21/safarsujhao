const mongoose = require('mongoose');
const Destination = require('../models/destination');

mongoose
    .connect("mongodb+srv://admin:xUD9T7gFzvxm4Ng5@auth.u0dbevl.mongodb.net/auth?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((err) => {
        console.log(err.message);
    });


const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const places = [
    {
      "name": "Taj Mahal",
      "city": "Agra",
      "state": "Uttar Pradesh",
      "country": "India",
      "nearestAirport": "Agra Airport",
      "nearestRailwayStation": "Agra Cantt Railway Station",
      "timeToExplore": 3,
      "expense": 2500,
      "bestTimeToVisit": "October to March",
      "geometry": {
        "type": "Point",
        "coordinates": [78.0422, 27.1751]
      },
      "photos": [
       
      ],
      "reviews": [],
      "ratings": 4.8
    },
    {
      "name": "Gateway of India",
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India",
      "nearestAirport": "Chhatrapati Shivaji International Airport",
      "nearestRailwayStation": "Chhatrapati Shivaji Terminus",
      "timeToExplore": 2,
      "expense": 1500,
      "bestTimeToVisit": "November to February",
      "geometry": {
        "type": "Point",
        "coordinates": [72.8347, 18.9220]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.6
    },
    {
      "name": "Red Fort",
      "city": "Delhi",
      "state": "Delhi",
      "country": "India",
      "nearestAirport": "Indira Gandhi International Airport",
      "nearestRailwayStation": "New Delhi Railway Station",
      "timeToExplore": 4,
      "expense": 1800,
      "bestTimeToVisit": "October to March",
      "geometry": {
        "type": "Point",
        "coordinates": [77.2388, 28.6562]
      },
      "photos": [
       
      ],
      "reviews": [],
      "ratings": 4.5
    },
    {
      "name": "Hawa Mahal",
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India",
      "nearestAirport": "Jaipur International Airport",
      "nearestRailwayStation": "Jaipur Junction",
      "timeToExplore": 2,
      "expense": 1200,
      "bestTimeToVisit": "November to February",
      "geometry": {
        "type": "Point",
        "coordinates": [75.8269, 26.9239]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.4
    },
    {
      "name": "Sabarmati Ashram",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "country": "India",
      "nearestAirport": "Sardar Vallabhbhai Patel International Airport",
      "nearestRailwayStation": "Ahmedabad Junction",
      "timeToExplore": 2,
      "expense": 1000,
      "bestTimeToVisit": "October to March",
      "geometry": {
        "type": "Point",
        "coordinates": [72.5714, 23.0450]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.3
    },
    {
      "name": "Lonavala",
      "city": "Lonavala",
      "state": "Maharashtra",
      "country": "India",
      "nearestAirport": "Chhatrapati Shivaji International Airport",
      "nearestRailwayStation": "Lonavala Railway Station",
      "timeToExplore": 2,
      "expense": 1800,
      "bestTimeToVisit": "October to May",
      "geometry": {
        "type": "Point",
        "coordinates": [73.4161, 18.7528]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.2
    },
    {
      "name": "Jantar Mantar",
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India",
      "nearestAirport": "Jaipur International Airport",
      "nearestRailwayStation": "Jaipur Junction",
      "timeToExplore": 1,
      "expense": 800,
      "bestTimeToVisit": "November to February",
      "geometry": {
        "type": "Point",
        "coordinates": [75.8229, 26.9241]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.1
    },
    {
      "name": "Statue of Unity",
      "city": "Vadodara",
      "state": "Gujarat",
      "country": "India",
      "nearestAirport": "Vadodara Airport",
      "nearestRailwayStation": "Vadodara Junction",
      "timeToExplore": 4,
      "expense": 3500,
      "bestTimeToVisit": "October to February",
      "geometry": {
        "type": "Point",
        "coordinates": [73.1446, 21.8383]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.8
    },
    {
      "name": "Ajanta Caves",
      "city": "Aurangabad",
      "state": "Maharashtra",
      "country": "India",
      "nearestAirport": "Aurangabad Airport",
      "nearestRailwayStation": "Aurangabad Railway Station",
      "timeToExplore": 3,
      "expense": 2000,
      "bestTimeToVisit": "October to March",
      "geometry": {
        "type": "Point",
        "coordinates": [75.8577, 20.5529]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.7
    },
    {
      "name": "Meherangarh Fort",
      "city": "Jodhpur",
      "state": "Rajasthan",
      "country": "India",
      "nearestAirport": "Jodhpur Airport",
      "nearestRailwayStation": "Jodhpur Junction",
      "timeToExplore": 3,
      "expense": 1800,
      "bestTimeToVisit": "October to March",
      "geometry": {
        "type": "Point",
        "coordinates": [73.7275, 26.2983]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.6
    },
    {
      "name": "Dwarkadhish Temple",
      "city": "Dwarka",
      "state": "Gujarat",
      "country": "India",
      "nearestAirport": "Porbandar Airport",
      "nearestRailwayStation": "Dwarka Railway Station",
      "timeToExplore": 1,
      "expense": 800,
      "bestTimeToVisit": "October to February",
      "geometry": {
        "type": "Point",
        "coordinates": [68.9678, 22.2394]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.2
    },
    {
      "name": "Siddhivinayak Temple",
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India",
      "nearestAirport": "Chhatrapati Shivaji International Airport",
      "nearestRailwayStation": "Dadar Railway Station",
      "timeToExplore": 1,
      "expense": 700,
      "bestTimeToVisit": "November to February",
      "geometry": {
        "type": "Point",
        "coordinates": [72.8337, 19.0176]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.3
    },
    {
      "name": "Shankar's International Dolls Museum",
      "city": "Delhi",
      "state": "Delhi",
      "country": "India",
      "nearestAirport": "Indira Gandhi International Airport",
      "nearestRailwayStation": "New Delhi Railway Station",
      "timeToExplore": 2,
      "expense": 1200,
      "bestTimeToVisit": "October to March",
      "geometry": {
        "type": "Point",
        "coordinates": [77.2251, 28.6188]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.4
    },
    {
      "name": "Ranakpur Jain Temple",
      "city": "Udaipur",
      "state": "Rajasthan",
      "country": "India",
      "nearestAirport": "Maharana Pratap Airport",
      "nearestRailwayStation": "Udaipur City Railway Station",
      "timeToExplore": 1,
      "expense": 800,
      "bestTimeToVisit": "October to March",
      "geometry": {
        "type": "Point",
        "coordinates": [73.4927, 25.1259]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.5
    },
    {
      "name": "Dumas Beach",
      "city": "Surat",
      "state": "Gujarat",
      "country": "India",
      "nearestAirport": "Surat Airport",
      "nearestRailwayStation": "Surat Railway Station",
      "timeToExplore": 1,
      "expense": 700,
      "bestTimeToVisit": "October to February",
      "geometry": {
        "type": "Point",
        "coordinates": [72.7567, 21.1606]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.0
    },
    {
      "name": "Elephanta Caves",
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India",
      "nearestAirport": "Chhatrapati Shivaji International Airport",
      "nearestRailwayStation": "Chhatrapati Shivaji Terminus",
      "timeToExplore": 2,
      "expense": 1200,
      "bestTimeToVisit": "November to February",
      "geometry": {
        "type": "Point",
        "coordinates": [72.9307, 18.9637]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.3
    },
    {
      "name": "Bada Imambara",
      "city": "Lucknow",
      "state": "Uttar Pradesh",
      "country": "India",
      "nearestAirport": "Chaudhary Charan Singh International Airport",
      "nearestRailwayStation": "Lucknow Railway Station",
      "timeToExplore": 2,
      "expense": 1300,
      "bestTimeToVisit": "October to March",
      "geometry": {
        "type": "Point",
        "coordinates": [80.9147, 26.8679]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.4
    },
    {
      "name": "Sarnath",
      "city": "Varanasi",
      "state": "Uttar Pradesh",
      "country": "India",
      "nearestAirport": "Lal Bahadur Shastri International Airport",
      "nearestRailwayStation": "Varanasi Junction",
      "timeToExplore": 1,
      "expense": 800,
      "bestTimeToVisit": "October to March",
      "geometry": {
        "type": "Point",
        "coordinates": [83.0059, 25.3761]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.3
    },
    {
      "name": "Hussain Sagar Lake",
      "city": "Hyderabad",
      "state": "Telangana",
      "country": "India",
      "nearestAirport": "Rajiv Gandhi International Airport",
      "nearestRailwayStation": "Hyderabad Deccan Railway Station",
      "timeToExplore": 1,
      "expense": 600,
      "bestTimeToVisit": "October to February",
      "geometry": {
        "type": "Point",
        "coordinates": [78.4620, 17.4239]
      },
      "photos": [
        
      ],
      "reviews": [],
      "ratings": 4.2
    }
  ]
  
const seedDB = async () => {
    
    for (let i = 0; i < places.length; i++) {
        const destination = new Destination(places[i]);
        await destination.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})