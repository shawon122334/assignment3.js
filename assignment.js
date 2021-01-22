// kilometer to meter
function kilometerToMeter(kilo) {
    var meter;
    if (kilo < 0) {
        console.log("this is negative value.please put positive value");
    }
    else if (kilo >= 0) {
        meter = kilo * 1000;
        return console.log(meter);
    }

}
// pass value to function to see the result
//  kilometerToMeter(-1.679)  



// budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        console.log("this is negative quantity.please put positive quantity");
    }
    else if (watch > 0 && watch > 0 && watch > 0) {
        watchPrice = 50 * watch;
        mobilePrice = 100 * mobile;
        laptopPrice = 500 * laptop;

        total = watchPrice + mobilePrice + laptopPrice;
        return console.log(total);
    }
}
// pass value to function to see the result
budgetCalculator(2,2, 2);
// --------------------------


// hotel Cost
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var first = 10 * 100;
        var remainingDay = day - 10;
        var second = remainingDay * 80;
        var cost = first + second;
    }
    else {
        var first = 10 * 100;
        var second = 10 * 80;
        var remainingDay = day - 20;
        var third = remainingDay * 50;
        cost = first + second + third;
    }
    return cost;
}
// pass value to function ans print it to see the result 
// var total = hotelCost(21);
// console.log(total);
// --------------------------

//megaFriend 
function megaFriend(friend) {
    var mega = friend[0];
    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length > mega.length) {
            mega = friend[i];
        }
    }
    return mega;
}
// pass array value to function and print them to see the result
// var friend = ["sami", "opu", "shawon", "tanvir", "nafis", "lasjdfgjnsadgnaosdf"];
// var result = megaFriend(friend);
// console.log(result);


