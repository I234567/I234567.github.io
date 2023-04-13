let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString("Welcome to my website =)")
  .pauseFor(500)
  .deleteChars(10)
  .start();
