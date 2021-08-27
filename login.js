

let email=document.getElementById("email");
let pwd=document.getElementById("pwd");

let error= document.getElementById("error");
let error1= document.getElementById("error1");
let error2= document.getElementById("error2");
let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let repwd= document.getElementById("repwd");
let mobnumber=document.getElementById("mobnum");



               // email validation



function validate(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/





    if (regexp.test(email.value)) {

                       error.innerHTML="";
                  
                 return true;
                            
               }
           else{
                        error.innerHTML="invalid email address";
                        error.style.color="red";
                         
                        alert("please enter a valid email id");
                 

              return false;

                         }

                       }




                       

         
       function validateForm(){


          if (email.value.trim()=="" && pwd.value.trim()=="") {

                              alert("field cannot be empty");
                              alert.style.color="red";
                              return false;

    
                                               } 
                       
                                               else {
          
                                                        
                                                return  true;
}

      
}




                         // validate validatePassword



function validatePassword(){
                            
                          if (pwd.value.length<=7) {

                           alert("password is less than 8 characters");
                           alert.style.color="red";

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


   let n=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{10}$/;


                  let o=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{11,}$/;

            
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
            
            return true;
            
         } 
         
         else 
         {
           
            alert(' invalid number, number should contain 10 digits only or XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX not in these format ');
            
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
  
  
  
                  


                  







