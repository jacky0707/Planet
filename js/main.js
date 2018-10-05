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
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
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
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
                        flyInToPlanet(event)
                        dreamShowUp("car")
                        addtoList("car")
                        let car = document.getElementsByName("car")[0].value
                        document.getElementsByName("car")[0].value = (parseInt(car) + 500000)
                    }
                    break;
                case "wedding":
                    if(document.getElementsByClassName('wedding-planet').length==1){
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
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
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
                        flyInToPlanet(event)
                        let chosenPlace = kidPlace.pop()
                        dreamShowUp("kid").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("kid")
                        let kid = document.getElementsByName("kid")[0].value
                        document.getElementsByName("kid")[0].value = (parseInt(kid) + 2500000)
                    }
                    break;
                case "parent":
                    if(document.getElementsByClassName('parent-planet').length==1){
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
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
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
                        flyInToPlanet(event)
                        dreamShowUp("plane")
                        addtoList("plane")
                        let plane = document.getElementsByName("plane")[0].value
                        document.getElementsByName("plane")[0].value = (parseInt(plane) + 600000)
                    }
                    break;
                case "retire":
                    if(document.getElementsByClassName('retire-planet').length==1){
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
                        flyInToPlanet(event)
                        let chosenPlace = retirePlace.pop()
                        dreamShowUp("retire").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("retire")
                        let retire = document.getElementsByName("retire")[0].value
                        document.getElementsByName("retire")[0].value = (parseInt(retire) + 3600000)
                    }
                    break;
                case "company":
                    if(document.getElementsByClassName('company-planet').length==3){
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
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
    }},document.getElementsByTagName("main")[0])
    setTimeout(function(){
        newDream.style.display="block"
    },2100)
    return newDream
}
function drDreamTalk(type){

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
    let salary = document.getElementsByName("salary")[0].value
    let age = document.getElementsByName("age")[0].value
    let retireAge = document.getElementsByName("retire-age")[0].value
    let house = document.getElementsByName("house")[0].value
    let car = document.getElementsByName("car")[0].value
    let wedding = document.getElementsByName("wedding")[0].value
    let kid = document.getElementsByName("kid")[0].value
    let parent = document.getElementsByName("parent")[0].value
    let plane = document.getElementsByName("plane")[0].value
    let retire = document.getElementsByName("retire")[0].value
    let company = document.getElementsByName("company")[0].value

}