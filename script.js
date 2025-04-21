const form = document.getElementById("petForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;

  const data = { id, name };

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbx1oOO_-38tBwJCawwWZ2Pys7j9G5iG1oyzASVDN0DGM9P8op-c7vrPqnT2cxp8yN-b/exechttps://script.google.com/macros/s/AKfycbyNSRrNBfkiYv0WWuk-51Z7jyeb7fZwPcyLu0Y4_ReVunTsuAMrFwkIj1uVvAtobgOU/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      message.textContent = "Mascota guardada con éxito ✅";
      setTimeout(() => {
        window.location.href = `pet.html?id=${id}`;
      }, 1000);
    } else {
      message.textContent = "Error al guardar la mascota ❌";
    }
  } catch (error) {
    message.textContent = "Error de conexión";
    console.error(error);
  }
});
