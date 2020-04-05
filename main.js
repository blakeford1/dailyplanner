$(document).ready(function (){
    console.log(moment().hour())

    var times = ["0" + 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700]
    
    for (let index = 0; index < times.length; index++) {
        var currentTime = moment().hour()
        var currentTimeMilitary = currentTime + "00"
        console.log("looping?",currentTime + '00', times[index])
        
        var timecontainer = $("<div>").text(times[index])

        if(currentTimeMilitary > times[index]) {
            console.log('past')
            timecontainer.addClass('past')
        } else if (currentTimeMilitary < times[index]) {
            console.log('future')
            timecontainer.addClass('future')
        } else if (currentTimeMilitary == times[index]) {
            console.log('current')
            timecontainer.addClass('current')
        }
       
        var textArea = $("<textarea>").attr("id", "input-"+ times[index])

        var saveBtn = $("<button>").text("save").attr("name", times[index])

        timecontainer.append(textArea, saveBtn)

        $(".times").append(timecontainer)
    }

    $("button").on("click", function (){
        console.log("you got clicked", $(this).attr("name"))
        var timeId =  $(this).attr("name")
        console.log($("#input-" + timeId).val())
       
        console.log(localStorage.getItem('planner'))
        var pastData = JSON.parse(localStorage.getItem('planner'))

        if(pastData) {
            var newEntry = {id:timeId, text:$("#input-" + timeId).val()} 
            pastData.push(newEntry)
        // plannerData.push(newEntry)
        var strData = JSON.stringify(pastData)
        localStorage.setItem("planner", strData)
        }  else {
            var plannerData = []
            var newEntry = {id:timeId, text:$("#input-" + timeId).val()} 
            plannerData.push(newEntry)
            var strData = JSON.stringify(plannerData)
            localStorage.setItem("planner", strData)
        }
    })
    
    function displayPastPlanner () {
        var pastData = JSON.parse(localStorage.getItem('planner'))
        for (let index = 0; index < pastData.length; index++) {
            console.log(pastData[index].text)
            $('#input-'+ pastData[index].id).val(pastData[index].text)
        }
    }
    displayPastPlanner()













})