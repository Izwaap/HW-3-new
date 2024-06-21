const user = {
  name: "Євген",
  surname: "Казанцев",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Комп'ютер моєї мрії" },
    { src: "home.jpg", alt: "Смарт-Квартира" },
    { src: "voyage.jpg", alt: "Подорож до Киеву" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "Html" },
  { month: "Липень", skill: "Css" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "C#" },
  { month: "Жовтень", skill: "Paskal" },
  { month: "Листопад", skill: "Математика" },
  { month: "Грудень", skill: "C++" },
  { month: "Січень", skill: "Cкілл у GameDev" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
