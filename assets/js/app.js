function toggleSide() {
    let x = document.getElementById('sidePanel');
    (x.style.left == undefined || x.style.left === "-460px" || x.style.left === "") ?
     x.style.left = "0px" : x.style.left = "-460px";
}

function closeSide() {
    document.getElementById("sidePanel").style.left = "-460px";
  }
