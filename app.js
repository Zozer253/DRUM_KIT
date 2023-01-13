const couleurs = ["rouge", "jaune", "bleu", "vert", "orange", "violet", "marron", "gris", "noir", "blanc", "rose", "turquoise", "cyan", "magenta", "argent", "or", "sable", "pêche", "lilas", "safran", "ivoire", "chartreuse", "olive", "moutarde", "saphir","indigo","coral","carmine","crimson","cinnamon","emerald","fuchsia","goldenrod","grey","ivory","khaki","lavender","navy","olive","pink","purple","silver","teal","tomato","violet","wheat","white","yellow","aquamarine","beige","black","blue","brown","chocolate","coral","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue"];
const random = Math.random();
const randomcolor = Math.floor(random * couleurs.length)

function playKey(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  const clickedkey = document.querySelector(`div[data-key = "${e.keyCode}"]`)

  if(!audio) return; //stop the fonction
  audio.currentTime = 0; 
  audio.play();
  key.classList.add("playing");

}

function clickKey(e) {
  const clickedkey = document.querySelector(`div[data-key = "${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

}

function removeTransition(e) {
  console.log(e)
  if(e.propertyName !== 'transform') return;
  
  this.classList.remove('playing').style.backgroundColor = couleurs[randomcolor]
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playKey);