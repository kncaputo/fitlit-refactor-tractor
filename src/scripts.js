import './css/base.scss';
import './css/styles.scss';
import apiCalls from './apiCalls.js';
// import '/hydration-calendar.png', '/hydration-friends.png', '/hydration-goback.png' from './images'

import {dailyOz, dropdownEmail, dropdownFriendsStepsContainer, dropdownGoal, dropdownName, headerName, hydrationCalendarCard, hydrationFriendOuncesToday, hydrationFriendsCard, hydrationInfoCard, hydrationInfoGlassesToday, hydrationMainCard, hydrationUserOuncesToday, mainPage, profileButton, sleepCalendarCard, sleepCalendarHoursAverageWeekly, sleepCalendarQualityAverageWeekly, sleepFriendLongestSleeper, sleepFriendsCard, sleepFriendWorstSleeper, sleepInfoCard, sleepInfoHoursAverageAlltime, sleepInfoQualityAverageAlltime, sleepInfoQualityToday, sleepMainCard, sleepUserHoursToday, stairsCalendarCard, stairsCalendarFlightsAverageWeekly, stairsCalendarStairsAverageWeekly, stepsMainCard, stepsInfoCard, stepsFriendsCard, stepsTrendingCard, stepsCalendarCard, stairsFriendFlightsAverageToday, stairsFriendsCard, stairsInfoCard, stairsInfoFlightsToday, stairsMainCard, stairsTrendingButton, stairsTrendingCard, stairsUserStairsToday, stepsCalendarTotalActiveMinutesWeekly, stepsCalendarTotalStepsWeekly, stepsFriendAverageStepGoal, stepsInfoActiveMinutesToday, stepsInfoMilesWalkedToday, stepsFriendActiveMinutesAverageToday, stepsFriendStepsAverageToday, stepsTrendingButton, stepsUserStepsToday, trendingStepsPhraseContainer, trendingStairsPhraseContainer, userInfoDropdown, friendsStepsParagraphs} from './DOMelements.js'


import UserRepository from './UserRepository';

window.onload = fetchData();

let userRepository;
let user;
let todayDate = "2019/09/22";

mainPage.addEventListener('click', showInfo);
profileButton.addEventListener('click', showDropdown);
stairsTrendingButton.addEventListener('click', updateTrendingStairsDays);
stepsTrendingButton.addEventListener('click', updateTrendingStepDays);
// stairsTrendingButton.addEventListener('click', function() {
//   user.findTrendingStairsDays();
//   trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
// });
// stepsTrendingButton.addEventListener('click', function() {
//   user.findTrendingStepDays();
//   trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
// });

function fetchData() {
  let userPromise = apiCalls.fetchUserData();
  let sleepPromise = apiCalls.fetchSleepData();
  let activityPromise = apiCalls.fetchActivityData();
  let hydrationPromise = apiCalls.fetchHydrationData();

  Promise.all([userPromise, sleepPromise, activityPromise, hydrationPromise])
  .then(data => userRepository = new UserRepository(data[0], data[1], data[2], data[3]))
  .then(response => loadPage())
  .catch(err => console.log(err))
}

function loadPage() {
  userRepository.start();
  launchApp();
}

function launchApp() {
  getRandomUser();
  user.findFriendsNames(userRepository.users);
  updateAllDisplays();
}

function getRandomUser() {
  let randomIndex = Math.floor(Math.random() * 50);
  user = userRepository.users[randomIndex];
}

function flipCard(cardToHide, cardToShow) {
  cardToHide.classList.add('hide');
  cardToShow.classList.remove('hide');
}

function showDropdown() {
  userInfoDropdown.classList.toggle('hide');
}

function showInfo() {
  displaySleepInfo();
  displayActivityInfo();
  displayHydrationInfo();
}

function displaySleepInfo() {
  if (event.target.classList.contains('sleep-info-button')) {
    flipCard(sleepMainCard, sleepInfoCard);
  }
  if (event.target.classList.contains('sleep-friends-button')) {
    flipCard(sleepMainCard, sleepFriendsCard);
  }
  if (event.target.classList.contains('sleep-calendar-button')) {
    flipCard(sleepMainCard, sleepCalendarCard);
  }
  if (event.target.classList.contains('sleep-go-back-button')) {
    flipCard(event.target.parentNode, sleepMainCard);
  }
}

function displayActivityInfo() {
  if (event.target.classList.contains('steps-info-button')) {
    flipCard(stepsMainCard, stepsInfoCard);
  }
  if (event.target.classList.contains('steps-friends-button')) {
    flipCard(stepsMainCard, stepsFriendsCard);
  }
  if (event.target.classList.contains('steps-trending-button')) {
    flipCard(stepsMainCard, stepsTrendingCard);
  }
  if (event.target.classList.contains('steps-calendar-button')) {
    flipCard(stepsMainCard, stepsCalendarCard);
  }
  if (event.target.classList.contains('stairs-info-button')) {
    flipCard(stairsMainCard, stairsInfoCard);
  }
  if (event.target.classList.contains('stairs-friends-button')) {
    flipCard(stairsMainCard, stairsFriendsCard);
  }
  if (event.target.classList.contains('stairs-trending-button')) {
    flipCard(stairsMainCard, stairsTrendingCard);
  }
  if (event.target.classList.contains('stairs-calendar-button')) {
    flipCard(stairsMainCard, stairsCalendarCard);
  }
  if (event.target.classList.contains('steps-go-back-button')) {
    flipCard(event.target.parentNode, stepsMainCard);
  }
  if (event.target.classList.contains('stairs-go-back-button')) {
    flipCard(event.target.parentNode, stairsMainCard);
  }
}

function displayHydrationInfo() {
  if (event.target.classList.contains('hydration-info-button')) {
    flipCard(hydrationMainCard, hydrationInfoCard);
  }
  if (event.target.classList.contains('hydration-friends-button')) {
    flipCard(hydrationMainCard, hydrationFriendsCard);
  }
  if (event.target.classList.contains('hydration-calendar-button')) {
    flipCard(hydrationMainCard, hydrationCalendarCard);
  }
  if (event.target.classList.contains('hydration-go-back-button')) {
    flipCard(event.target.parentNode, hydrationMainCard);
  }
}

function updateAllDisplays() {
  updateUserDisplay();
  updateUserSleepDisplay();
  updateUserStepDisplay();
  updateUserStairDisplay();
  updateUserHydrationDisplay();
}

function updateUserDisplay() {
  dropdownGoal.innerText = `DAILY STEP GOAL | ${user.dailyStepGoal}`;
  dropdownEmail.innerText = `EMAIL | ${user.email}`;
  dropdownName.innerText = user.name.toUpperCase();
  headerName.innerText = `${user.getFirstName()}'S `;
}

function updateUserSleepDisplay() {
  let longestSleeper = userRepository.getLongestSleeper(todayDate);
  let worstSleeper = userRepository.getWorstSleeper(todayDate);
  sleepInfoHoursAverageAlltime.innerText = user.sleepRepository.hoursSleptAverage;
  sleepFriendLongestSleeper.innerText = longestSleeper.getFirstName();
  sleepFriendWorstSleeper.innerText = worstSleeper.getFirstName();
  sleepInfoQualityAverageAlltime.innerText = user.sleepRepository.sleepQualityAverage;
  sleepCalendarHoursAverageWeekly.innerText = user.sleepRepository.averageWeeklySleepHours(todayDate);
  sleepCalendarQualityAverageWeekly.innerText = user.sleepRepository.averageWeeklySleepQuality(todayDate);
  sleepUserHoursToday.innerText = user.sleepRepository.sleepHistory.find(sleep => {
    return sleep.date === todayDate;
  }).hoursSlept;
  sleepInfoQualityToday.innerText = user.sleepRepository.sleepHistory.find(sleep => {
    return sleep.date === todayDate;
  }).sleepQuality;
}

function updateUserStepDisplay() {
  updateUserStepInfoCard();
  updateUserStepFriendsCard();
  updateTrendingStepDays();

  stepsCalendarTotalActiveMinutesWeekly.innerText = user.activityRepository.averageWeeklyMinutesActive(todayDate);
  stepsCalendarTotalStepsWeekly.innerText = user.activityRepository.calculateAverageStepsThisWeek(todayDate);
  stepsInfoActiveMinutesToday.innerText = user.activityRepository.activityHistory.find(activity => {
    return activity.date === todayDate;
  }).minutesActive;
}

function updateUserStepInfoCard() {
  stepsUserStepsToday.innerText = user.activityRepository.activityHistory.find(activity => {
    return activity.date === todayDate;
  }).steps;
  stepsInfoMilesWalkedToday.innerText = user.activityRepository.activityHistory.find(activity => {
    return activity.date === todayDate;
  }).steps / 2000;
}

function updateUserStepFriendsCard() {
  stepsFriendActiveMinutesAverageToday.innerText = userRepository.calculateAverageMinutesActive(todayDate);
  stepsFriendStepsAverageToday.innerText = userRepository.calculateAverageSteps(todayDate);
  stepsFriendAverageStepGoal.innerText = userRepository.calculateAverageStepGoal();
}

function updateUserStairDisplay() {
  updateTrendingStairsDays();
  stairsCalendarFlightsAverageWeekly.innerText = user.activityRepository.calculateAverageStairsThisWeek(todayDate);
  stairsUserStairsToday.innerText = user.activityRepository.activityHistory.find(activity => {
    return activity.date === todayDate;
  }).flightsOfStairs * 12;
  stairsInfoFlightsToday.innerText = user.activityRepository.activityHistory.find(activity => {
    return activity.date === todayDate;
  }).flightsOfStairs;
  stairsCalendarStairsAverageWeekly.innerText = (userRepository.calculateAverageStairs(todayDate) * 12).toFixed(0);
  stairsFriendFlightsAverageToday.innerText = userRepository.calculateAverageStairs(todayDate).toFixed(0);
}

function updateUserHydrationDisplay() {
  let sortedHydrationDataByDate = user.hydrationRepository.findWeeklyOunces(todayDate);
  hydrationInfoGlassesToday.innerText = user.hydrationRepository.hydrationHistory.find(hydration => {
    return hydration.date === todayDate;
  }).ounces / 8;
  hydrationUserOuncesToday.innerText = user.hydrationRepository.hydrationHistory.find(hydration => {
    return hydration.date === todayDate;
  }).ounces;
  hydrationFriendOuncesToday.innerText = userRepository.calculateAllOunces(todayDate);
}

function updateUserFriendsDisplay() {
  stepsFriendActiveMinutesAverageToday.innerText = userRepository.calculateAverageMinutesActive(todayDate);
  stepsFriendStepsAverageToday.innerText = userRepository.calculateAverageSteps(todayDate);
  hydrationFriendOuncesToday.innerText = userRepository.calculateAverageDailyWater(todayDate);
  friendsStepsParagraphs.forEach(paragraph => {
    if (friendsStepsParagraphs[0] === paragraph) {
      paragraph.classList.add('green-text');
    }
    if (friendsStepsParagraphs[friendsStepsParagraphs.length - 1] === paragraph) {
      paragraph.classList.add('red-text');
    }
    if (paragraph.innerText.includes('YOU')) {
      paragraph.classList.add('yellow-text');
    }
  });
}

function updateTrendingStairsDays() {
  user.activityRepository.findTrendingStairsDays();
  trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.activityRepository.trendingStairsDays[0]}</p>`;
}

function updateTrendingStepDays() {
  user.activityRepository.findTrendingStepDays();
  trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.activityRepository.trendingStepDays[0]}</p>`;
}

// for (var i = 0; i < dailyOz.length; i++) {
//   dailyOz[i].innerText = user.hydrationRepository.addDailyOunces(Object.keys(sortedHydrationDataByDate[i])[0])
// }
// for (var i = 0; i < dailyOz.length; i++) {
//   dailyOz[i].innerText = user.hydrationRepository.addDailyOunces(Object.keys(sortedHydrationDataByDate[i])[0])
// }

//
// stepsInfoMilesWalkedToday.innerText = user.activityRepository.activityHistory.find(activity => {
//   return (activity.date === todayDate && activity.userId === user.id)
// }).calculateMiles(userRepository);



  //


  // sleepInfoQualityToday.innerText = sleepData.find(sleep => {
  //   return sleep.userID === user.id && sleep.date === todayDate;
  // }).sleepQuality;
  //
  // sleepUserHoursToday.innerText = sleepData.find(sleep => {
  //   return sleep.userID === user.id && sleep.date === todayDate;
  // }).hoursSlept;

  // stairsCalendarFlightsAverageWeekly.innerText = user.activityRepository.calculateAverageFlightsThisWeek(todayDate);
  //
  // stairsCalendarStairsAverageWeekly.innerText = (user.calculateAverageFlightsThisWeek(todayDate) * 12).toFixed(0);
  //
  // stairsFriendFlightsAverageToday.innerText = (userRepository.calculateAverageStairs(todayDate) / 12).toFixed(1);

  // stairsInfoFlightsToday.innerText = activityData.find(activity => {
  //   return activity.userID === user.id && activity.date === todayDate;
  // }).flightsOfStairs;
  //


  //
  //
  //


  // userRepository.findFriendsTotalStepsForWeek(userRepository.users, todayDate);

  // user.friendsActivityRecords.forEach(friend => {
  //   dropdownFriendsStepsContainer.innerHTML += `
  //   <p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>
  //   `;
  // });
