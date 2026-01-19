<script>
function showSection(id){
  document.getElementById('mainTitle').style.display='none';
  let sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display='none');
  document.getElementById(id).style.display='block';
}

function goHome(){
  // Cacher toutes les sections
  let sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display='none');

  // Afficher le gros titre à l'accueil
  document.getElementById('mainTitle').style.display='block';
}
</script>
