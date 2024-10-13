function weather(){
    let div=document.createElement("div");
    let h1=document.createElement("h1");
    h1.className="current";
    h1.innerText="Current Weather";
    let h2=document.createElement("p");
    h2.className="temp";
    h2.innerText="Temperature:"
    let p=document.createElement("p");
    p.className="speed"
    p.innerText="Wind Speed:"
    let p1=document.createElement("p");
    p1.className="code"
    p1.innerText="Weather Code:"
    let p2=document.createElement("p");
    p2.className="time";
    p2.innerText="Observation Time:"
    url="https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true";
fetch(url).then(resolve=>resolve.json())
          .then(result=>{
            h2.innerText+=result["current_weather"]["temperature"]+result["current_weather_units"]["temperature"];
            p.innerText+=result["current_weather"]["windspeed"]+" "+result["current_weather_units"]["windspeed"];
            p1.innerText+=result["current_weather"]["weathercode"];
            p2.innerText+=new Date(result["current_weather"]["time"]).toLocaleString();
          })
    document.body.appendChild(div);
    div.append(h1,h2,p,p1,p2);
}
weather();