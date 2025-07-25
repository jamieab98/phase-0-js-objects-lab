//Write your code here
let attendee = {};
attendee.attendeeId = "T001";
attendee.name = "Alice Smith";
attendee.event = "JavaScript Conference";
attendee.ticketType = "VIP";
attendee.ticketPrice = 150.00;

function logAttendeeName(attendee){
  console.log(attendee.name);
}
logAttendeeName(attendee)

function logTicketPrice(attendee){
  console.log(attendee.ticketPrice);
}
logTicketPrice(attendee)

function updateTicketType(attendee, newType){
  attendee.ticketType = newType;
}
updateTicketType(attendee, "General")

function updateTicketPrice(attendee, newPrice){
  attendee.ticketPrice = newPrice;
}
updateTicketPrice(attendee, 75.00)

function removeEventProperty(attendee){
  delete attendee.event;
}
removeEventProperty(attendee)

function addCheckedInProperty(attendee){
  attendee.checkedIn = true;
}
addCheckedInProperty(attendee)

console.log(attendee)

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};