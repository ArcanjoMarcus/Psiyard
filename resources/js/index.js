let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    document.getElementById("Max").innerHTML =
      '<button id="Certeza" onclick="never_gonna()">Certeza?</button>';
  });
}

function never_gonna() {
  document.getElementById("Max").innerHTML =
    ' Parabéns !!!!<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
