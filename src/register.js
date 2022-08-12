const register = document.querySelector('.btn-submit');

register.addEventListener('click', ()=>{
    const name = document.querySelector('.name').value;
    const lname = document.querySelector('.lname').value;
    const user = document.querySelector('.user').value;
    const password = document.querySelector('.password').value;

    const newUser = {
        "id": data.length+1,
        "name": name,
        "last_name": lname,
        "image": "none",
        "user": user,
        "category": "home",
        "favorite": "false",
        "pass": password
    }

    data[data.length] = newUser;

    console.log(data.length)
    console.log(data[data.length-1])

    window.location.replace("../HTML/login.html")

    

})



