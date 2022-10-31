const { response } = require("express");
const express = require("express");
const app = express();
const https = require("https");

app.get("/",function(req,res){
const url = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=75ce89184100fe8aca406193679279fe";
https.get(url ,function(response){
    console.log(response);
})
response.on("data", function(data){
const weatherData = JSON.parse(data)
console.log(weatherData);
 })
})


app.listen(7000, function(){console.log("server is up on port 7000")});