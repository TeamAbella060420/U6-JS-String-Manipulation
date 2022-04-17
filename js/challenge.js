function photoName() {
  //prompt person to enter name 
  
  var name = prompt("Please enter your name");
   
  //remove additional whitespaces
  nane = name.trim()
  //replace the space between names with underscore
  name = name.replace("","_")
  //change name to all lowercase
    alert("Your photo name is " + name + ".jpg")
    
}
photoName()
