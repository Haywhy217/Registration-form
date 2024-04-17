
document.querySelector('#form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  let firstName = document.querySelector('#fName').value;
  let lastName = document.querySelector('#lName').value;
  let password = document.querySelector('#password').value;
  let email = document.querySelector('#email').value;
  
  if(firstName.length < 3) {
    alert('first name should contain at least 3 letters');
    return
  }

  if(lastName.length < 3) {
    alert('last name should contain at least 3 letters');
    return
  }

  if(password.length < 8) {
    alert('password should contain at least 8 letters');
    return
  } 

  let formData ={
    fName:firstName,   
    lName:lastName,
    password:password,
    email:email,
  }

  localStorage.setItem('formData',JSON.stringify(formData));
  alert('your information has been saved.');
  
});





