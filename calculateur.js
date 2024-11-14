const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

function ouvrirModal() {
    modal.style.display = "flex";
    modalOverlay.style.display = "block";
}

function fermerModal() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
}

window.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
        fermerModal();
    }
});

closeModalBtn.addEventListener("click", fermerModal);

document.getElementById('calculer').addEventListener('click', function () {
    const distanceParJour = parseFloat(document.getElementById('distanceParJour').value);
    const joursTravailles = parseInt(document.getElementById('joursTravailles').value);

    if (!isNaN(distanceParJour) && !isNaN(joursTravailles)) {
        const resultat = distanceParJour * 0.12 * joursTravailles;
        document.getElementById('resultat').innerHTML = `Les émissions de CO2 pour les trajets domicile / travail en voiture sont de : ${resultat.toFixed(2)} kg`;
        ouvrirModal();
    } else {
        document.getElementById('resultat').innerHTML = "Veuillez entrer des valeurs valides.";
        ouvrirModal();
    }
});
