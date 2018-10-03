function createElement(tagName,settings,parentElement){
    let obj=document.createElement(tagName);
	if(settings.atrs){setAttributes(obj,settings.atrs);}
    if(settings.stys){setStyles(obj,settings.stys);}
	if(parentElement instanceof Element){parentElement.appendChild(obj);}
    return obj;
}
function getPosition(element){
    let elementBox = element.getBoundingClientRect()
    let elementPosition = {}
    let elementLeft = elementBox.left
    let elementTop = elementBox.top
    let scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    let topBorder = elementTop+scrollDistance
    elementPosition.x=elementLeft
    elementPosition.y=topBorder
    return elementPosition
}
function setAttributes(obj,attributes){
    for(let name in attributes){
		obj[name]=attributes[name];
	}
	return obj;
}

function setStyles(obj,styles){
    for(let name in styles){
		obj.style[name]=styles[name];
	}
	return obj;
}