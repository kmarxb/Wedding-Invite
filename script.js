WebFont.load({
	google: {
		families: ['Tangerine:400','Comfortaa:300','Petit Formal Script:400','Sacramento:400']
	}
});

function style1(){
    document.getElementById('bgImage')
    .src="/images/neutral-minimal.jpg";
    document.getElementById('imgtext').style.fontFamily = 'Tangerine', cursive
    
}
function style2(){
    document.getElementById('bgImage')
    .src="/images/purple-flowers.jpg";
    document.getElementById('imgtext').style.fontFamily = 'Sacramento', cursive
}   

function style3(){
    document.getElementById('bgImage')
    .src="/images/colourful.jpg";
    document.getElementById('imgtext').style.fontFamily = 'Petit Formal Script', cursive
}

function changeWhite(){
    let element = document.getElementById("imgtext");
    element.style.color = "#FFFFFF";
}
function changeBlack(){
    let element = document.getElementById("imgtext");
    element.style.color = "#000000";
}
function changeGreen(){
    let element = document.getElementById("imgtext");
    element.style.color = "#228B22";
}
function changeGold(){
    let element = document.getElementById("imgtext");
    element.style.color = "#958935";
}


function getName() {
    let showName = document.getElementById('name').value;
    document.getElementById("inputN").innerHTML = "" + showName;
}

function getDate() {
    let showDate = document.getElementById('date').value;
    document.getElementById("inputD").innerHTML = "" + showDate;
}


function getLocation() {
    let showLocation = document.getElementById('location').value;
    document.getElementById("inputL").innerHTML = "" + showLocation;
}
