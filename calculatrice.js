function Ajouter(valeur) {
    document.getElementById('result').value += valeur;
}

function Supprimer() {
    document.getElementById('result').value = '';
}

function SupprimerDernier() {
    var equation = document.getElementById('result').value;
    var nouvelleEquation = equation.slice(0, -1);
    document.getElementById('result').value = nouvelleEquation;
}

function calculer() {
    var equation = document.getElementById('result').value;
    try {
        var resultat;
        if (equation.includes('%')) {
            equation = equation.replace('%', '/100');
        }
        if (equation.includes('√')) {
            equation = equation.replace('√', 'Math.sqrt(');
            equation += ')';
        }
        resultat = eval(equation); 
        console.log(resultat);
        document.getElementById('result').value = "= "+resultat;
    } catch (error) {
        alert('Equation invalide');
    }
}
