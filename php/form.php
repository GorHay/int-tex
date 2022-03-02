<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Анкета</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,600&display=swap"
          rel="stylesheet">
    <link rel="icon" href="../image/icons/icon.svg">
</head>
<body id="top">
<header class="header">
        <div class="wrapper">
            <div class="header__wrapper">
                <div class="header__logo">
                    <a href="../index.html"><img src="../image/logo.png" class="header__logo-link" width="240px"></a>
                </div>
                <nav class="header__nav">
                    <ul class="header__list">
                        <li class="header__item"><a href="../index.html" class="header__link">Статья</a></li>
                        <li class="header__item"><a href="../statistics.html" class="header__link">Графики</a></li>
                        <li class="header__item"><a href="../notes.html" class="header__link">Заметки</a></li>
                        <li class="header__item"><a href="form.php" class="header__link">Анкета</a></li>
                        <li class="header__item"><a href="../external_api.html" class="header__link">Внешний API</a></li>
                    </ul>
                </nav>
                <div class="menu-burger__header">
                    <span></span>
                </div>
            </div>
        </div>
    </header>
    
<main class="main">
    <div class="wrapper">
        <div class="form__wrapper">
            <h1 class="heading">Регистрация нового пользователя</h1>
            <!-- action - Указывает обработчик, к которому обращаются данные формы при их отправке на сервер-->
            <form id="form" class="contact-form" action="create.php" method="post" name="contact-form" enctype="multipart/form-data">
                <div class="short__input">
                    <label for="surname">
                        <p class="head_input">Фамилия<span class="req">*</span>:</p>
                        <input class = "input" type="text" placeholder="Введите фамилию" name="surname" minlength="1" maxlength="12" required>
                    </label>
                    <label for="name">
                        <p class="head_input">Имя<span class="req">*</span>:</p>
                        <input class = "input" type="text" placeholder="Введите имя" name="name" minlength="1" maxlength="12" required>
                    </label>
                    <label for="patronymic">
                        <p class="head_input">Отчество <span class="notReq">(необязательно)</span>:</p>
                        <input class = "input" type="text" placeholder="Введите отчество" name="patronymic" maxlength="12">
                    </label>
                    <label for="email">
                        <p class="head_input">Email<span class="req">*</span>:</p>
                        <input class = "input" type="email" placeholder="example@mail.ru" name="email" required>
                    </label>
                    <label for="password">
                        <p class="head_input">Пароль<span class="req">*</span>:</p>
                        <input class = "input" type="password" id="password" name="password" minlength="8" maxlength="12" placeholder="Введите пароль" required>
                    </label>
                    <label for="secondpassword" id="passwordInput">
                        <p class="head_input">Повторите пароль<span class="req">*</span>:</p>
                        <input class = "input" type="password" name="secondpassword" id="secondpassword" minlength="8" maxlength="12" placeholder="Подтвердите пароль" required>
                        <p  class="span"></p>
                    </label>
                    <label for="role">
                        <p class="head_input">Роль пользователя<span class="req">*</span>:</p>
                        <select class = "input" name="role" id="#role" required>
                            <option>Выберите роль</option>
                            <option value="admin">Администратор</option>
                            <option value="user">Пользователь</option>
                        </select>
                    </label>
                    <label for="reputation">
                        <p class="head_input">Репутация пользователя<span class="req">*</span>:</p>
                        <input class = "input" type="number" name="reputation" placeholder="от 1 до 10" min="1" max="10" required>
                    </label>
                    <label for="date">
                        <p class="head_input">Дата регистрации<span class="req">*</span>:</p>
                        <input class = "input" type="date" name="date" required>
                    </label>
                    <label for = "sex">
                        <p class = "head_input">Пол<span class="req">*</span>:</p>
                        <input class = "radio" type="radio" name="sex" value="male" id = "male" required> 
                            <label for = "male" >Мужской</label>
                        <input class = "radio" type="radio" name="sex" value="famale" id = "famale" required> 
                            <label for = "famale">Женский</label>
                    </label>
                </div>
                <hr>
                <label for="image" class="choice__img">
                    <p class="head_input">Выберите аватар <span class="notReq">(до 1Мб, *.png, *.jpeg)</span>:</p>
                    <input type="file" name="img" placeholder="До 1Мб" accept="image/jpeg, image/png" require>
                </label>
                <label for="about">
                    <p class="head_input">О себе <span>(Необязательно)</span>:</p>
                    <textarea name="about" id="about" placeholder="Расскажите о себе..."></textarea>
                </label>
                <hr>
                <label for = "agreement">
                        <p class = "head_input" style="margin: 0px;">Соглашение об обработке персональных данных<span class = "req">*</span>:</p>
                        <input class = "checkbox" type="checkbox" name="agreement" value="Я даю свое согласие" id = "agreement"> 
                            <label for = "agreement" >Я даю свое согласие</label>
                    </label>
                <hr>
                <button type="button" onclick="validatePassword()" class="form__button">Отправить</button>
                <button type="reset" class="form__button">Очистить форму</button>
            </form>
        </div>
    </div>
</main>
<script src="../js/lightbox-plus-jquery.js"></script>
<script src="../js/validPassword.js"></script>
</body>
</html>