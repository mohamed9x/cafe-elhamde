let quotes = [
  "شكراً على طلبك! نتمنى لك يومًا مميزًا ☕",
  "ابتسم، فالحياة فنجان قهوة ☀️",
  "لحظاتك عندنا لا تُنسى 🌟"
];
let orderList = [];

window.onload = () => {
  document.getElementById("bgMusic").volume = 0.05;
};

function enterClient() {
  hideAll();
  document.getElementById("clientView").classList.remove("hidden");
  populateDrinkOptions();
}

function enterAdmin() {
  hideAll();
  document.getElementById("loginPanel").classList.remove("hidden");
}

function logoutAdmin() {
  hideAll();
  document.getElementById("welcomeView").classList.remove("hidden");
}

function hideAll() {
  ["welcomeView", "clientView", "adminView", "loginPanel"].forEach(id =>
    document.getElementById(id).classList.add("hidden")
);
}

function populateDrinkOptions() {
  const drinkSelect = document.getElementById("drink");
  if (drinkSelect.options.length> 0) return;
  const drinks = [
    "قهوة خفيفة", "قهوة متوسطة", "قهوة قوية", "قهوة بالحليب", "لاتيه", "كابتشينو", "إسبريسو",
    "كولا", "سبرايت", "فانتا", "بيبسي", "7UP", "ميراندا",
    "حليب بالشوكولاتة", "حليب بالفراولة", "حليب بالموز", "حليب مثلج",
    "شاي", "عصير برتقال", "عصير تفاح", "عصير ليمون"
  ];
  drinks.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    drinkSelect.appendChild(option);
});

  // تحديث الفلتر في لوحة الموظف
  const filter = document.getElementById("filterDrink");
  if (filter && filter.options.length <= 1) {
    ["قهوة", "شاي", "حليب", "كولا"].forEach(name => {
      const op = document.createElement("option");
      op.value = name;
      op.textContent = name;
      filter.appendChild(op);
});
}
}

function submitOrder() {
  const drink = document.getElementById("drink").value;
  const sugar = document.getElementById("sugar").value;
  const msg = `✔️ تم تسجيل طلبك: ${drink} - ${sugar}`;
  const div = document.createElement("div");
  div.textContent = msg;
  document.getElementById("comments").appendChild