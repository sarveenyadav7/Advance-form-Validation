console.log("testing")

function sarveen(){

    let firstName = document.querySelector('#first-name').value
    console.log(firstName)
    let firstNameLength = firstName.length
    console.log(firstNameLength)

    let lastName = document.querySelector("#last-name").value
    console.log(lastName)
    let lastNameLength = lastName.length
    console.log(lastNameLength)

    let userEmail = document.querySelector("#user_email").value
    console.log(userEmail)

    let emailStructure = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(emailStructure)

    let dateOfBirthLength = document.querySelector("#birth").value
    let dobYear = parseFloat(dateOfBirthLength)


    let countryName = document.querySelector("#country").value
    console.log(countryName)

    let statesName = document.querySelector("#state").value
    console.log(statesName)



    
    if(firstNameLength <=3){
        document.querySelector('.input_wrong').innerText = 'First name should contain minimum 4 character...'
        document.querySelector('.input_success').innerText = ''
    }
    else if(lastNameLength <=3){
        document.querySelector('.input_wrong').innerText = 'Last name should contain minimum 4 character...'
        document.querySelector('.input_success').innerText = ''
    }
    else if(!userEmail.match(emailStructure)){
        document.querySelector('.input_wrong').innerText = 'Enter valid e-mail...'
        document.querySelector('.input_success').innerText = ''
    }
    else if(dobYear >=1996 || dobYear == NaN){
        console.log(dobYear)
        document.querySelector('.input_wrong').innerText = 'Sorry u didnt fullfilled Age Criteria.....'
        document.querySelector('.input_success').innerText = ''
    }
    else{
        document.querySelector('.input_success').innerText = 'Registered Successfully..'
    }
    
}