/**
 * Blodd donation app
 */

// receipt blood group from user by prompt

let search = prompt("Search....");

// elegible donatees search

const list = donatees.filter(
  (data) =>
    (data.blood_group === search.toUpperCase() &&
      data.remaining_day() >= 120) ||
    data.cell === search
);

// checking

list.length > 0 ? console.table(list) : console.table("Data not found");

let recipient_histroy = list.forEach((item) => {
  console.log(`Donor Name : ${item.name}
	`);
  item.blood_recipient.forEach((item1) => {
    console.log(`Blood recipient Name : ${item1.name}
		recipient Cell : ${item1.cell}
		`);
  });
});
