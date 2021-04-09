

 exports.checkAPI = (url) =>{
    if (url !== "https://jsonplaceholder.typicode.com/albums") {
        // console.log("---data----->",200)
       return 200
    }else{
        console.log("-------->",300)
        return   300
    }

 }

  exports.generateText = (name, age) => {
    // Returns output text
    return `${name} (${age} years old)`;
  };


  
  exports.giveName = (name) =>{
    return `${name} ( years old now)`;
  }
  exports.createElement = (type, text, className) => {
    // Creates a new HTML element and returns it
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
  };
  
  exports.validateInput = (text, notEmpty, isNumber) => {
    // Validate user input with two pre-defined rules
    if (!text) {
      return false;
    }
    if (notEmpty && text.trim().length === 0) {
      return false;
    }
    if (isNumber && +text === NaN) {
      return false;
    }
    return true;
  };