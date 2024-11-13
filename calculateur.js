document.getElementById('calculer').addEventListener('click', function () {
    const distanceParJour = parseFloat(document.getElementById('distanceParJour').value);
    const joursTravailles = parseInt(document.getElementById('joursTravailles').value);

    if (!isNaN(distanceParJour) && !isNaN(joursTravailles)) {
        const resultat = distanceParJour * 0.12 * joursTravailles;
        document.getElementById('resultat').innerHTML = resultat.toFixed(2);
    } else {
        document.getElementById('resultat').innerHTML = "Veuillez entrer des valeurs valides.";
    }
});
