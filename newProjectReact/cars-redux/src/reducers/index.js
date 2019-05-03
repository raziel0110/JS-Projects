import { combineReducers } from "redux";

const carsReducer = () => {
  return [
    {
      id: 1,
      Model: "BMW Z3",
      img: "http://www.millenniumheroes.com/wp-content/uploads/IMG_1637-1.jpg",
      year: 1993
    },
    {
      id: 2,
      Model: "BMW E34",
      img: "https://i.ytimg.com/vi/DO_buo6B_E8/maxresdefault.jpg",
      year: 1990
    },
    {
      id: 3,
      Model: "BMW E39",
      img:
        "https://i.pinimg.com/originals/57/2f/ac/572fac02184f0517f623b532b8d14398.jpg",
      year: 2001
    },
    {
      id: 4,
      Model: "BMW E46",
      img:
        "http://www.modbargains.com/images/Products/ST%20Suspension/BMW-E46-330i-ST-V1-Coilovers-1.jpg",
      year: 2004
    },
    {
      id: 5,
      Model: "BMW E90",
      img: "http://s1.1zoom.me/big3/774/341108-FAKIR.jpg",
      year: 2007
    },
    {
      id: 6,
      Model: "BMW F10",
      img:
        "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2016/04/2013-bmw-m5-photo-506765-s-986x6032.jpg",
      year: 2012
    }
  ];
};

const selectCarsReducer = (selectedCar = null, action) => {
  if (action.type === "SELECTED_CAR") {
    return action.payload;
  }

  return selectedCar;
};

export default combineReducers({
  cars: carsReducer,
  selectedCar: selectCarsReducer
});
