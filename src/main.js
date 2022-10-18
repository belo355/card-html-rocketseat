import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogoCard = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardBadeira(bandeira) {
  const colors = {
    visa: ["#2D57F2", "#436D99"],
    master: ["#C69347", "#DF6F29"],
    bmw: ["#2D57F2", "#000000"],
    default: ["black", "gray"],
  }

  ccBgColor01.setAttribute("fill", colors[bandeira][0])
  ccBgColor02.setAttribute("fill", colors[bandeira][1])
  ccLogoCard.setAttribute("src", `cc-${bandeira}.svg`)
}

setCardBadeira("master")
