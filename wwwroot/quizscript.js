<<<<<<< HEAD
var i=0;
var count1=0;
var lists=[];
var correct =1;
var incorrect=0;
function getting(index)
{
    document.getElementById("master2").setAttribute("hidden","");
    document.getElementById("master").removeAttribute("hidden");
    document.getElementById("opt1").checked= false;
    document.getElementById("opt2").checked= false;
    document.getElementById("opt3").checked= false;
    document.getElementById("opt4").checked= false;
    document.getElementById("number").innerHTML=i+1 +". ";
    document.getElementById("questions").innerHTML=jsonData[index].question;
    document.getElementById("opt01").innerHTML=jsonData[index].opt1;
    document.getElementById("opt02").innerHTML=jsonData[index].opt2;
    document.getElementById("opt03").innerHTML=jsonData[index].opt3;
    document.getElementById("opt04").innerHTML=jsonData[index].opt4;
}


function checkAnswer()
{  
    if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer)
    {       
        lists.push(correct);
    }
    else if(document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer)
    {
        lists.push(correct);     
    }
    else if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer)
    {
        lists.push(correct);
    }
    else if(document.getElementById("opt4").checked && jsonData[i].opt4 == jsonData[i].answer)
    {
        lists.push(correct);
    }
    else
    {
        lists.push(incorrect);
    }
    i=i+1;
    if(jsonData.length == i)
    {      
        ending();
    }
    getting(i);
       
}
function PreviousAnswer()
{  
    i=i-1;
    lists.pop();
    getting(i);    
}
function ending()
{
    for(let j=0;j<=lists.length;j++)
    {
        if(lists[j]==1)
        {
            count1=count1+1;
        }
    }
    document.getElementById("questionform").style.textAlign ="center";
    document.getElementById("questionform").style.fontSize ="100px";
    document.getElementById("questionform").innerHTML= " your score is  "+count1+ " out of 10";  
=======
var i=0;
var count1=0;
function getting(index)
{
    document.getElementById("opt1").checked= false;
    document.getElementById("opt2").checked= false;
    document.getElementById("opt3").checked= false;
    document.getElementById("opt4").checked= false;
    document.getElementById("number").innerHTML=i+1 +". ";
    document.getElementById("questions").innerHTML=jsonData[index].question;
    document.getElementById("opt01").innerHTML=jsonData[index].opt1;
    document.getElementById("opt02").innerHTML=jsonData[index].opt2;
    document.getElementById("opt03").innerHTML=jsonData[index].opt3;
    document.getElementById("opt04").innerHTML=jsonData[index].opt4;
}


function checkAnswer()
{  
    if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer)
    {
        count1=count1+1;
    }
    if(document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer)
    {
        count1=count1+1;     
    }
    if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer)
    {
        count1=count1+1;
    }
    if(document.getElementById("opt4").checked && jsonData[i].opt4 == jsonData[i].answer)
    {
        count1=count1+1;
    }
    i=i+1;
    if(jsonData.length == i)
    {      
        ending();
    }
    getting(i);
       
}
function PreviousAnswer()
{  
    i=i-1;
    getting(i);    
}
function ending()
{
    document.getElementById("questionform").style.textAlign ="center";
    document.getElementById("questionform").style.fontSize ="100px";
    document.getElementById("questionform").innerHTML= " your score is  "+count1+ " out of 10";  
>>>>>>> 1ec1501f506c80d4edb48f988949b2d22718c073
}