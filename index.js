var Qutoes=[
   {
      new:"Resentment is like drinking poison and waiting for your enemies to die.",
      pargraph:"--Nelson Mandela",
   },


   {
      new:"Be yourself; everyone else is already taken.",
      pargraph:"--Oscar Wilde",
   },

   {
      new:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      pargraph:"--Marilyn Monroe",
   },
];




function qout(){
   var newIndex =Math.floor(Math.random() * Qutoes.length);
   document.getElementById("new").innerHTML =Qutoes[newIndex].new;
   document.getElementById("pargraph").innerHTML =Qutoes[newIndex].pargraph;
}