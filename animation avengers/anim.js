function calculer_age() {
    let year = document.getElementById("year").value;
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let age = currentYear - year;
    document.getElementById('age').innerHTML = `Vous avez ${age} ans !`;
//   new Date({getFullYear}) - parseInt(year.value)
  }


//   changer le backgroundcolor d'un div

function change_color(){
    div_color.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")" ;
}



// Implémentez la fonction JS qui retourne un chiffre arabe passé en argument en chiffre romain :
// ex : 1372 -> MCCCLXXII

function to_roman_number(){
  let num = document.getElementById("num").value;
  let num_index = num.toString();
  let unit=["","I","II","III","IV","V","VI","VII","VIII","IX"];
  let diz=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  let cent=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  let mill=["","M","MM","MMM","IVM","VM","VIM","VIIM","VIIIM","IXM"];

  
  let result = unit[num%10];
  num-=(num%10);
  num/=10;
  result=diz[num%10]+result;
  num-=(num%10);
  num/=10;
  result=cent[num%10]+result;
  num-=(num%10);
  num/=10;
  result=mill[num%10]+result;

  document.getElementById("roman_number").innerHTML = result;
}
    



// Créer un générateur de langue alien.
// En entrant le nombre maximum de mots et le nombre de syllabes maximum d'un mot,
// on génère une suite de mots.
// En général, même chez les aliens, les mot sont constitués de syllabes, et les syllabes sont
// constituées de 2 à 4 lettres de types différents (voyelles et consonnes alternées).
// Débrouillez-vous pour que les hommes verts (et plutot ombrageux) évitent de vous kidnapper ...

function textEt(){
let nb_syl = document.getElementById("syllabe").value;
let nb_mot = document.getElementById("mot").value;
let consonne = "bcdfghjklmnpqrstvwxz";
let voyelle = "aeiouy";
let text = "";

for (let i = 1 ; i < nb_mot ; i++){
    text += " ";
     for (let j = 1 ; j < nb_syl ; j++){
      text+="";
       for (let k = 0; k < Math.floor(Math.random()*5); k++){
         text += consonne[Math.floor(Math.random()*consonne.length)]+voyelle[Math.floor(Math.random()*voyelle.length)];
        }
      }
  }
  document.getElementById("textEt").innerHTML = text;
}
