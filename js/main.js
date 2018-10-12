function flyInToPlanet(event){
    //按鈕座標
    buttonX = getPosition(event.target).x
    buttonY = getPosition(event.target).y
    
    //動畫主角
    let flyingDream = document.createElement("DIV")
    flyingDream.classList.add('adding-dream')
    flyingDream.setAttribute("style","position:absolute;left:"+buttonX+"px;top:"+buttonY+"px;background:"+getComputedStyle(event.target).backgroundImage+"no-repeat scroll 50% 50% / contain padding-box border-box")
    document.body.appendChild(flyingDream)

    //飛行終點
    setTimeout(function(){
        flyingDream.style.transform="scale(2)"
        flyingDream.style.left = "calc(50vw - 50px)"
        flyingDream.style.top = "265px"
        flyingDream.style.zIndex = 500
    },1)
    
    
    flyingDream.addEventListener('transitionend',function(){
        flyingDream.style.transform="scale(0)"
        setTimeout(function(){flyingDream.remove()},1100)
    })
}
function initDreams(){
    let numberOfDreams = document.getElementById('button-part').children.length
    for(dream=0;dream<numberOfDreams;dream++){
        let dreamElement = document.getElementById('button-part').children[dream]
        let handler = function(event){
            switch(event.target.id){
                case "house":
                    if(document.getElementsByClassName('house-planet').length==5){
                        drDreamTalk("房子")
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('house-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"北市一間 20 坪房平均約 1000 萬"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = housePlace.pop()
                        dreamShowUp("house").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("house")
                        let house = document.getElementsByName("house")[0].value
                        document.getElementsByName("house")[0].value = (parseInt(house) + 10000000) 
                    }
                    break;
                case "car":
                    if(document.getElementsByClassName('car-planet').length==8){
                        drDreamTalk("車子")
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('car-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"基本的車款約 50 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        dreamShowUp("car")
                        addtoList("car")
                        let car = document.getElementsByName("car")[0].value
                        document.getElementsByName("car")[0].value = (parseInt(car) + 500000)
                    }
                    break;
                case "wedding":
                    if(document.getElementsByClassName('wedding-planet').length==1){
                        drDreamTalk("婚禮")
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('wedding-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"一生一次一場難忘的婚禮大約花費 50 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = weddingPlace.pop()
                        dreamShowUp("wedding").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("wedding")
                        let wedding = document.getElementsByName("wedding")[0].value
                        document.getElementsByName("wedding")[0].value = (parseInt(wedding) + 500000)
                    }
                    break;
                case "kid":
                    if(document.getElementsByClassName('kid-planet').length==10){
                        drDreamTalk("孩子")
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('kid-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"一個小孩從出生到大學畢業平均花費 400 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = kidPlace.pop()
                        dreamShowUp("kid").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("kid")
                        let kid = document.getElementsByName("kid")[0].value
                        document.getElementsByName("kid")[0].value = (parseInt(kid) + 4000000)
                    }
                    break;
                case "parent":
                    if(document.getElementsByClassName('parent-planet').length==1){
                        drDreamTalk("父母")
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('parent-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"預設的奉養費：一個月 5000 * 12 個月 * 40 年 = 24 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = parentPlace.pop()
                        dreamShowUp("parent").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("parent")
                        let parent = document.getElementsByName("parent")[0].value
                        document.getElementsByName("parent")[0].value = (parseInt(parent) + 240000)
                    }
                    break;
                case "plane":
                    if(document.getElementsByClassName('plane-planet').length==1){
                        drDreamTalk("旅遊")
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('plane-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"預設的旅遊費：一個出遊 3 次 * 一次 2500元 * 60 年 = 45 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        dreamShowUp("plane")
                        addtoList("plane")
                        let plane = document.getElementsByName("plane")[0].value
                        document.getElementsByName("plane")[0].value = (parseInt(plane) + 450000)
                    }
                    break;
                case "retire":
                    if(document.getElementsByClassName('retire-planet').length==1){
                        drDreamTalk("退休")
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('retire-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"預設理想的退休費：退休後每月生活費 20000 * 12 個月 * 20 年 = 480 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = retirePlace.pop()
                        dreamShowUp("retire").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("retire")
                        let retire = document.getElementsByName("retire")[0].value
                        document.getElementsByName("retire")[0].value = (parseInt(retire) + 4800000)
                    }
                    break;
                case "company":
                    if(document.getElementsByClassName('company-planet').length==3){
                        drDreamTalk("創業")
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('company-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"預設創業準備金： 100 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = companyPlace.pop()
                        dreamShowUp("company").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("company")
                        let company = document.getElementsByName("company")[0].value
                        document.getElementsByName("company")[0].value = (parseInt(company) + 1000000)
                    }
                    break;
            }
        }
        dreamElement.addEventListener("mousedown",handler)
    } 
}
function dreamShowUp(dream){
    let amount = document.getElementsByClassName(dream+"-planet").length
    let newDream = createElement("DIV",{atrs:{
        id:dream+amount,
        className:"planet-things "+dream+"-planet"
    }},document.getElementsByClassName("planet")[0])
    setTimeout(function(){
        newDream.style.display="block"
    },2100)
    return newDream
}

function addtoList(dream){
    let amount = document.getElementsByClassName(dream+'-ball').length
    let dreamBall = createElement("DIV",{atrs:{
        id:'list'+dream+amount,
        className:"dream-ball "+dream+"-ball",
    }},document.getElementsByClassName("list-"+dream+"-balls")[0])
 
    setTimeout(function(){dreamBall.style.right="calc(0px + "+(amount*32)+"px)"},10)
    
    /*remove 之後做
    let handler = function(event){
        dreamBall.remove()
        let dreamId = dreamBall.id.split('list')[1]
        console.log(dreamId)
        document.getElementById(dreamId).remove()
    }
    dreamBall.addEventListener('click',handler)*/
}

function pressurePage(){
    let salary = parseInt(document.getElementsByName("salary")[0].value)
    let age = parseInt(document.getElementsByName("age")[0].value)
    let retireAge = parseInt(document.getElementsByName("retire-age")[0].value)
    let fortune = parseInt(document.getElementsByName("fortune")[0].value)
    let dieAge = parseInt(document.getElementsByName("die-age")[0].value)
    let house = parseInt(document.getElementsByName("house")[0].value)
    let car = parseInt(document.getElementsByName("car")[0].value)
    let wedding = parseInt(document.getElementsByName("wedding")[0].value)
    let kid = parseInt(document.getElementsByName("kid")[0].value)
    let parent = parseInt(document.getElementsByName("parent")[0].value)
    let plane = parseInt(document.getElementsByName("plane")[0].value)
    let retire = parseInt(document.getElementsByName("retire")[0].value)
    let company = parseInt(document.getElementsByName("company")[0].value)
    
    document.getElementsByClassName('list')[0].style.display="none"
    document.getElementsByClassName('salary-part')[0].style.display="none"
    document.getElementById("button-part").style.display="none"
    document.getElementsByClassName("planet-part")[0].style.display="none"

    let jackyPart = document.getElementsByClassName("doctor-jacky-part")[0]
    jackyPart.style.left="710px"
    jackyPart.style.height = "500px"
    jackyPart.style.width = "250px"
    jackyPart.style.top = "-230px"
    document.getElementsByClassName("jacky-button")[2].remove()
    document.getElementsByClassName("jacky-button")[1].remove()
    document.getElementsByClassName("jacky-button")[0].remove()

    var pieLabels= ['過了的人生','有收入的人生','沒收入的人生'];
    document.getElementsByClassName('pie-part')[0].style.display = "block"
    let piePart = document.getElementById('pie').getContext('2d')
    let pieChart = new Chart(piePart,{
        type: 'pie',
            data : {
                labels:pieLabels,
                datasets: [{
                    data:[age,retireAge - age,dieAge - retireAge],
                    backgroundColor: [
                        "rgb(119,136,153,0.5)",
                        "rgb(255,215,0,0.5)",
                        "rgb(127,255,212,0.5)"
                    ],
                    borderColor:"transparent",
                }],
            },
            options: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: 'white'
                    }
                }
            }
    })

    var barLabels= ['夢想總值','現有資產','額外支出','風險處理完的額外支出'];
    document.getElementsByClassName('bar-part')[0].style.display = "block"
    let barPart = document.getElementById('bar').getContext('2d')
    let barChart = new Chart(barPart,{
        type: 'bar',
            data : {
                labels:barLabels,
                datasets: [{
                    label: "金錢表",
                    data:[house+car+wedding+kid+parent+plane+retire+company,fortune,fortune,fortune],
                    backgroundColor: [
                        "rgb(119,136,153,0.5)",
                        "rgb(255,255,255,0.5)",
                        "rgb(127,255,212,0.5)",
                        "rgb(0,255,212,0.5)"
                    ],
                    borderColor: "transparent",
                }],
            },
            options: {
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                },
                scales:{
                    yAxes:[{
                        ticks:{
                            fontColor:"rgb(255,215,0)",
                            fontSize: 12
                        }
                    }],
                    xAxes:[{
                        ticks:{
                            fontColor:"rgb(255,215,0)",
                            fontSize: 12
                        }
                    }]
                }
            }
    })

    for(listTitle = document.getElementsByClassName("list-title").length-1;listTitle>=0;listTitle--){
        document.getElementsByClassName("list-title")[listTitle].remove()
    }
    for(dreamTotal = document.getElementsByClassName("dream-total").length-1;dreamTotal>=0;dreamTotal--){
        document.getElementsByClassName("dream-total")[dreamTotal].remove()
    }
    document.getElementById("notice").remove()

    let agePart = createElement("DIV",{atrs:{
        className:"age-part"
    }},document.getElementsByTagName("main")[0])
    agePart.style.display = "block"
    for(balls = document.getElementsByClassName("list-balls").length-1;balls>=0;balls--){
        document.getElementsByClassName("list-balls")[balls].classList.add("new-list-balls")
    }

    let nthBall = 0
    for(let lifeExpectancy = dieAge - age;lifeExpectancy>0;lifeExpectancy = lifeExpectancy-10){
        setTimeout(function(){
            let ageBall = createElement("DIV",{atrs:{
                className:"age-ball",
                left:"0px",
                top:"0px",
                innerHTML:parseInt(lifeExpectancy) + parseInt(age)
            }},agePart)

            let ballOrder = 1
            for(ballOrder;ballOrder<=agePart.children.length;ballOrder++){
                if(ballOrder%2==1){
                    agePart.children[agePart.children.length - ballOrder].style.left = "0px"
                    agePart.children[agePart.children.length - ballOrder].style.top = ballOrder*150+"px"
                    agePart.children[agePart.children.length - ballOrder].style.transform = "rotate(-360deg)"                 
                }else{
                    agePart.children[agePart.children.length - ballOrder].style.left = "140px"
                    agePart.children[agePart.children.length - ballOrder].style.top = ballOrder*150+"px"
                    agePart.children[agePart.children.length - ballOrder].style.transform = "rotate(360deg)"                 
                }
                console.log(ballOrder)
            }
            
        },300*(nthBall))
        nthBall++
    }
    let robot = createElement("DIV",{atrs:{
        className:"robot"
    }},document.getElementsByTagName("main")[0])

    let changeIntroduction = createElement("DIV",{atrs:{
        className:"doctor-says",
        innerHTML:"左上角的機器人會為您的星球進行壓力測試，他有著與您相同的收入，及相同的夢想總值。我們將藉由他來給予您關於您夢想星球的建議。"
    }},jackyPart)

    let nextbutton = createElement("BUTTON",{atrs:{
        className:"next-stage",
        innerHTML:"開始測驗"
    }},jackyPart)

    
    nextbutton.addEventListener('click',function(){
        if(robotPosition == document.getElementsByClassName("age-ball").length){

        }else{
            updateChart("bar")
            updateChart("pie")
            this.innerHTML = "下一階段"
            let ballCount = document.getElementsByClassName("age-ball").length - 1
            let nextRobotPosition = getPosition(document.getElementsByClassName("age-ball")[ballCount - robotPosition])
            robot.style.left = parseInt(nextRobotPosition.x) - 10 +"px"
            robot.style.top = parseInt(nextRobotPosition.y) - 20 +"px"
            robotPosition++;
        }
    })
}

function drDreamTalk(type){
    let fullState = createElement("DIV",{atrs:{
        style:"height:100px",
        className:"doctor-say",
        innerHTML:type+"數量已達夢想星球的上限了喔"
    }},document.getElementsByClassName("doctor-jacky-part")[0])
    setTimeout(function(){
        fullState.remove()
    },3000)
}
function updateChart(type){
    switch(type){
        case "pie":
            break;
        case "bar":
            break;
    }
}
