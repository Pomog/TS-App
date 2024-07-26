/**
should be provided access to the lessonsEvents variable
lessonsEvents - list of the Event Object
which is currently created form user object
https://fullcalendar.io/docs/event-object

@param {Object} user - The object of a teacher or a student.
@param {string} elementID - The ID of the HTML element where the calendar will be rendered.
@param {string} initialView - A name of the available views, such as 'dayGridWeek', 'timeGridDay', 'listWeek' .
@param {string} viewStyle - The style of the view ('default' or 'simple').

@returns {Function} A function that initializes and renders the FullCalendar.
*/
function populateCalendar(user, elementID, initialView, viewStyle) {
    // Check if the required parameters are present
    if (!user || !elementID || !initialView || !viewStyle) {
        const errorMessage = "Error: Missing required parameters. Please provide user, elementID, initialView, and viewStyle.";
        return function() {
            const calendarEl = document.getElementById(elementID);
            if (calendarEl) {
                calendarEl.innerHTML = `<div style="color: red;">${errorMessage}</div>`;
            } else {
                console.error(errorMessage);
            }
        };
    }

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
