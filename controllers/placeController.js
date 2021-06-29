const Place = require("../models/place");
const { nanoid } = require("nanoid");

const addPlace = async (place) => {
  let slug = place.name.replace(" ", "-") + "-" + nanoid(6);
  let newPlace = new Place({ ...place, slug });
  try {
    newPlace.save();
    return { status: true, result: newPlace };
  } catch (e) {
    return { status: false, result: { message: e.message } };
  }
};

const findPlace = async (slug) => {
  let place = Place.findOne({ slug });
  if (place) {
    return { status: true, result: place };
  } else {
    return { status: false, result: { message: "Place not found" } };
  }
};

const placesList = async (query) => {
  try {
    let places;
    if (query.name) {
      places = Places.find({ name: query.name });
    } else if (query.city) {
      places = Places.find({ city: query.city });
    } else {
      places = Places.find();
    }
    return { status: true, result: places };
  } catch (e) {
    return { status: false, result: { message: e.message } };
  }
};

module.exports = { addPlace, findPlace, placesList }