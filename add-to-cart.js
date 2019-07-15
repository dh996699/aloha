var addcount = document.getElementById("add-me"),
  count = 0;
  addcount.onclick = function() {
  count += 1;
  addcount.innerHTML = count;
};