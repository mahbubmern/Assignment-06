
// Creating array of Object Data structure of 6 blood donatee

const donatees = [
	{
		name: 'Mahbub',
		age: 35,
		gender: 'Male',
		cell: '01712193871',
		location: 'Jatrabari',
		last_donate_date: '1/2/2023',
		blood_group: 'AB+',
		blood_recipient: [
			{
				name: 'Samsun Nahar',
				cell: '01686569561',
				location: 'Jatrabari',
			},
			{
				name: 'kalam',
				cell: '01686565681',
				location: 'Banani',
			},
		],
		remaining_day: function () {
			let start_date = new Date(this.last_donate_date);
			let current_date = new Date();
			let time_diff = current_date.getTime() - start_date.getTime();
			let day_passed = Math.floor(time_diff / (1000 * 3600 * 24));

			return day_passed;
		},
	},

  {
		name: 'Promi',
		age: 25,
		gender: 'Female',
		cell: '01798047018',
		location: 'Mirhazir Bag',
		last_donate_date: '',
		blood_group: 'A+',
		blood_recipient: [
		
		],
		remaining_day: function () {
			let start_date = new Date(this.last_donate_date);
			let current_date = new Date();
			let time_diff = current_date.getTime() - start_date.getTime();
			let day_passed = Math.floor(time_diff / (1000 * 3600 * 24));

			return day_passed;
		},
	},

	{
		name: 'Salim',
		age: 45,
		gender: 'Male',
		cell: '01716069842',
		location: 'Dholairpar',
		last_donate_date: '5/2/2023',
		blood_group: 'A+',
		blood_recipient: [
			{
				name: 'kamrun Nahar',
				cell: '015689569561',
				location: 'Wari',
			},
			{
				name: 'jamal',
				cell: '01785565681',
				location: 'Gulshan',
			},
		],
		remaining_day: function () {
			let start_date = new Date(this.last_donate_date);
			let current_date = new Date();
			let time_diff = current_date.getTime() - start_date.getTime();
			let day_passed = Math.floor(time_diff / (1000 * 3600 * 24));

			return day_passed;
		},
	},

	{
		name: 'Humayun',
		age: 48,
		gender: 'Male',
		cell: '01670303757',
		location: 'Jatrabari',
		last_donate_date: '2/7/2023',
		blood_group: 'A+',
		blood_recipient: [
			{
				name: 'Sila Begum',
				cell: '015689569861',
				location: 'sanarpar',
			},
			{
				name: 'wasim',
				cell: '01985225681',
				location: 'Banani',
			},
		],
		remaining_day: function () {
			let start_date = new Date(this.last_donate_date);
			let current_date = new Date();
			let time_diff = current_date.getTime() - start_date.getTime();
			let day_passed = Math.floor(time_diff / (1000 * 3600 * 24));

			return day_passed;
		},
	},

	{
		name: 'Laila Noor',
		age: 50,
		gender: 'Female',
		cell: '01677525418',
		location: 'Sonir Akhra',
		last_donate_date: '1/2/2023',
		blood_group: 'A+',
		blood_recipient: [
			{
				name: 'Aklima Begum',
				cell: '017256256395',
				location: 'Rayerbag',
			},
			{
				name: 'jasim',
				cell: '01585225981',
				location: 'Sanarpar',
			},
		],
		remaining_day: function () {
			let start_date = new Date(this.last_donate_date);
			let current_date = new Date();
			let time_diff = current_date.getTime() - start_date.getTime();
			let day_passed = Math.floor(time_diff / (1000 * 3600 * 24));

			return day_passed;
		},
	},

	{
		name: 'Kohinoor Akhter',
		age: 30,
		gender: 'Female',
		cell: '01886598591',
		location: 'Sanarpar',
		last_donate_date: '3/15/2023',
		blood_group: 'A+',
		blood_recipient: [
			{
				name: 'Rohima Begum',
				cell: '015256256395',
				location: 'Dhanmondi',
			},
			{
				name: 'Abdul Karim',
				cell: '01585555981',
				location: 'Sanarpar',
			},
		],
		remaining_day: function () {
			let start_date = new Date(this.last_donate_date);
			let current_date = new Date();
			let time_diff = current_date.getTime() - start_date.getTime();
			let day_passed = Math.floor(time_diff / (1000 * 3600 * 24));

			return day_passed;
		},
	},

	{
		name: 'Shahinoor Akhter',
		age: 35,
		gender: 'Female',
		cell: '01896598591',
		location: 'Wari',
		last_donate_date: '3/29/2023',
		blood_group: 'AB+',
		blood_recipient: [
			{
				name: 'Mahbub',
				cell: '01712193871',
				location: 'Jatrabari',
			},
			{
				name: 'Abdur Rahim',
				cell: '01588565981',
				location: 'Wari',
			},
		],
		remaining_day: function () {
			let start_date = new Date(this.last_donate_date);
			let current_date = new Date();
			let time_diff = current_date.getTime() - start_date.getTime();
			let day_passed = Math.floor(time_diff / (1000 * 3600 * 24));

			return day_passed;
		},
	},
];
