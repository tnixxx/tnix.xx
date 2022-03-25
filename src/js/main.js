function changeItem(n) {
    objev = document.getElementsByClassName(n)
    Array.from(objev).forEach(function(item) {
        item.setAttribute('fill', '#c33636');
     });
}
function rechangeItem(n) {
    objev = document.getElementsByClassName(n)
    Array.from(objev).forEach(function(item) {
        item.setAttribute('fill', 'white');
     });
}
// $('#mainModal').modal('show')