function greet(name) {
  if(name){
  if(typeof(name) === "object"){
      console.log("Array")
      let a = "Hello"
      name.forEach(element => {
          a+=", "
          a+=element
      });
      return a
  }
  else if(name.toUpperCase() === name){
       return "HELLO "+name+"!"
  }
else {
    return name?"Hello, "+name:"Hello there!"
    }
  } else if(name == null){
      return "Hello there!"
  }

}