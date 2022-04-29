import admin from "firebase-admin"; //imports firebase library of tools

import serviceAccount from "./credentials.js"; //import our credentials to connect to Firebase

admin.initializeApp({
  //connects to our firebase project
  credential: admin.credential.cert(serviceAccount),
}); //Creating a cerificate from out credentials

// Now we are connected to OUR Firebase project & related services

const db = admin.firestore(); // creates a shortcut to access the Firestore database

const restaurantsCol = db.collection("restaurants"); //shortcut to point to our collection

const restaurant = {
  name: "Mister 01",
  address: "555 N Federal Hwy Suite #5, Boca Raton, FL 333432",
  cuisine: "Pizza",
  rating: 4.9,
  phone_number: "(786) 677-2903",
}; //creates an object-- in this case a specific restaurant we want to add to our database

restaurantsCol
  .add(restaurant) // adding the restaurant to our restaurants collection
  .then((doc) => console.log("Created restaurant", doc.id)) //handle resolve
  .catch((err) => console.error(err)); // handle reject

const restaurant2 = {
  name: "Bolay",
  address: "7060 W Palmetto Park Rd, Boca Raton, FL 33433",
  cuisine: "American",
  rating: 4.6,
};

async function addRestaurant(data) {
  try {
    const doc = await restaurantsCol.add(data); // add restauarnt to collection
    console.log("Created restaurant", doc.id); // handle resolve
  } catch (err) {
    console.error(err); // handle reject
  }
}

addRestaurant(restaurant2);
