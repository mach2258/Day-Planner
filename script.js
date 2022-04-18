
var eventList = document.getElementsByClassName("saveBtn")

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var hour = moment().format('H');
console.log(hour)

$('.description').each(function () {
    // Find the number ID
    var idEl = $(this).attr("id")
    console.log($(this).attr("id"))
    // If statement for matching the time
    if (hour == idEl) {
        $(this).addClass("present")
    } else if (hour > idEl) {
        $(this).addClass("past")
    } else {
        $(this).addClass("future")
    }
    // If statement for if its ahead
    // If for if its behind
})

// var events = [];

// function storeEvents() {
//     localStorage.setItem("events", JSON.stringify(events));
//     console.log(storeEvents())
// }

$('.description').each(function(){
    
})

$('.saveBtn').click(function(event) {
    var element = $(event.target)
    localStorage.setItem(element.parent().attr("id"),element.siblings(".description").val())
    console.log(element.parent())
});
