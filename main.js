// /**
//  * Blodd donation app
//  */

//  Assignment No 1 . Find members by blood group those who are ready to donate blood

// receipt blood group from user by prompt

const search = prompt("Search .....");

//final data

const eligible_donatee_list = [];

// elegible donatees search

const list_by_blood_group = donatees.filter(
  (data) =>
    (data.blood_group === search.toUpperCase() &&
      data.remaining_day() >= 120) ||
    data.cell === search
);

list_by_blood_group.forEach((item) => {
  eligible_donatee_list.push(item);
});

// checking if data not exist

eligible_donatee_list.length > 0
  ? console.table(eligible_donatee_list)
  : console.table("Data not Found");

// // Assignment No 2 . search member by using their phone number with donation history

// receipt cell no from user by prompt

// let cellNo = prompt('Enter Cell No by which you may search');

// // cell no match
// const list_by_cell = donatees.find((data) => data.cell === cellNo);

// // search exist cell no and display
// if (list_by_cell) {
// 	let recipient_histroy = list_by_cell.blood_recipient;

// 	let y = '';
// 	recipient_histroy.map((item) => {
// 		y += ` ${item.name} - ${item.cell} - ${item.location}`;
// 	});

// 	recipient_histroy.length > 0
// 		? alert(
// 				`Blood Recipient List\n ===========\n name - phone - location\n ${y}`
// 		  )
// 		: alert(`Donor didn't yet donate Blood`);
// } else {
// 	alert('Input correct Cell No');
// }
