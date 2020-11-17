const dashboardData = [
  {
    media: "facebook",
    handle: "@nathanf",
    number: "1987",
    details: "Followers",
    day: "99 Today",
    status: "up",
  },
  {
    media: "twitter",
    handle: "@nathanf",
    number: "1044",
    details: "Followers",
    day: "99 Today",
    status: "up",
  },
  {
    media: "instagram",
    handle: "@realnathanf",
    number: "11k",
    details: "Followers",
    day: "1099 Today",
    status: "up",
  },
  {
    media: "youtube",
    handle: "Nathan F.",
    number: " 8239",
    details: "Subscribers",
    day: "144 Today",
    status: "down",
  },
];

const overviewData = [
  {
    media: "facebook",
    detials: "Page Views",
    number: "87",
    percentage: "3%",
    status: "up",
  },
  {
    media: "facebook",
    detials: "Likes",
    number: "52",
    percentage: "2%",
    status: "down",
  },
  {
    media: "twitter",
    detials: "Likes",
    number: "5462",
    percentage: "2257%",
    status: "up",
  },
  {
    media: "twitter",
    detials: "Profile Views",
    number: "52k",
    percentage: "1375%",
    status: "up",
  },
  {
    media: "instagram",
    detials: "Retweets",
    number: "117",
    percentage: "303%",
    status: "up",
  },
  {
    media: "instagram",
    detials: "Likes",
    number: "507",
    percentage: "553%",
    status: "up",
  },
  {
    media: "youtube",
    detials: "Likes",
    number: "107",
    percentage: "19%",
    status: "down",
  },
  {
    media: "youtube",
    detials: "Total Views",
    number: "1407",
    percentage: "12%",
    status: "down",
  },
];

const dashboardBoxes = document.querySelector(".dashboard-boxes");
const overviewBoxes = document.querySelector(".o-boxes");
const checkbox = document.getElementById("checkbox");
const root = document.querySelector(":root");

const createDashboard = (data, element) => {
  data.forEach((elem) => {
    element.innerHTML += `<div class="box ${elem.media}">
        <div class="top">
          <img src="/images/icon-${elem.media}.svg" alt="" class="media">
          <p class="handle">${elem.handle}</p>
        </div>
        <div class="middle">
          <p class="number">${elem.number}</p>
          <p class="details">${elem.details}</p>
        </div>
        <div class="lower">
          <img src="/images/icon-${elem.status}.svg" alt="">
          <p class="${elem.status}">${elem.day}</p >
        </div>
      </div>`;
  });
};

const createOverview = (data, element) => {
  data.forEach((elem) => {
    element.innerHTML += `<div class="overview-box">
        <div class="o-upper">
          <p class="o-details">${elem.detials}</p>
          <img src="/images/icon-${elem.media}.svg" alt="" />
        </div>
        <div class="o-lower">
          <p class="o-number">${elem.number}</p>
          <div class="percent">
            <img src="/images/icon-${elem.status}.svg" alt="" />
            <p class="${elem.status}">${elem.percentage}</p>
          </div>
        </div>
      </div>`;
  });
};

const changeMode = (trigger, color) => {
  if (trigger.checked) {
    color.style.setProperty("--background", "hsl(0, 0%, 100%)");
    color.style.setProperty("--top", "hsl(225, 100%, 98%)");
    color.style.setProperty("--box", "hsl(227, 47%, 96%)");
    color.style.setProperty("--text", "hsl(228, 12%, 44%)");
    color.style.setProperty("--thick", "hsl(230, 17%, 14%)");
    color.style.setProperty("--hover", "hsl(227, 47%, 90%)");
  } else {
    color.style.setProperty("--background", "hsl(230, 17%, 14%)");
    color.style.setProperty("--top", "hsl(232, 19%, 15%)");
    color.style.setProperty("--box", "hsl(228, 28%, 20%)");
    color.style.setProperty("--text", "hsl(228, 34%, 66%)");
    color.style.setProperty("--thick", "hsl(0, 0%, 100%)");
    color.style.setProperty("--hover", "hsl(228, 28%, 25%)");
  }
};

createDashboard(dashboardData, dashboardBoxes);

createOverview(overviewData, overviewBoxes);

checkbox.onclick = () => {
  changeMode(checkbox, root);
};
