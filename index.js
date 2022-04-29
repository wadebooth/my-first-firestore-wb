var admin = require("firebase-admin");

var serviceAccount = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const restaurant = {
  name: "Mister 01",
  address: "555 N Federal Hwy Suite #5, Boca Raton, FL 333432",
  cuisine: "Pizza",
  rating: 4.9,
  phone_number: "(786) 677-2903",
}; //creates an object of a collection of data to add

// db.collection("restaurant")
//   .add(restaurant)
//   .then((doc) => console.log("Created restaurant", doc.id))
//   .catch((err) => console.error(err));

const restaurant2 = {
  name: "Bolay",
  address: "7060 W Palmetto Park Rd, Boca Raton, FL 33433",
  cuisine: "American",
  rating: 4.6,
};

async function addRestaurant() {
  try {
    const doc = await db.collection("restaurants").add(restaurant2);
    console.log("Created restaurant", doc.id);
  } catch (err) {
    console.error(err);
  }
}

addRestaurant(restaurant2);
