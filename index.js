let date = Date();

window.document = function() {
    handleDates();
}

function handleDates(date) {
    for(let i = 0; i < 24; i++) {
        let dateHtml = window.document.getElementById("date" + i);
        console.log(date);
        dateHtml.textContent = date.getHours();
    }
}

window.document.getElementById("save").onclick = function () {
  handleSave();
};

function handleSave() {
  window.document.getElementById("save").innerHTML = "You saved me!";
}
