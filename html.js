function hello (){
    let name = document.querySelector('#name').value;
    document.querySelector('.hi').value=`Привет, ${name}!`
    }