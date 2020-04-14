$(document).ready(function () {
    //-фильтрация проектов
    $('#portfolio-projects').mixItUp();

    let allHideWorks = $('.hide-work'); //-скрытые в портфолио работы

    //-клик по кнопке "Показать все работы"
    $('#show-all-works').on('click', function () {
        $(this).hide()
        $.each(allHideWorks, function (key, item) {
            $(item).show(500)
        })
    })

    //-PLACEHOLDER
    const formRows = document.querySelectorAll('.form-row')
    const formRowsInputs = document.querySelectorAll('.form-row__input')

    // for (let i = 0; i < formRows.length; i++) {

    //     formRows[i].addEventListener('click', function () {
    //         const placeholderElement = this.querySelector('.fake-placeholder')
    //         placeholderElement.classList.add('active')
    //     })

    // }

    for (let i = 0; i < formRowsInputs.length; i++) {
        formRowsInputs[i].addEventListener('focus', function () {
            const thisParent = this.parentElement;
            thisParent.querySelector('span').classList.add('active');
        })
    }

    for (let i = 0; i < formRowsInputs.length; i++) {
        formRowsInputs[i].addEventListener('blur', function () {
            const thisParent = this.parentElement;
            if (this.value == '') {
                thisParent.querySelector('span').classList.remove('active');

            }
        })
    }

    //FORM VALIDATE
    $('#contact-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            theme: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Введите email',
                email: 'отсутсвует символ @'
            },
            theme: {
                required: 'Введите тему сообщения'
            },
            message: {
                required: 'Введите текст сообщения'
            }
        },
        submitHandler: function (form) {
            ajaxFormSubmit();
        }

    })


    // Функция AJAX запрса на сервер

    function ajaxFormSubmit() {

        let string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

        //Формируем ajax запрос
        $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string

            // Функция если все прошло успешно
            success: function (html) {
                $("#contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });

        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
        return false;
    }


})