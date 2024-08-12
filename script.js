function toggleMode() {
  const html = document.documentElement
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  //simplificando:
  html.classList.toggle("light")

  //trocando imagem:
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./profiles/profile-avatar.png")
  } else {
    img.setAttribute("src", "./profiles/profile-avatar-black.png")
  }
}
