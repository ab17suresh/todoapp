
function submit1()
{
    const input1 =document.getElementById("input1").value;
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+input1+'&appid=86793c0cec4fd5ff7dfdca2464bee84c';
    
    console.log(input1);
    fetch(url)
        .then(Response => Response.json())
        //.then(data => console.log(data))
        .then(data => {
            var cityname = data.name;
            var tempvalue = data.main.temp;
            var climate = data.weather[0].main;
            var iconcode = data.weather[0].icon;
            const today = new Date();
            const tomorrow = new Date(today);
            
            var url1 = 'https://api.openweathermap.org/data/2.5/forecast?q='+cityname+'&appid=86793c0cec4fd5ff7dfdca2464bee84c';
            fetch(url1)
                .then(Response => Response.json())
                //.then(data1 => console.log(data1.list[9]))
                .then(data1 => {
                    var tomorrowtempvalue = data1.list[9].main.temp;
                    var tomorrowclimate = data1.list[9].weather[0].main;
                    var tommorrowiconcode = data1.list[9].weather[0].icon;
                    document.getElementById("outputdate2").innerHTML =today.getDate()+1+"-"+today.getMonth()+"-"+today.getFullYear();
                    document.getElementById("outputr2").innerHTML = Math.round(tomorrowtempvalue-273.15) + " &#8451;";
                    document.getElementById("outputr3").innerHTML = tomorrowclimate;
                    var iconurl1 = "http://openweathermap.org/img/wn/" + tommorrowiconcode + "@2x.png";
                    document.getElementById("outputr4").innerHTML="<img src='"+iconurl1+"' id ='img1'/>";
                    })
            document.getElementById("outputdate1").innerHTML = today.getDate()+"-"+today.getMonth()+"-"+today.getFullYear();
            document.getElementById("output1").innerHTML = cityname;
            document.getElementById("output2").innerHTML = Math.round(tempvalue-273.15) + " &#8451;";
            document.getElementById("output3").innerHTML = climate;
            
            var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
            document.getElementById("output4").innerHTML="<img src='"+iconurl+"' id ='img1'/>";
            document.getElementById("input1").value = " ";
        
    })


    


}
