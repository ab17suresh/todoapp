
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
            document.getElementById("output1").innerHTML = cityname;
            document.getElementById("output2").innerHTML = tempvalue;
            document.getElementById("input1").value = " ";
        })
    


}
