const paper = document.querySelector(".paper");

if (paper) {
  paper.addEventListener("focus", () => {
    if (paper.textContent.trim() === "") {
      const range = document.createRange();
      const sel = window.getSelection();
      paper.appendChild(document.createTextNode(""));
      range.setStart(paper.childNodes[paper.childNodes.length - 1], 0);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });
}
