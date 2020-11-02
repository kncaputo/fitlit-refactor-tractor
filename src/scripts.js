import './css/_base.scss';
import './css/styles.scss';
// import apiCalls from './apiCalls.js';
// import '/hydration-calendar.png', '/hydration-friends.png', '/hydration-goback.png' from './images'
import {dailyOz, dropdownEmail, dropdownFriendsStepsContainer, dropdownGoal, dropdownName, headerName, hydrationCalendarCard, hydrationFriendOuncesToday, hydrationFriendsCard, hydrationInfoCard, hydrationInfoGlassesToday, hydrationMainCard, hydrationUserOuncesToday, mainPage, profileButton, sleepCalendarCard, sleepCalendarHoursAverageWeekly, sleepCalendarQualityAverageWeekly, sleepFriendLongestSleeper, sleepFriendsCard, sleepFriendWorstSleeper, sleepInfoCard, sleepInfoHoursAverageAlltime, sleepInfoQualityAverageAlltime, sleepInfoQualityToday, sleepMainCard, sleepUserHoursToday, stairsCalendarCard, stairsCalendarFlightsAverageWeekly, stairsCalendarStairsAverageWeekly, stepsMainCard, stepsInfoCard, stepsFriendsCard, stepsTrendingCard, stepsCalendarCard, stairsFriendFlightsAverageToday, stairsFriendsCard, stairsInfoCard, stairsInfoFlightsToday, stairsMainCard, stairsTrendingButton, stairsTrendingCard, stairsUserStairsToday, stepsCalendarTotalActiveMinutesWeekly, stepsCalendarTotalStepsWeekly, stepsFriendAverageStepGoal, stepsInfoActiveMinutesToday, stepsInfoMilesWalkedToday, stepsFriendActiveMinutesAverageToday, stepsFriendStepsAverageToday, stepsTrendingButton, stepsUserStepsToday, trendingStepsPhraseContainer, trendingStairsPhraseContainer, userInfoDropdown, friendsStepsParagraphs, addActivityButton, addHydrationButton, addSleepButton, submitActivityButton, submitSleepButton, submitHydrationButton, activityStepsInput, activityMinutesInput, flightStairsInput, milesWalkedInput, ouncesDrankInput, hoursSleptInput, sleepQualityInput, calendarInput, activityForm, sleepForm, hydrationForm, dropdownCalories, inputDate} from './DOMelements.js'

import UserRepository from './model/UserRepository';
import Service from './service/Service';
import UserService from './service/UserService';
import SleepService from './service/SleepService';
import ActivityService from './service/ActivityService';
import HydrationService from './service/HydrationService';

let userRepository;
let user;
let todayDate = "2019/06/15";
let userDateInput;
let service = new Service();
let userService;
let sleepService;
let activityService;
let hydrationService;

window.onload = instantiateServices();

addActivityButton.addEventListener('click', showActivityForm);
addHydrationButton.addEventListener('click', showHydrationForm);
addSleepButton.addEventListener('click', showSleepData);
mainPage.addEventListener('click', showInfo);
profileButton.addEventListener('click', showDropdown);
stairsTrendingButton.addEventListener('click', updateTrendingStairsDays);
stepsTrendingButton.addEventListener('click', updateTrendingStepDays);
submitActivityButton.addEventListener('click', postActivityData);
submitHydrationButton.addEventListener('click', postHydrationData);
submitSleepButton.addEventListener('click',postSleepData);
calendarInput.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  console.log(todayDate)
  updateAllDisplays();
});
inputDate.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  userDateInput = formatDate.join('/');
});

function instantiateServices() {
  userService = new UserService('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData', 'userData');
  sleepService = new SleepService('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData', 'sleepData');
  activityService = new ActivityService('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData', 'activityData');
  hydrationService = new HydrationService('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData', 'hydrationData');
  fetchAllData();
}

function fetchAllData() {
  let userPromise = userService.fetchData();
  let sleepPromise = sleepService.fetchData();
  let activityPromise = activityService.fetchData();
  let hydrationPromise = hydrationService.fetchData();

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
  dropdownCalories.innerText = `DAILY CALORIES BURNED | ${user.activityRepository.calculateDailyCalories(todayDate)}`
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
  updateUserStairInfoCard();
  updateUserStairFriendsCard();
  updateTrendingStairsDays();
  stairsCalendarFlightsAverageWeekly.innerText = user.activityRepository.calculateAverageStairsThisWeek(todayDate);
}

function updateUserStairInfoCard() {
  stairsUserStairsToday.innerText = user.activityRepository.activityHistory.find(activity => {
    return activity.date === todayDate;
  }).flightsOfStairs * 12;
  stairsInfoFlightsToday.innerText = user.activityRepository.activityHistory.find(activity => {
    return activity.date === todayDate;
  }).flightsOfStairs;
}

function updateUserStairFriendsCard() {
  stairsCalendarStairsAverageWeekly.innerText = (userRepository.calculateAverageStairs(todayDate) * 12).toFixed(0);
  stairsFriendFlightsAverageToday.innerText = userRepository.calculateAverageStairs(todayDate).toFixed(0);
}

function updateUserHydrationDisplay() {
  updateWeeklyOuncesByDay();
  hydrationInfoGlassesToday.innerText = user.hydrationRepository.findOunces(todayDate) / 8;
  hydrationUserOuncesToday.innerText = user.hydrationRepository.findOunces(todayDate);
  hydrationFriendOuncesToday.innerText = userRepository.calculateAllOunces(todayDate);
}

function updateWeeklyOuncesByDay() {

  let hydrationDataByDate = user.hydrationRepository.findWeeklyOunces(todayDate);
  hydrationCalendarCard.innerHTML = `<button type='button' name='button' class='go-back-button hydration-go-back-button'></button>`

  let html;
  if (hydrationDataByDate.length < 7) {
    html = `<p class="weekly-ounces">Sorry, you only have ${hydrationDataByDate.length} day(s) of data. Here is the info we have for the selected time period.</p>
  <p class="weekly-ounces">${hydrationDataByDate.map(data => {return `${data.date} ${data.ounces}OZ`})}</p>`
} else {
  html = `<p class="weekly-ounces">Here is the info we have for the selected time period.</p>
<p class="weekly-ounces">${hydrationDataByDate.map(data => {return `${data.date} ${data.ounces}OZ`+ "<br />"})}</p>`
}

  hydrationCalendarCard.insertAdjacentHTML('afterbegin', html)
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

function showHomePage() {
  mainPage.classList.remove('hide');
  addActivityButton.classList.remove('hide');
  addHydrationButton.classList.remove('hide');
  addSleepButton.classList.remove('hide');
  calendarInput.classList.remove('hide');
  inputDate.classList.add('hide');
}

function hideHomePage() {
  mainPage.classList.add('hide');
  addActivityButton.classList.add('hide');
  addHydrationButton.classList.add('hide');
  addSleepButton.classList.add('hide');
  calendarInput.classList.add('hide');
  inputDate.classList.remove('hide');
}

function showActivityForm() {
  hideHomePage();
  activityForm.classList.remove('hide');
}

function showSleepData() {
  hideHomePage();
  sleepForm.classList.remove('hide');
}

function showHydrationForm() {
  hideHomePage();
  hydrationForm.classList.remove('hide');
}

function postActivityData() {
  let onSuccess = () => {
    showHomePage();
    activityForm.classList.add('hide');
  }
  let rawActivity = {userID: user.id, date: userDateInput, numSteps: activityStepsInput.value, minutesActive: activityMinutesInput.value, flightsOfStairs: flightStairsInput.value};
  user.activityRepository.createNewActivity(rawActivity);
  activityService.postData(rawActivity, onSuccess);
}

function postHydrationData() {
  let onSuccess = () => {
    showHomePage();
    hydrationForm.classList.add('hide');
  }
  let rawHydration = {userID: user.id, date: userDateInput, numOunces: ouncesDrankInput.value}
  user.hydrationRepository.createNewHydration(rawHydration);
  hydrationService.postData(rawHydration, onSuccess);
}

function postSleepData() {
  let onSuccess = () => {
    showHomePage();
    sleepForm.classList.add('hide');
  }
  let rawSleep = {userID: user.id, date: userDateInput, hoursSlept: hoursSleptInput.value, sleepQuality: sleepQualityInput.value}
  user.sleepRepository.createNewSleep(rawSleep);
  sleepService.postData(rawSleep, onSuccess);
}
