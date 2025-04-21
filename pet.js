const petInfo = document.getElementById("petInfo");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://script.google.com/macros/s/AKfycbx1oOO_-38tBwJCawwWZ2Pys7j9G5iG1oyzASVDN0DGM9P8op-c7vrPqnT2cxp8yN-b/exec?id=${id}`)
  .then(res => res.json())
  .then(data => {
    if (data.id) {
      petInfo.innerHTML = `
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Nombre:</strong> ${data.name}</p>
      `;
    } else {
      petInfo.textContent = "Mascota no encontrada 😿";
    }
  })
  .catch(err => {
    console.error(err);
    petInfo.textContent = "Error al cargar datos.";
  });
