const memoriak = [
  {
    gradua: "informatika",
    izenburua: "Adibidea 1",
    link: "https://addi.ehu.es/handle/10810/1?locale-attribute=eu",
  },
  {
    gradua: "informatika",
    izenburua: "Adibidea 2",
    link: "https://addi.ehu.es/handle/10810/2?locale-attribute=eu",
  },
  {
    gradua: "adimen_artifiziala",
    izenburua: "Adimen Artifiziala TFG",
    link: "https://addi.ehu.es/handle/10810/3?locale-attribute=eu",
  },
  {
    gradua: "telekomunikazioak",
    izenburua: "Telekomunikazioak TFG",
    link: "https://addi.ehu.es/handle/10810/4?locale-attribute=eu",
  },
  {
    gradua: "informatika",
    izenburua: "Adibidea 1",
    link: "https://addi.ehu.es/handle/10810/1?locale-attribute=eu",
  },
  {
    gradua: "informatika",
    izenburua: "Adibidea 2",
    link: "https://addi.ehu.es/handle/10810/2?locale-attribute=eu",
  },
  {
    gradua: "adimen_artifiziala",
    izenburua: "Adimen Artifiziala TFG",
    link: "https://addi.ehu.es/handle/10810/3?locale-attribute=eu",
  },
  {
    gradua: "telekomunikazioak",
    izenburua: "Telekomunikazioak TFG",
    link: "https://addi.ehu.es/handle/10810/4?locale-attribute=eu",
  },
  {
    gradua: "informatika",
    izenburua: "Adibidea 1",
    link: "https://addi.ehu.es/handle/10810/1?locale-attribute=eu",
  },
  {
    gradua: "informatika",
    izenburua: "Adibidea 2",
    link: "https://addi.ehu.es/handle/10810/2?locale-attribute=eu",
  },
  {
    gradua: "adimen_artifiziala",
    izenburua: "Adimen Artifiziala TFG",
    link: "https://addi.ehu.es/handle/10810/3?locale-attribute=eu",
  },
  {
    gradua: "telekomunikazioak",
    izenburua: "Telekomunikazioak TFG",
    link: "https://addi.ehu.es/handle/10810/4?locale-attribute=eu",
  },
  {
    gradua: "informatika",
    izenburua: "Adibidea 1",
    link: "https://addi.ehu.es/handle/10810/1?locale-attribute=eu",
  },
  {
    gradua: "informatika",
    izenburua: "Adibidea 2",
    link: "https://addi.ehu.es/handle/10810/2?locale-attribute=eu",
  },
  {
    gradua: "adimen_artifiziala",
    izenburua: "Adimen Artifiziala TFG",
    link: "https://addi.ehu.es/handle/10810/3?locale-attribute=eu",
  },
  {
    gradua: "telekomunikazioak",
    izenburua: "Telekomunikazioak TFG",
    link: "https://addi.ehu.es/handle/10810/4?locale-attribute=eu",
  },
  {
    gradua: "informatika",
    izenburua: "Adibidea 1",
    link: "https://addi.ehu.es/handle/10810/1?locale-attribute=eu",
  },
  {
    gradua: "informatika",
    izenburua: "Adibidea 2",
    link: "https://addi.ehu.es/handle/10810/2?locale-attribute=eu",
  },
  {
    gradua: "adimen_artifiziala",
    izenburua: "Adimen Artifiziala TFG",
    link: "https://addi.ehu.es/handle/10810/3?locale-attribute=eu",
  },
  {
    gradua: "telekomunikazioak",
    izenburua: "Telekomunikazioak TFG",
    link: "https://addi.ehu.es/handle/10810/4?locale-attribute=eu",
  },
];

function erakutsiLista(gradua) {
  const aukeratutakoak = memoriak.filter((memoria) => memoria.gradua === gradua);
  const container = document.getElementById("memoriakCarouselContainer");
  if (aukeratutakoak.length === 0) {
    container.innerHTML = "<p>Ez dago adibiderik.</p>";
    return;
  }
  container.innerHTML = `
    <div class="d-flex flex-row flex-nowrap overflow-auto gap-3 pb-3">
      ${aukeratutakoak
        .map(
          (memoria) => `
          <div class="card shadow rounded" style="min-width: 250px;">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${memoria.izenburua}</h5>
              <a href="${memoria.link}" target="_blank" class="btn btn-primary mt-auto">Ikusi TFG</a>
            </div>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}

document
  .getElementById("graduaSelect")
  .addEventListener("change", function () {
    erakutsiLista(this.value);
  });

erakutsiLista(document.getElementById("graduaSelect").value);