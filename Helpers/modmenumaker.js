var body = document.body;
var Help = {
  preivew: function() {
GUI.createMenu('red', 'darkred', '100px', '1000px', 'modmenuexample', 'prepend', document.body);
  GUI.addTextLabel('Made by lapide', 'darkred', 'label1', 'red', 'prepend', menu);
GUI.addButton('green', '500px', '50px', 'lightgrey', 'Godmode', 'godmodehack', menu, 'prepend');
GUI.elementOnClick('godmodehack', function(){
       Runner.instance_.gameOver=function(){}
});
},
HelpAddButton: function(){
  function log(msg) {
console.log(msg);
}
log('In the first line write a color in ""!', 'FOR the width just add any perfect width and also for the height!', 'for the background write your favorite background color!', 'For text write the Text in the hack', 'An id is for the ELEMENTONCLICK.', 'addWhere: Just write MENU, OR document.body', 'For addtype just write: prepend or append or insertBefore.', '%cSAME FOR ALL OTHERS SUCH AS LABELS. MENUS.', 'color: yellow; font-size: xxx-large; background: red;');
}
}
var GUI = {
addHTML: function(comingsoon){},
  addButton: function(color, width, height, background, text, id, addWhere, addType) {
var r = document.createElement('button');
r.id=id;
  r.innerText=text;
r.style.color=color;
r.style.background=background;
r.style.height=height;
r.style.width=width;
window.button = id;
if (addType == 'insertBefore') {
       addWhere.insertBefore(r, addWhere.firstChild); 
}
if (addType == 'append') {
       addWhere.append(r);
}
if (addType == 'prepend') {
       addWhere.prepend(r);
}
},
  prepend: function(element, elementPrepend){
     elementPrepend.prepend(element);
},
append: function(element, elementAppend){
     elementAppend.prepend(element);
},
insertBefore: function(element, elementInsert){
     elementInsert.prepend(element);
},
addSpecialButton: function(color, width, height, background, text, id, addWhere, addType, onclick) {
var r = document.createElement('div');
r.innerHTML="<button style='background: "+background+"; color: "+color+"; height: "+height+"; width: "+width+"' onclick='"+onclick+"'>"+text+"</button>";
r.id=id;
r.style.height=height;
r.style.width=width;
window.button = id;
if (addType == 'insertBefore') {
       addWhere.insertBefore(r, addWhere.firstChild); 
}
if (addType == 'append') {
       addWhere.append(r);
}
if (addType == 'prepend') {
       addWhere.prepend(r);
}
},
  prepend: function(element, elementPrepend){
     elementPrepend.prepend(element);
},
append: function(element, elementAppend){
     elementAppend.prepend(element);
},
insertBefore: function(element, elementInsert){
     elementInsert.prepend(element);
},
elementOnClick: function(elementId, functions){
   document.getElementById(elementId).addEventListener('click', functions)
},
createMenu: function(color, backgroundcolor, height, width, id, addType, addWhere){
   var menu1 = document.createElement('div');
window.menu = menu1;
menu.style.background=backgroundcolor;
menu.style.height=height;
menu.style.width=width;
menu.style.color=color;
menu.id=id;
if (addType == 'insertBefore') {
    addWhere.insertBefore(menu, addWhere.firstChild);
}
if (addType == 'append') {
    addWhere.append(menu);
}
if (addType == 'prepend') {
    addWhere.prepend(menu);
}
},
addTextLabel: function(text, background, id, color, addType, addWhere){
var p = document.createElement('p');
 if (addType == 'insertBefore') {
    addWhere.insertBefore(p, addWhere.firstChild);
}
if (addType == 'append') {
    addWhere.append(p);
}
if (addType == 'prepend') {
    addWhere.prepend(p);
}
p.innerText=text;
p.id=id;
p.style.color=color;
p.style.background=background;
}
}
