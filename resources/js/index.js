let buttons = document.querySelectorAll("button");
let count_clicks = 0;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    count_clicks += 1;
    if (count_clicks > 1) {
      document.getElementById("Max").innerHTML =
        '<button id="Certeza" onclick="upload_documento()">Certeza?</button>';
      count_clicks = 0;
    } else {
      alert("LEIA OS TERMOS!!");
    }
  });
}
function upload_documento() {
  document.getElementById("Max").innerHTML =
    'Agora por favor tire uma selfie do lado de uma capivara segurando simultaneamente uma calendário e os termos e condições devidamente impressos e com firma reconhecida. ATENÇÃO QUE QUALQUER DESVIO PODE LEVAR A DESCLASSIFICAÇÃO INSTANTÂNEA!!!!!!<input id="inputFile" type="file"></input><div id="legendinha"><div>';
  document.getElementById("inputFile").addEventListener("click", () => {
    count_clicks++;
    setTimeout(() => {
      document.getElementById("inputFile").addEventListener("change", () => {
        if (count_clicks == 1) {
          document.getElementById("legendinha").innerHTML +=
            '<br><p style="color: red">Por favor, eu to falando sério.</p>';
        } else if (count_clicks == 2) {
          document.getElementById("legendinha").innerHTML = document
            .getElementById("legendinha")
            .innerHTML.replace(
              '<br><p style="color: red">Por favor, eu to falando sério.</p>',
              '<br><p style="color: red">Sem condições.</p>'
            );
        } else {
          document.getElementById("legendinha").innerHTML = document
            .getElementById("legendinha")
            .innerHTML.replace(
              '<br><p style="color: red">Sem condições.</p>',
              '<br><p style="color: green">Aceitável ....</p>'
            );
          setTimeout(() => {
            document.getElementById("Max").innerHTML =
              "Estou sem mais ideias do que colocar por aqui";
            setTimeout(() => {
              document.getElementById("Max").innerHTML =
                "Algumas perguntas sem nenhum sentido parece uma excelente idéia!!<br>ebaaaa";
              setTimeout(() => {
                document.getElementById("Max").innerHTML = `
                <form>
                    Qual a primeira colônia francôfona a se tornar independente???
                    <div>
                      <input type="radio" id="mocambique" name="pais"
                            >
                      <label for="mocambique">Moçambique</label>
                    </div>
                    <div>
                    <input type="radio" id="argelia" name="pais"
                          >
                    <label for="argelia">argelia</label>
                  </div>
                  <div>
                  <input type="radio" id="kkk" name="pais"
                        >
                  <label for="kkk">eeeeee</label>
                </div>
                <div>
                  <input type="radio" id="guine" name="pais"
                        >
                  <label for="guine">Guiné-Conacri</label>
                </div>
                    `;
                document
                  .getElementById("guine")
                  .addEventListener("click", () => {
                    setTimeout(() => {
                      document.getElementById("Max").innerHTML = `
                    <form>
                    Se o planeta é redondo, quais são os quatro cantos da Terra? 
                      <div>
                        <input type="text" style="width: 100%; height: 40px; font-size: 0.7em" id="mocambique" name="pais">
                      </div>
                    </div>
                    `;
                    setTimeout(()=>{
                      document.getElementById("Max").innerHTML = `
                      Cansei de programar ... 
                      `;

                      setTimeout(()=>{
                        document.getElementById("Max").innerHTML = `
                          Você foi muito bem!!!
                        `;
                        setTimeout(()=>{
                          never_gonna();

                        }, 1500)
                      }, 1500)
                    }, 1500)
                      document.getElementById("guine").style.backgroundColor =
                        "green";
                      document.getElementById("guine").checked = true;
                      document.getElementById("guine").disabled = true;
                    }, 1000);
                  });
              }, 1500);
            }, 1500);
          }, 800);
          //never_gonna();
        }
      });
    }, 1000);
  });
}
function never_gonna() {
  document.getElementById("Max").innerHTML =
    ' Parabéns !!!!<iframe width="560" height="215" src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
