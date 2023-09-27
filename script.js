document.addEventListener("DOMContentLoaded", () => {
    
    
    
    document.getElementById("enviar").addEventListener("click", function(){
    
    const apiKey = '95edd31b7a3c9ae361c7492ce4b015d2';
    const city = document.getElementById("buscador").value;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            const ciudad = data.name;
            const clima = data.weather[0].description;
            const temp = data.main.temp;
            const viento = data.wind.speed
            const humedad = data.main.humidity
            
            const info = `
                <p>Ciudad: ${ciudad}</p>
                <p>Clima: ${clima}</p>
                <p>Temperatura: ${temp}°C</p>
                <p>Viento: ${viento} m/s</p>
                <p>Humedad: ${humedad} %</p>
                
            `;

            document.getElementById("cont").innerHTML = info;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });})
});
