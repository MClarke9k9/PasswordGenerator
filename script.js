     

// This is the button starts the program
     var generate=document.getElementById("generate");

     generate.onclick = function() {
       passwordStart();
     }
     
     function passwordStart() {
     // This is the User length prompt
       var passwordLength=prompt("How many characters would you like your password to have?");
     // This is the User password criteria 
        var upperCase=confirm("Would you like you password to have Uppercase Letters?"); 
        var letters=confirm("Would you like you password to have Letters?");
        var numbers=confirm("Would you like you password to have Numbers?");  
        var specialChars=confirm("Would you like you password to have Special Character?");
     // This is the password length range
        if (passwordLength < 8 || passwordLength > 128 ) {
         alert("Your password must be 8 to 128 characters long.You must give me an numeric amount for your password length.");
         return passwordStart();
       } 
       // This is the password generation
         else if (passwordLength && upperCase && letters && numbers && specialChars) {
           everythingPassword(passwordLength);   
       } else if (passwordLength && upperCase && letters && numbers) {
           mixedLettersWithNumbersPassword(passwordLength);
       } else if (passwordLength && upperCase && numbers && specialChars) {
          uppercaseLettersWithSpecialAndNumbersPassword(passwordLength);
       }  else if (passwordLength && letters && numbers && specialChars) {
           lettersWithNumbersAndSpecialPassword(passwordLength);
       } else if (passwordLength && upperCase && letters) {
           mixedLettersPassword(passwordLength);
       } else if (passwordLength && letters && numbers) {
           lettersWithNumbersPassword(passwordLength);
       } else if (passwordLength && letters && specialChars) {
           lettersWithSpecialPassword(passwordLength);
       } else if (passwordLength && upperCase && numbers) {
           uppercaseLettersWithNumbersPassword(passwordLength);
       } else if (passwordLength && upperCase && specialChars) {
           uppercaseLettersWithSpecialPassword(passwordLength);
       } else if (passwordLength && numbers && specialChars) {
           specialWithNumbersPassword(passwordLength);
       }  else if (passwordLength && upperCase) {
           uppercaseLettersPassword(passwordLength); 
       } else if (passwordLength && specialChars) {
           specialPassword(passwordLength); 
       } else if (passwordLength && numbers) {
           numbersPassword(passwordLength); 
       } else if (passwordLength && letters ) {
           lettersPassword(passwordLength); 
       } 
       
     }
       
     
     
     
     
     // This is all the different password combinations
        
        function numbersPassword(digits) {
                     var word="";
                     for(var i=0;i<digits;i++) {
                         var randomNumber=Math.random();
                         var randomValue=randomNumber* 10;
                         var randomResult=Math.floor(randomValue);
                         word=word + randomResult;
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                     }
                     return word;
                 }
        function uppercaseLettersPassword(X) {
                     var word="";
                     var letters="abcdefghijklmnopqrstuvwxyz";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         word=word.toUpperCase();
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                     }
                     return word;
                 }
        function lettersPassword(X) {
                     var word="";
                     var letters="abcdefghijklmnopqrstuvwxyz";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                     }
                     return word;
                 }
        function mixedLettersPassword(X) {
                     var word="";
                     var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                         
                     }
                     return word;
                 }
        function specialPassword(X) {
                     var word="";
                     var letters="@#$%^&*()_<>?+{}|:";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                         
                     }
                     return word;
                 }
        function uppercaseLettersWithSpecialPassword(X) {
                     var word="";
                     var letters="abcdefghijklmnopqrstuvwxyz~!@#$%^&*(()_+{}|";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         word=word.toUpperCase();
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                     }
                     return word;
                 }
        function lettersWithSpecialPassword(X) {
                     var word="";
                     var letters="abcdefghijklmnopqrstuvwxyz@#$%^&*()_<>?+{}|:";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                     }
                     return word;
                 }
        function mixedLettersWithSpecialPassword(X) {
                     var word="";
                     var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_<>?+{}|:|";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword; 
                     }
                     return word;
                 }
        function specialWithNumbersPassword(X) {
                     var word="";
                     var letters="@#$%^&*()_<>?+{}|:123456789";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword; 
                     }
                     return word;
                 }
        function uppercaseLettersWithNumbersPassword(X) {
                     var word="";
                     var letters="abcdefghijklmnopqrstuvwxyz1234567890";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         word=word.toUpperCase();
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                     }
                     return word;
                 }
        function lettersWithNumbersPassword(X) {
                     var word="";
                     var letters="abcdefghijklmnopqrstuvwxyz1234567890";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                     }
                     return word;
                 }
        function mixedLettersWithNumbersPassword(X) {
                     var word="";
                     var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         
                     }
                     return word;
                 }
        function everythingPassword(X) {
                     var word="";
                     var letters="@#$%^&*()_<>?+{}|:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword; 
                     }
                     return word;
                 }
        function mixedLettersWithSpecialPassword(X) {
                     var word="";
                     var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_<>?+{}|:";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                     }
                     return word;
                 } 
        function lettersWithNumbersAndSpecialPassword(X) {
     
                     var word="";
                     var letters="@#$%^&*()_<>?+{}|:abcdefghijklmnopqrstuvwxyz1234567890";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                     }
                     return word;
                 } 
                 function uppercaseLettersWithSpecialAndNumbersPassword(X) {
                     var word="";
                     var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*(()_+{}|";
                     var lettersLength=letters.length;
                     for(var i=0;i<X;i++) {
                         word+=letters.charAt(Math.floor(Math.random()* lettersLength));
                         var showPassword=word;
                         document.getElementById("password").innerHTML=showPassword;
                     }
                     return word;
              }