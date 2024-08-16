

var emailInput = document.getElementById('email'); // ==== tag 

var nameInput = document.getElementById('name');

var domainInput = document.getElementById('domain');

function cutEmail() {
    var emailvalue = emailInput.value ;
    if(emailvalue !== '' && emailvalue.includes('@')) {
        var atindex = emailvalue.indexOf('@') ;
        var emailDomain = emailvalue.slice(atindex + 1) 

    if(emailDomain.length > 4 && emailDomain.includes('.')) {
        var emailName = emailvalue.slice(0 , atindex)
        
        nameInput.value = emailName;    
         
        domainInput.value = emailDomain;
    }
    else {
        alert('please write correct domain ex:@ex.com')
    }        

    }else {
       alert('Please write correct email')
    }

 
}

   
