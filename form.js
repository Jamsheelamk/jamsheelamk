

let email=document.getElementById("email");
let pwd=document.getElementById("pwd");

let error= document.getElementById("error");
let error1= document.getElementById("error1");
let error2= document.getElementById("error2");
let error4= document.getElementById("error4");

let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let repwd= document.getElementById("repwd");
let mobnumber=document.getElementById("mobnum");



               // email validation



function validateEmail(){

    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    error.innerHTML="";
    // let regexp =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;


               if (email.value=="") {

                error.innerHTML="field cannot be empty";
                      
                      
                            error.style.color="red";

                               
                       
                                          return false;
                            
                             }

             else if(regexp.test(email.value)!=true){

                      error.innerHTML="please enter a valid email address";
                      
                            error.style.color="red";
                     
                    
                              return false;
                                          
                           }

          else if (email.value.trim()=="") {
  

            error.innerHTML="field cannot be empty";
                      
                   error.style.color="red";
            

                       return false;
            
          }
                
                    else{
                      
                      error.innerHTML="valid email address";
                      
                      error.style.color="green";

                      return true;
           }
                        
                         
                        
         }      

            



                       

      
          
                                                        
              


                         // validate validatePassword



function validatePassword(){
                            
      if (pwd.value.length<=7) {

          alert("password is less than 8 characters");
                          
                alert.style.color="red";

                   return false;
                          
                  }

                  else if (pwd.value.trim()=="") {
                    
                    return false;
                  }

                      
  else if(pwd.value!=repwd.value)
                     
  {

       alert('password doesnt match');
                         
         return false;
                         
            }
            
            else
            
            {
                        
               return true;
                      
            }
                     
         }






function validatepwdcondition(){

    let m=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

     let pwd=document.getElementById("pwd");

        let repwd= document.getElementById("repwd");

                        
         if(pwd.value.match(m)){

                   return true;
                       
                            }
          else{
               
            alert('password should contain 8 characters, atleast 1 uppercase, lowercase and a number');

                                    return false;
                                 }

                       
                   
 

               }


                  
function validatestrngpwd(){


   let n=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{10,12}$/;


       let o=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{13,}$/;

            
                  if (pwd.value.match(o)) {

                      error1.innerHTML="password is strong";
                        
                           error1.style.color="green";

                                  error1.style.border="2px";

                                        error1.style.background="cyan";

                                              error1.style.borderBottomColor="blue";
 
      
   }

            else if(pwd.value.match(n)){
                      
                 error1.innerHTML="password is medium strong";
                   
                        error1.style.color="orange";

                               error1.style.border="2px";
                                 
                                     error1.style.background="cyan";

   }

          else{
                      error1.innerHTML="password is poor";
                     
                           error1.style.color="red";

                                  error1.style.border="2px";

                                         error1.style.background="yellow";
                     
                     
   }

}

                      
                       // MOBILE NO VALIDATION



       

       function validatemonumber(){


                       if (mobnumber.value=="") {
               
                               alert(' number shouldnot be empty');
            
                                        return false;
            
                                              }

                                        var phoneno = /^(\d{10})$/;

                                var phoneno1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

 if (mobnumber.value.match(phoneno && phoneno1 )) {

                 error4.innerHTML="valid number";
            
                       error4.style.color="green";
               
                       return true;
            
                   } 
         
               else 
                       {
           
            // alert(' invalid number, number should contain 10 digits only or XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX not in these format ');
          
                  error4.innerHTML=" number should contain 10 digits only or XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX in these format";
           
                         error4.style.color="red";
            
                                return false;
           
                      }


       }



              // validate firstname & last name


             function validatefirstname(){

                  if (fname.value==""||lname.value=="") {
                
                     alert(" name field cannot be empty");
      
                           return false;
      
   
                  }
   
                  else{
      
                     return true;
  
                  }

  }
  
  
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");



// When the user clicks on the password field, show the message box
pwd.onfocus = function() {
   document.getElementById("message").style.display = "block";
 }
 
 // When the user clicks outside of the password field, hide the message box
 pwd.onblur = function() {
   document.getElementById("message").style.display = "none";
 }

 // When the user starts to type something inside the password field
pwd.onkeyup = function() {
   // Validate lowercase letters
   var lowerCaseLetters = /[a-z]/g;
   if(pwd.value.match(lowerCaseLetters)) {  
     letter.classList.remove("invalid");
     letter.classList.add("valid");
   } else {
     letter.classList.remove("valid");
     letter.classList.add("invalid");
   }
   
   // Validate capital letters
   var upperCaseLetters = /[A-Z]/g;
   if(pwd.value.match(upperCaseLetters)) {  
     capital.classList.remove("invalid");
     capital.classList.add("valid");
   } else {
     capital.classList.remove("valid");
     capital.classList.add("invalid");
   }

   // Validate numbers
  var numbers = /[0-9]/g;
  if(pwd.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(pwd.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

                  







