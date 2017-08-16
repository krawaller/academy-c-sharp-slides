var data = {
  "title": "A dark corridor",
  "img": "http://3.bp.blogspot.com/_1elbE3kd7E8/TLduX1GfHmI/AAAAAAAAANM/R8FTsXiVo-0/s1600/dark_corridor.jpg",
  "description": "You are in a dark corridor, which seems to extend into infinity. Ominous doors line the walls",
  "options": [
    "Try a door at random",
    "Move down the corridor",
    "Turn back"
  ]
};

var templateDefinition = `
  <h4>{{title}}</h4>
  <img src="{{img}}">
  <p id="para">{{description}}</p>
  <ul>
    {{#each options}}
      <li>{{this}}</li>
    {{/each}}
  </ul>
`;

var templateFunction = Handlebars.compile(templateDefinition);

var DOM = templateFunction( data );


document.querySelector(".wrapper").innerHTML = DOM;
