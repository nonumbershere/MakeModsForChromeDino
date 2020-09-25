var body = document.body;
var GUI = {
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
}
}
