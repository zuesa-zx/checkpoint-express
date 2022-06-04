var express = require('express');
var router = express.Router();


    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const TodayHour = today.getHours();
    const TodayDay = today.getDay();
  // define the home page route
  router.get('/Home', function(req, res) {
    if((TodayHour >= 9 && TodayHour <= 17) && (TodayDay == 1 || TodayDay == 5 )){
        res.send('Home page');
      }else{
        res.send('We Are Closed, We are only available during working hours (Monday to Friday,  from 9 to 17)');
      }
  }); 
  // define the about route
  router.get('/Contact', function(req, res) {
    if((TodayHour >= 9 && TodayHour <= 17) && (TodayDay == 1 || TodayDay == 5 )){
        res.send('Contact page'); 
      }else{ 
        res.send('We Are Closed, We are only available during working hours (Monday to Friday,  from 9 to 17)');
      }
  });

   // define the about route
   router.get('/Services', function(req, res) {
    if((TodayHour >= 9 && TodayHour <= 17) && (TodayDay == 1 || TodayDay == 5 )){
        res.send('Services page'); 
      }else{
        res.send('We Are Closed, We are only available during working hours (Monday to Friday,  from 9 to 17)');
      }
  });

module.exports = router;