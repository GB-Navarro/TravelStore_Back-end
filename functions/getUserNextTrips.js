import compareDates from "./compareDates.js";

export default async function getUserNextTrips(userTrips){
    let userNextTrips = [];
    userTrips.forEach((trip) => {
        if(compareDates(trip.date) === -1){
            userNextTrips.push(trip);
        }
    })
    return userNextTrips;
}

