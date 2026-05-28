let weather = {
    apiKey:"",
    fetchWeather: function (city){
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
        ).then((response) =>{
            if(!reponse.ok){
                alert("No Weather Found");
                throw new Error("Nooo ");
            }
            return response.json();
        }).then((data)=> this.displayWeather(data));
    }
},  

displayWeather: function (data){
    const {name} = data;
    const {icon , description}= data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
}