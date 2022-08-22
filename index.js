const canvas = document.getElementById("art"); // s'dentifier le canvas
const ctx = canvas.getContext("2d"); // se ceer le context

// se réccupérer la position de la souris
// getBoundingClientRect() permet d'obtenir les dimensions du rect
// retrourner un tableau avec la position de x et y
function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

// dessiner des ligne avec des valeurs dynamique
function mouseMove(e) {
  const mousePos = getMousePos(e); // // savoir ou est la souris
  ctx.lineTo(mousePos.x, mousePos.y); // dessiner une ligne
  ctx.stroke();
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = 10;
}
canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const mousePos = getMousePos(e); // valeur de l'emplacement de la souris au click
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y); // donner l'emplacement

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
