const btnChangeColor = document.getElementById("btnChangeColor");
btnChangeColor.onclick = function() {
    // document.body.style.backgroundColor = "lightblue";
    // document.body.setAttribute("class", "light-blue");
    document.body.classList.toggle("light-blue");
}

//New Button using JS
const newBtn = document.createElement("button");
const btnText = document.createTextNode("Rendom Color");
newBtn.appendChild(btnText);
newBtn.setAttribute("type", "button");
btnChangeColor.after(newBtn);
newBtn.addEventListener("click", function() {
    r = Math.round(Math.random()*255+1);
    g = Math.round(Math.random()*255+1);
    b = Math.round(Math.random()*255+1);
    // console.log(r);
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
});

//Range
const redRange = document.querySelector("input[name=redRange]");
const greenRange = document.querySelector("input[name=greenRange]");
const blueRange = document.querySelector("input[name=blueRange]");
redRange.addEventListener("input", function() {
    // redRange.value;
    // console.log(redRange.value);
    const r = redRange.value;
    const g = greenRange.value;
    const b = blueRange.value;
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
});
greenRange.addEventListener("input", function() {
    // redRange.value;
    // console.log(redRange.value);
    const r = redRange.value;
    const g = greenRange.value;
    const b = blueRange.value;
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
});
blueRange.addEventListener("input", function() {
    // redRange.value;
    // console.log(redRange.value);
    const r = redRange.value;
    const g = greenRange.value;
    const b = blueRange.value;
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
});

// event listener with pointer location
document.body.addEventListener("mousemove", function(e) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    const b = blueRange.value;
    document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + "," + b + ")";
});