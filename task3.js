myWord = (data) =>{
     const first = data;
     const  last = data;
     const   total = data;
     const  firstDATA =   first.slice(-1)
     const  secondDATA =  last.slice(0,1);
    const  totalDATA = total.length;
    const  calculate1 = totalDATA - firstDATA.length
    const  calculate2 =   calculate1 - secondDATA.length
     const  ans =  secondDATA + calculate2 + firstDATA
  
 return  ans
  
 }
  
 const newInput = "internationalization"         //    enter new world here
  
  
  
 console.log("ans ----------=-------->",  myWord(newInput))
 