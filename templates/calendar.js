/*
should be provided access to the lessonsEvents variable
lessonsEvents - list of the Event Object
https://fullcalendar.io/docs/event-object

which is currently created form user object
 */
function populateCalendar(user, elementID, initialView, viewStyle) {

    // Convert planned lessons to FullCalendar events
    const lessonsEvents = user.lessons.map(lesson => ({
        title: lesson.topic,
        start: lesson.startTime.toISOString(),
        end: lesson.endTime.toISOString(),
        backgroundColor: lesson.paymentStatus ? 'blue' : 'red',
        extendedProps: {
            student: lesson.student
        }
    }));

    return function () {
        const calendarEl = document.getElementById(elementID);
        let calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: initialView,
            selectable: true,
            headerToolbar: viewStyle === 'simple' ? false : {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,timeGridDay'
            },
            buttonText: {
                today: 'Today',
                month: 'Month',
                week: 'Week',
                day: 'Day'
            },
            views: {
                dayGridMonth: {buttonText: 'Month'},
                dayGridWeek: {buttonText: 'Week'},
                dayGridDay: {buttonText: 'Day'}
            },
            events: lessonsEvents,
            eventTimeFormat: {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            },
            eventClick: function (info) {
                const student = info.event.extendedProps.student;
                alert(`${student.name}\nEmail: ${student.email}`);
            },
            eventDidMount: function (info) {
                const timeElement = info.el.querySelector('.fc-event-time');
                const titleElement = info.el.querySelector('.fc-event-title');

                const startTime = formatTime(new Date(info.event.start));
                const endTime = formatTime(new Date(info.event.end));
                const timeText = `${startTime} - ${endTime}`;
                const titleText = info.event.title;

                // Create time and title elements
                if (timeElement) {
                    timeElement.innerHTML = timeText;
                }

                if (titleElement) {
                    titleElement.innerHTML = titleText;
                }

            }
        });
        calendar.render();
    };
}