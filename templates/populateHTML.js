const CalendarModule = (function () {

    // Public function
    function populateCalendar(year, month, teacher) {
        const daysInChosenMonth = generateDaysInMonth(year, month); // Example for January 2024
        const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        populateMonthHeader(daysInChosenMonth);

        populateDaysRow(daysInChosenMonth, daysOfWeek);

        populateTime(daysInChosenMonth, teacher);
    }

    function populateTime(daysInChosenMonth, teacher) {
        // Populate calendar body with hours for each day
        const calendarBody = document.getElementById('calendar-body');
        calendarBody.innerHTML = ''; // Clear existing rows if any

        // Create a row for each hour of the day
        for (let hour = teacher.startTime; hour <= teacher.endTime; hour++) {
            const hourRow = document.createElement('tr');

            // First column for the hour
            const hourCell = document.createElement('td');
            hourCell.textContent = `${hour}:00`;
            hourRow.appendChild(hourCell);

            // Following columns for each day
            for (let i = 1; i <= daysInChosenMonth.length; i++) {
                const dayCell = document.createElement('td');
                let occupation = isTimeOccupied (teacher.plannedLessons, i, hour);
                if (occupation.flag && occupation.student){
                    dayCell.classList.add("timeOccupied")
                    if (occupation.startHour === hour ){
                        dayCell.classList.add("start-lesson");
                        dayCell.textContent = `${occupation.student.name} \n ${occupation.student.email}`;
                    }
                    if (occupation.endHour === hour ){
                        dayCell.classList.add("end-lesson")
                    }
                }
                hourRow.appendChild(dayCell);
            }
            calendarBody.appendChild(hourRow);
        }
    }

    function isTimeOccupied (lessons, day, hour) {
        let isOccupied  = {
            flag : false,
            startHour : undefined,
            endHour : undefined,
            student : undefined
        }

        let occupiedBy;
        for (let lesson of lessons){
            if (lesson.startTime.getDate() === day &&
                lesson.startTime.getHours() <= hour &&
                lesson.endTime.getHours() > hour){
                isOccupied.flag = true;
                isOccupied.student = lesson.student
                if (lesson.startTime.getHours() === hour){
                    isOccupied.startHour = hour;
                }
                if (lesson.endTime.getHours() === hour+1){
                    isOccupied.endHour = hour;
                }
                break;
            }
        }
        return isOccupied;
    }

    function populateMonthHeader(daysInChosenMonth) {
        // Populate month name header
        const monthHeaderRow = document.getElementById('monthRow');
        const monthHeader = document.createElement('th');
        monthHeader.textContent = new Date(daysInChosenMonth[0]).toLocaleDateString('en-US', {month: 'long'});
        monthHeader.colSpan = daysInChosenMonth.length + 1;
        monthHeaderRow.appendChild(monthHeader);
    }

    function populateDaysRow(daysInChosenMonth, daysOfWeek) {
        const daysOfWeekRow = document.getElementById('daysOfTheMonth');
        daysInChosenMonth.forEach((day) => {
            const date = new Date(day);
            const formattedDate = `${date.getDate()}, ${daysOfWeek[date.getDay()]}`;
            const th = document.createElement('th');
            th.textContent = formattedDate;
            daysOfWeekRow.appendChild(th);
        });
    }

// Function to generate days in a chosen month
    function generateDaysInMonth(year, month) {
        const days = [];
        const daysInMonth = new Date(year, month, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(year, month - 1, i));
        }
        return days;
    }

    // Public API of the module (exposed functions)
    return {
        populateCalendar: populateCalendar
    };
})();
