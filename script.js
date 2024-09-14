const Days = document.getElementById('calendar-days');
const monthYear = document.getElementById('month-year');
const prevbtn = document.getElementById('prev-month');
const nextbtn = document.getElementById('next-month');

const months = [
     'January',
     'February', 
     'March', 
     'April', 
     'May', 
     'June', 
     'July', 
     'August', 
     'September', 
     'October', 
     'November', 
     'December'
];

let currentMonth = new Date().getMonth();
let currentYear =  new Date().getFullYear();

function calendar(month, year){
    Days.innerHTML ="";
    monthYear.innerHTML = `${months[month]}-${year}`;

    const firstDay = new Date(year, month,1).getDay();
    const lastDay = new Date(year, month+1,0).getDate();
    const prld = new Date(year , month, 0).getDate();
    const today = new Date();
    // console.log(firstDay);
    // console.log(lastDay);
    // console.log(today);
    
    for(let i = firstDay-1; i >= 0; i--){
        const lastDate =  document.createElement('div');
        lastDate.textContent = prld-i;
        lastDate.classList.add('lastDate');
        Days.appendChild(lastDate);
    }

    for(let i = 1; i <= lastDay; i++){
        const day = document.createElement('div');
        day.textContent = i;

        if(i === today.getDate() && month === today.getMonth() && year === today.getFullYear()){
            day.classList.add('today');
        }
        Days.appendChild(day);

    }


}

prevbtn.addEventListener('click' , () =>{
    currentMonth--;
    if(currentMonth < 0){
        currentMonth = 11;
        currentYear--;
    }
    calendar(currentMonth, currentYear)
});

nextbtn.addEventListener('click', () =>{
    currentMonth++;
    if(currentMonth >11){
        currentMonth = 0;
        currentYear++;
    }
    calendar(currentMonth, currentYear)
});

calendar(currentMonth, currentYear)
