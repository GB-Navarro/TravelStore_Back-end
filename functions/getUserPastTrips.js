import compareDates from "./compareDates.js";

export default async function getUserPastTrips(userTrips){
    let userPastTrips = [];
    userTrips.forEach((trip) => {
        if(compareDates(trip.date) === 1){
            userPastTrips.push(trip);
        }
    })
    return userPastTrips;
}