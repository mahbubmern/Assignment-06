// Creating array of Object Data structure  blood donatee

const donatees = [
  {
    name: "Mahbub",
    age: 35,
    gender: "Male",
    cell: "01712193871",
    location: "Jatrabari",
    last_donate_date: "1/2/2023",
    blood_group: "AB+",
    blood_recipient: [
      {
        name: "Samsun Nahar",
        cell: "01686569561",
        location: "Jatrabari",
      },
      {
        name: "kalam",
        cell: "01686565681",
        location: "Banani",
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
    name: "Promi khatun",
    age: 25,
    gender: "Female",
    cell: "01798047028",
    location: "Mirhazir Bag",
    last_donate_date: "2/10/2022",
    blood_group: "A+",
    blood_recipient: [
      {
        name: "kamrun Nahar sila",
        cell: "015689569561",
        location: "Wari",
      },
      {
        name: "jamal bhuiyan",
        cell: "01785565681",
        location: "Gulshan",
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
    name: "Salim",
    age: 45,
    gender: "Male",
    cell: "01716069842",
    location: "Dholairpar",
    last_donate_date: "5/2/2023",
    blood_group: "A+",
    blood_recipient: [
      {
        name: "kamrun Nahar",
        cell: "015689569561",
        location: "Wari",
      },
      {
        name: "jamal",
        cell: "01785565681",
        location: "Gulshan",
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
    name: "Humayun",
    age: 48,
    gender: "Male",
    cell: "01670303757",
    location: "Jatrabari",
    last_donate_date: "2/7/2023",
    blood_group: "A+",
    blood_recipient: [
      {
        name: "Sila Begum",
        cell: "015689569861",
        location: "sanarpar",
      },
      {
        name: "wasim",
        cell: "01985225681",
        location: "Banani",
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
    name: "Laila Noor",
    age: 50,
    gender: "Female",
    cell: "01677525418",
    location: "Sonir Akhra",
    last_donate_date: "1/2/2023",
    blood_group: "A+",
    blood_recipient: [
      {
        name: "Aklima Begum",
        cell: "017256256395",
        location: "Rayerbag",
      },
      {
        name: "jasim",
        cell: "01585225981",
        location: "Sanarpar",
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
    name: "Kohinoor Akhter",
    age: 30,
    gender: "Female",
    cell: "01886598591",
    location: "Sanarpar",
    last_donate_date: "3/15/2023",
    blood_group: "A+",
    blood_recipient: [
      {
        name: "Rohima Begum",
        cell: "015256256395",
        location: "Dhanmondi",
      },
      {
        name: "Abdul Karim",
        cell: "01585555981",
        location: "Sanarpar",
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
    name: "Shahinoor Akhter",
    age: 35,
    gender: "Female",
    cell: "01896598591",
    location: "Wari",
    last_donate_date: "3/29/2023",
    blood_group: "AB+",
    blood_recipient: [
      {
        name: "Mahbub",
        cell: "01712193871",
        location: "Jatrabari",
      },
      {
        name: "Abdur Rahim",
        cell: "01588565981",
        location: "Wari",
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
    name: "Umme Hanee Promi",
    age: 25,
    gender: "Female",
    cell: "01798047018",
    location: "Gazipur",
    last_donate_date: "1/29/2023",
    blood_group: "A+",
    blood_recipient: [
      {
        name: "Abdus sattar",
        cell: "01712523871",
        location: "Jatrabari",
      },
      {
        name: "Abdur Rahman",
        cell: "01587565981",
        location: "Wari",
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
    name: "Fatema Begum",
    age: 45,
    gender: "Female",
    cell: "01896598591",
    location: "Gazipur",
    last_donate_date: "2/29/2023",
    blood_group: "AB+",
    blood_recipient: [
      {
        name: "salam",
        cell: "01712193871",
        location: "Jatrabari",
      },
      {
        name: "Zabbar",
        cell: "01588565981",
        location: "Wari",
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
    name: "Abu Huraira",
    age: 25,
    gender: "Male",
    cell: "01896598591",
    location: "Gazipur",
    last_donate_date: "12/2/2022",
    blood_group: "O+",
    blood_recipient: [
      {
        name: "Rehena",
        cell: "01798693871",
        location: "Chandpur",
      },
      {
        name: "Abdul Zabbar",
        cell: "01588565981",
        location: "Wari",
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
    name: "Shahinoor",
    age: 35,
    gender: "Female",
    cell: "01325598591",
    location: "Wari",
    last_donate_date: "6/2/2022",
    blood_group: "O+",
    blood_recipient: [
      {
        name: "Rahman",
        cell: "01719893871",
        location: "Gulshan",
      },
      {
        name: "Abdur salam",
        cell: "01258565981",
        location: "Banani",
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
    name: "Fedous",
    age: 35,
    gender: "Male",
    cell: "01896876591",
    location: "Wari",
    last_donate_date: "3/29/2023",
    blood_group: "O-",
    blood_recipient: [
      {
        name: "Munshi",
        cell: "01760193871",
        location: "Wari",
      },
      {
        name: "Rahim",
        cell: "01878565981",
        location: "Badda",
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
    name: "Rohima Akhter",
    age: 35,
    gender: "Female",
    cell: "01596598591",
    location: "Wari",
    last_donate_date: "1/23/2022",
    blood_group: "B+",
    blood_recipient: [
      {
        name: "Mahbub Rahman",
        cell: "01712193871",
        location: "Jatrabari",
      },
      {
        name: "Abdur Rahim Badsha",
        cell: "01588565981",
        location: "Wari",
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
    name: "Ahamadullah",
    age: 35,
    gender: "Male",
    cell: "01896687591",
    location: "Wari",
    last_donate_date: "1/2/2023",
    blood_group: "A-",
    blood_recipient: [
      {
        name: "Salam Mahbub",
        cell: "01712193871",
        location: "Jatrabari",
      },
      {
        name: "Abdur Rahim khan",
        cell: "01588565981",
        location: "Wari",
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
    name: "Rana",
    age: 27,
    gender: "Male",
    cell: "01596598591",
    location: "Badda",
    last_donate_date: "2/2/2022",
    blood_group: "A-",
    blood_recipient: [
      {
        name: "A. B.Mahbub",
        cell: "01712193871",
        location: "Jatrabari",
      },
      {
        name: "Rahima",
        cell: "01588565981",
        location: "Wari",
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
    name: "Nafsin",
    age: 19,
    gender: "Male",
    cell: "01256598591",
    location: "Mirpur",
    last_donate_date: "3/29/2022",
    blood_group: "B-",
    blood_recipient: [
      {
        name: "Mahbub latif",
        cell: "01712193871",
        location: "Jatrabari",
      },
      {
        name: "Abdus salam",
        cell: "01588565981",
        location: "Wari",
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
    name: "Kayes",
    age: 35,
    gender: "Male",
    cell: "01296598591",
    location: "Mirpur",
    last_donate_date: "1/2/2023",
    blood_group: "AB-",
    blood_recipient: [
      {
        name: "Mahbub aslam",
        cell: "01712193871",
        location: "Jatrabari",
      },
      {
        name: "Abdur Rahim bhuiyan",
        cell: "01588565981",
        location: "Wari",
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
    name: "Kayes Abdullah",
    age: 45,
    gender: "Male",
    cell: "01296597591",
    location: "Mirpur",
    last_donate_date: "1/2/2023",
    blood_group: "O-",
    blood_recipient: [
      {
        name: "Mahbub ferdous",
        cell: "01712193871",
        location: "Jatrabari",
      },
      {
        name: "Abdur rahman",
        cell: "01588565981",
        location: "Wari",
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
    name: "Kayes Mahmud",
    age: 25,
    gender: "Male",
    cell: "01296598591",
    location: "Mirpur",
    last_donate_date: "10/2/2022",
    blood_group: "AB-",
    blood_recipient: [
      {
        name: "Mahbuba",
        cell: "01712193871",
        location: "Jatrabari",
      },
      {
        name: "Rahima",
        cell: "01588565981",
        location: "Wari",
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
    name: "Saifullah",
    age: 55,
    gender: "Male",
    cell: "01296598591",
    location: "Mirpur",
    last_donate_date: "1/2/2022",
    blood_group: "O-",
    blood_recipient: [
      {
        name: "Sahid",
        cell: "01712193871",
        location: "Jatrabari",
      },
      {
        name: "Aslam",
        cell: "01588565981",
        location: "Wari",
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
