for (let i = 0; i < 24; i++) {
  let dateHtml = window.document.getElementById(`date` + i);
  let date = new Date();
  dateHtml.innerHTML = date();
}

window.document.getElementById("save").onclick = function () {
  handleSave();
};

function handleSave() {
  window.document.getElementById("save").innerHTML = "You saved me!";
}
