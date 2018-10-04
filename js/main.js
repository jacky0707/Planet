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
        flyingDream.style.top = "425px"
    },1)
    
    
    flyingDream.addEventListener('transitionend',function(){
        flyingDream.style.transform="scale(0)"
        setTimeout(function(){flyingDream.remove()},1100)
    })
}
function initDreams(){
    let numberOfDreams = document.getElementById('button-part').children.length
    for(dream=0;dream<numberOfDreams-1;dream++){
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
                    }
                    break;
                case "car":
                    if(document.getElementsByClassName('car-planet').length==10){
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
                        flyInToPlanet(event)
                        dreamShowUp("car")
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
                    }
                    break;
                case "kid":
                    if(document.getElementsByClassName('kid-planet').length==18){
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
                        flyInToPlanet(event)
                        let chosenPlace = kidPlace.pop()
                        dreamShowUp("kid").style.transform = "rotate("+chosenPlace+"deg)"
                    }
                    break;
                case "plane":
                    if(document.getElementsByClassName('plane-planet').length==1){
                        drDreamTalk("full")
                        event.target.disabled = true
                    }else{
                        flyInToPlanet(event)
                        dreamShowUp("plane")
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

}