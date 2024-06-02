const ruMomentCustomization = {
    week: {
        dow: 1 // понедельник
    },
    weekdaysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
};
const enMomentCustomization = {
    week: {
        dow: 1 // Monday
    },
};
// скопировал код и поменял дни недели на кыргызский, а так же создал массив с месяцамми. до конца не понял как js понял, что эти значения нужно подставить в графу месяца.
const kgMomentCustomization = {
    week: {
        dow: 1 // Дуйшомбу
    },
    weekdaysShort: ["Жек", "Дуй", "Шей", "Шар", "Бей", "Жум", "Ише"],
    month: {
        dow: 0
    },
    months: ["Үчтүн Айы", "Бирдин Айы", "Жалган Куран", "Чын Куран", "Бугу", "Кулжа", "Теке", "Баш Оона", "Аяк Оона", "Тогуздун айы", "Жетинин Айы", "Бештин Айы"],
};

String.prototype.capitalize = function (){
    return this[0].toUpperCase() + this.slice(1).toLowerCase();
}
function getCustomizationByCulture() {
    switch (currentCulture) {
        case "en":
            return enMomentCustomization;
        case "ru" :
            return ruMomentCustomization;
            // скопировал код и поменял значения
        case "kg" :
            return kgMomentCustomization;
    }
}

let currentCulture = "en";
moment.updateLocale(currentCulture, getCustomizationByCulture());
let currentDate = moment();


function getWeekdaysNames() {
    return moment.weekdaysShort(true);
}
// создал функцию и привязал к отображению месяцев
function getMonthNames() {
    return moment.calendar-current-date(true);
}

function changeLanguageHandler(event) {
    const selectedLanguage = event.target.dataset.language;
    currentCulture = selectedLanguage;

    moment.updateLocale(currentCulture, getCustomizationByCulture());
    renderCalendar();
}

function renderLanguages() {
    const languagesButtons =
        document.querySelectorAll("input[type=radio]");
    const [ruButton, enButton, kgButton] = [...languagesButtons];

    switch (currentCulture) {
        case "en":
            enButton.checked = true;
            break;
        case "ru":
            ruButton.checked = true;
            break;
            // скопировал код выше и поменял значения
        case "kg":
            kgButton.checked = true;
            break;
    }

    languagesButtons.forEach((button) => {
        button.removeEventListener("change", changeLanguageHandler);
        button.addEventListener("change", changeLanguageHandler)
    });
}

function renderWeekdays() {
    // map: string -> html

    const weekdays = getWeekdaysNames();

    // for(const weekday of weekdays){
    //     const li = document.createElement("li");
    //     li.innerText = weekday;
    // }

    const htmlElements = weekdays.map(function (weekday) {
        const li = document.createElement("li");
        li.innerText = weekday.capitalize();
        return li;
    });

    const calendarWeekdaysContainer = document.querySelector(".calendar-weekdays");
    calendarWeekdaysContainer.innerHTML = "";
    calendarWeekdaysContainer.append(...htmlElements);
    // (li, li, li, li)
    // (...[li, li, li, li]) -> (li, li, li, li)
}

function renderCurrentDate() {
    const calendarCurrentDate = document.querySelector(".calendar-current-date");
    const monthName = moment.months()[currentDate.month()].capitalize();
    calendarCurrentDate.innerText = `${monthName} ${currentDate.year()}`;
}

// function renderDays() {
//     const daysInMonth = currentDate.daysInMonth();
//     const calendarDatesContainer = document.querySelector(".calendar-dates");
//     calendarDatesContainer.innerHTML = "";

//     const firstDayInMonth = currentDate.set("date", 1);
//     const skipDaysCount = firstDayInMonth.weekday();

//     for (let i = 0; i < skipDaysCount; i++) {
//         const li = document.createElement("li");
//         li.innerText = "";
//         calendarDatesContainer.append(li);
//     }

//     const dateNow = moment();

//     for (let i = 1; i <= daysInMonth; i++) {
//         const li = document.createElement("li");
//         li.innerText = i.toString();

//         if (currentDate.format("MM-YYYY") === dateNow.format("MM-YYYY") && dateNow.date() === i) {
//             li.className = "active";
//         }

//         calendarDatesContainer.append(li);
//     }
//     const currentDay = currentDate.set("date", i);
        
//     // Если текущий день - суббота или воскресенье, добавляем стиль для окраски в красный цвет
//     if (currentDay.weekday() === 0 || currentDay.weekday() === 6) {
//         li.style.color = "red";
        
//     }

//     calendarDatesContainer.append(li);
// }
function renderSeason() {
    let getMounth = document.getElementsByClassName('calendar-current-date');
    let getMounthText = getMounth[0].innerText;
    let arr = getMounthText.split('');
    console.log(arr);
    let arrCopy = arr.slice(0,-5);
    console.log(arrCopy);
    let letMonthText = arrCopy.join('');
    console.log(letMonthText);
    
    if (letMonthText == "March" || letMonthText =="April" || letMonthText =="May" || letMonthText == "Март" || letMonthText == "Апрель" || letMonthText == "Май" || letMonthText == "Жалган куран" || letMonthText == "Чын куран" || letMonthText == "Бугу") {
        document.body.style.backgroundColor = "green";
    } else if (letMonthText == "June" || letMonthText =="July" || letMonthText =="August" || letMonthText == "Июнь" || letMonthText == "Июль" || letMonthText == "Август" || letMonthText == "Кулжа" || letMonthText == "Теке" || letMonthText == "Баш оона") {
        document.body.style.backgroundColor = "yellow";
    } else if (letMonthText == "September" || letMonthText =="October" || letMonthText =="November" || letMonthText == "Сентябрь" || letMonthText == "Октябрь" || letMonthText == "Ноябрь" || letMonthText == "Аяк оона" || letMonthText == "Тогуздун айы" || letMonthText == "Жетинин айы" ) {
        document.body.style.backgroundColor = "orange";
    } else if (letMonthText == "December" || letMonthText =="January" || letMonthText =="February" || letMonthText == "Декабрь" || letMonthText == "Январь" || letMonthText == "Февраль" || letMonthText == "Бештин айы" || letMonthText == "Үчтүн айы" || letMonthText == "Бирдин айы") {
        document.body.style.backgroundColor = "blue";
    } 
}


function renderDays() {

    const daysInMonth = currentDate.daysInMonth();
    const calendarDatesContainer = document.querySelector(".calendar-dates");
    calendarDatesContainer.innerHTML = "";

    const firstDayInMonth = currentDate.set("date", 1);
    const skipDaysCount = firstDayInMonth.weekday() - 1;
    
    for (let i = 0; i < skipDaysCount; i++) {
        const li = document.createElement("li");
        li.innerText = "";
        calendarDatesContainer.append(li);
    }

    const dateNow = moment();
    
    for (let i = 1; i <= daysInMonth; i++) {
        const li = document.createElement("li");
        li.innerText = i.toString();

        if(currentDate.format("MM-YYYY") === dateNow.format("MM-YYYY") && dateNow.date() === i){
            li.className = "active";
            
        }
        //  if(i == ) {
        // li.className = "red";
        // }
        const currentDay = currentDate.set("date", i);
        
        // Если текущий день - суббота или воскресенье, добавляем стиль для окраски в красный цвет
        if (currentDay.weekday() === 0 || currentDay.weekday() === 6) {
            li.style.color = "red";
            
        }

        calendarDatesContainer.append(li);

    }
    // for (let day = currentDate.startOf(3); day.isSameOrBefore(currentDate.endOf(5)); day.add(1, 'day')) {
    //     // Если день суббота или воскресенье, применяем стиль красного цвета
    //     if (day.day() === 6 || day.day() === 0) {
    //         console.log(day.format('YYYY-MM-DD') + ' - Красный');
    //     } else {
    //         console.log(day.format('YYYY-MM-DD'));
    //     }
    // }
    
   
}

function renderCalendar() {
    renderCurrentDate();
    renderSeason();
    renderWeekdays();
    renderDays();
    renderLanguages();
}

const [prevBtn, nextBtn] = [...document.querySelectorAll(".calendar-navigation span")];

prevBtn.onclick = () => {
    currentDate.subtract(1, "month");
    renderCalendar();
}

nextBtn.onclick = () => {
    currentDate.add(1, "month");
    renderCalendar();
}

renderCalendar();