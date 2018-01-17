console.log('jqueryGet loaded');



$(function(){
  //ondocument loaded
  $('#github').click(function(){
    //on github click
  const url = 'https://api.github.com/users/jlromao';
  //get date from url
  $.get(url,function(result){
    $('#output').append(getData(result));
  });
});
})



function getData(result) {
  let output = ""
  output += "<ul>"
for(const key in result) {
  output += "<li>";
  output += key + " - " + result[key];
  output += "</li>";

}

output += "</ul>";
return output;



}
