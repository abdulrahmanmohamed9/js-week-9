var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var bookMarks;
if (localStorage.getItem("bookMark") != null) {
  bookMarks = JSON.parse(localStorage.getItem("bookMark"));
  displayTable();
} else {
  bookMarks = [];
}
function addBookMark() {
  var bookMark = {
    websiteName: siteNameInput.value,
    visit: siteUrlInput.value,
  };
  bookMarks.push(bookMark);
  displayTable();
  clearInputs();
}
function clearInputs() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}
function displayTable() {
  var trs = "";
  for (var i = 0; i < bookMarks.length; i++) {
    trs += `<tr>
              <td>${i}</td>
              <td>${siteNameInput.value}</td>
              <td>
                <a
                  href="https://${siteUrlInput.value}"
                  target="_blank"
                  style="background-color: #9eb23b;"
                  class=" btn btn-submit px-3 text-white"
                  id="visitBtn"
                >
                  <i class="fa-solid fa-eye me-1"></i>
                  Visit
                </a>
              </td>
              <td>
                <button
                  onclick="deleteBookmark(${i})"
                  type="button"
                  class="btn btn-submit px-3 bg-danger text-white"
                  id="deleteBtn"
                >
                  <i class="fa-solid fa-trash me-1"></i>
                  Delete
                </button>
              </td>
            </tr>`;
  }
  localStorage.setItem("bookMarks", JSON.stringify(bookMarks));

  document.getElementById("tableContent").innerHTML = trs;
}
function deleteBookmark(index) {
  bookMarks.splice(index, 1);
  displayTable();
}
