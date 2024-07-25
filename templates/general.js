// Function to format time
function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}