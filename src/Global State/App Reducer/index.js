import { SIGN_UP, LOG_IN, SIGN_OUT, USER_SEARCH } from "../Action";

const initialState = {
  hotels: [
    {
      id: 1,
      name: "Hotel Mehran",
      address: "Shahrah-e-Faisal Road, 75530 Karachi, Pakistan",
      description:
        "Set in the Shahrah-e-Faisal district of Karachi, Hotel Mehran provides a fitness centre. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property. Free private parking is available and the hotel also offers car hire for guests who want to explore the surrounding area.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213406070.jpg?k=ce8dd87384a0f68d569ad3bad99d8b20787d64506f27acde9b552be65b548c29&o=&hp=1",
      city: "Karachi",
      rating: "⭐⭐⭐⭐",
      price: "PKR.5000/day",
    },
    {
      id: 2,
      name: "Avari Tower Karachi",
      address: "Fatima Jinnah Road, 15503 Karachi, Pakistan",
      description:
        "Avari Tower features an outdoor pool, spa and fitness centre. Offering modern air conditioned rooms, the property provides free WiFi in all areas. It is 15 km from Jinnah Airport.Rooms come with a flat-screen cable/satellite TV, safety deposit box and minibar. Shower facilities are included in private bathrooms.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/43715866.jpg?k=c97793641733162778b4e78f5354ae19042863e37c8a58ce9b419cff64189c8b&o=&hp=1",
      city: "Karachi",
      rating: "⭐⭐⭐⭐⭐",
      price: "PKR.8000/day",
    },
    {
      id: 3,
      name: "Pearl Continental Hotel, Karachi",
      address: " Club Road, Karachi, Sindh, 75530 Karachi, Pakistan",
      description:
        "Located in the commercial centre of south central Karachi, The 5-star Pearl Continental Hotel offers luxurious and modern rooms with free Wi-Fi. 6 dining options and an indoor pool await guests. Air-conditioned and fully carpeted, each room features a flat-screen satellite TV, minibar and iron. Private bathroom includes a hair dryer and shower. A seating area, safe and coffee machine is standard in all rooms. Guests who drive enjoy valet and free private parking. Conveniences include a car rental, concierge and tour desk.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280190481.jpg?k=3e23c1d4e75d4c48b9b5b31f008acdf1e75523bec3149cf651afa8ca0a985d1e&o=&hp=1",
      city: "Karachi",
      rating: "⭐⭐⭐⭐⭐",
      price: "PKR.6000/day",
    },
    {
      id: 4,
      name: "Rose Palace Hotel, Gulberg",
      address:
        " 55-N, Gurumangat Road, Gulberg-II,, Gulberg, 54000 Lahore, Pakistan",
      description:
        "Rose Palace Hotel, Gulberg offers accommodation in the centre of Lahore. It is conveniently placed a short walk away from Liberty Market, Gulberg. The Allama Iqbal Airport is a 30-minute drive from the property.Rooms are stylish and well-appointed. Each is fitted with minibar. The apartments come equipped with a living area and a kitchenette.You can also rent a car to explore the city or indulge in some quiet time at the library. Free parking facilities are available on-site. Travel arrangements can be made at the tour desk.For meals, CI Restaurant will serve local Pakistani, Indian and continental cuisines.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218003311.jpg?k=f517869242106e38f707cec1f8f5d77d44499fbe047d6335a10a6b0bc8d5ea39&o=&hp=1",
      city: "Lahore",
      rating: "⭐⭐⭐",
      price: "PKR.5000/day",
    },
    {
      id: 5,
      name: "Pearl Continental Hotel, Lahore",
      address: " Shahrah-e-Quaid-e-Azam, The Mall, 54000 Lahore, Pakistan",
      description:
        "Located within Shahrah-e-Quaid-e-Azam (The Mall), Pearl Continental Hotel Lahore offers 5-star accommodation with free Wi-Fi and floor-to-ceiling windows. An outdoor pool and a fitness centre are available. A free transfer is provided to and from Lahore International Airport. The well-decorated rooms come with air conditioning, a flat-screen TV and a minibar. Some rooms include a personal safe. Bathrooms are equipped with a shower and hairdryer.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278504590.jpg?k=2d6676b5981e1fafc018b5d092375e37656a136a18b08e07acebf39a6b395ae1&o=&hp=1",
      city: "Lahore",
      rating: "⭐⭐⭐⭐⭐",
      price: "PKR.10000/day",
    },
    {
      id: 6,
      name: "The Pyramid Resort, Murree",
      address: " 32 Kashmir Point, 47150 Murree, Pakistan",
      description:
        "The Paramid Resort features a restaurant. Private parking can be arranged at no extra charge.At the hotel, the rooms include a terrace.Guests at The Paramid Resort can enjoy a continental or an Asian breakfast.Islamabad is 35 km from the accommodation.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/310786852.jpg?k=b1082de18a184cfbdfc718e531832514972112cf4df65785b2946e7dcfeeb6ce&o=&hp=1",
      city: "Murree",
      rating: "⭐⭐⭐⭐",
      price: "PKR.8000/day",
    },
  ],
  userSearch: [],
  user: [],
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP: {
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    }
    case LOG_IN: {
      return {
        ...state,
        user: [action.payload],
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        user: [],
      };
    }
    case USER_SEARCH: {
      return {
        ...state,
        userSearch: [action.payload],
        hotels: state.hotels.filter(
          (hotel) => hotel.city === action.payload.city
        ),
      };
    }
    default: {
      return state;
    }
  }
};
