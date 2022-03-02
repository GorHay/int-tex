// получаем из нашего файла элемент с атрибут name='password'
password = document.querySelector("input[name='password']");
// получаем из нашего файла элемент с атрибут name='secondpassword'
secondPassword = document.querySelector("input[name='secondpassword']");
// получаем из нашего файла элемент с id form
form = document.querySelector('#form');
// получаем из нашего файла элемент с id passwordInput 
passwordInput = document.querySelector("#passwordInput")
// получаем из нашего файла элемент с class span  
span = document.querySelector('.span');

function validatePassword() {
    /*reportvalidity() возвращает значение true, если дочерние элементы 
    управления элемента удовлетворяют их ограничениям проверки.*/
    if (form.reportValidity()) {
        
        if (password.value !== secondPassword.value) {
            notValid(passwordInput, span, "Пароли не совпадают")
        }
        //Метод form.submit() позволяет инициировать отправку формы из JavaScript.  
        else { 
            form.submit();
        }
    }
}

function notValid(input, element, message) {
    element.classList.add('req');
    element.innerHTML = message;
}

function valid(input, element) {
    element.classList.remove('req');
    element.innerHTML = '';
}
