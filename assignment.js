//task-1

function kilometerToMeter(km) {

    var meter = km * 1000;  // 1km =1000 meter
    return meter;
}
var output = kilometerToMeter(3);
console.log(output);

//task-2

function budgetCalculator(watch, phone, laptop) {
    var budget = 0;                                       //initial budget
    if (watch > 0 && phone > 0 && laptop > 0) {
        budget = watch * 50 + phone * 100 + laptop * 500; //total approx.

    }

    return budget;
}
var result = budgetCalculator(2, 1, 1);
console.log(result);

//task-3

function hotelCost(days) {
    let cost = 0;                        // initial cost
    if (days <= 10) {
        cost = 10 * 100;                 //cost for first 10 days
    }
    else if (days <= 20) {
        let firstphase = 10 * 100;
        let remaining = days - 10;
        secondphase = remaining * 80;     //cost for second 10 days
        cost = firstphase + secondphase;

    }
    else {
        firstphase = 10 * 100;
        secondphase = 10 * 80;
        let remaining = days - 20;
        let thirdphase = remaining * 50;  //cost for after 20days
        cost = firstphase + secondphase + thirdphase;
    }
    return cost;
}

let totalCost = hotelCost(25);
console.log(totalCost);

//task-4

function megaFriend(names) {
    var largest = names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
var names = ["monc", "gabbu", "dore", "aladin", "montu-miya"];
var output = megaFriend(names);
console.log(output);

