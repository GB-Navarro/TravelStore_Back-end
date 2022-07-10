import dayjs from "dayjs";

export default async function getUserNextTrips(userTrips){
    let userNextTrips = [];
    userTrips.forEach((trip) => {
        if(compareDates(trip.date) === -1){
            userNextTrips.push(trip);
        }
    })
    return userNextTrips;
}

function compareDates(date){
    //ESSA FUNÇÃO COMPARA A DATA RECEBIDA COM A DATA DE HOJE

    //A função retorna 1 se a data atual é maior que a data recebida
    //A função retorna -1 se a data atual é menor que a data recebida
    //A função retorna 0 se a data atual é igual a data recebida

    let currentDay = parseInt(dayjs().format('DD'));
    let currentMonth = parseInt(dayjs().format('MM'));
    let currentYear = parseInt(dayjs().format('YYYY'));
    let receivedDay = parseInt(date[0]+date[1]);
    let receivedMonth = parseInt(date[3]+date[4]);
    let receivedYear = parseInt(date[6]+date[7]+date[8]+date[9]);
    if(currentYear > receivedYear){
        return 1  
    }else if(currentYear === receivedYear){
        if(currentMonth > receivedMonth){
            return 1
        }else if(currentMonth === receivedMonth){
            if(currentDay > receivedDay){
                return 1
            }else if(currentDay === receivedDay){
                return 0
            }else{
                return -1
            }
        }else{
            return -1
        }
    }else{
        return -1
    }
}