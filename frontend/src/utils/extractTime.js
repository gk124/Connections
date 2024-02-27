export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const time = `${hours}:${minutes}`;
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1); // Months are zero-based
    const year = date.getFullYear();
    const formattedDate = `${year}-${month}-${day}`; // Format: YYYY-MM-DD
    return `${formattedDate} ${time}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}


//_____________________
//old code

// export function extractTime(dateString) {
// 	const date = new Date(dateString);
// 	const hours = padZero(date.getHours());
// 	const minutes = padZero(date.getMinutes());
// 	return `${hours}:${minutes}`;
// }

// // Helper function to pad single-digit numbers with a leading zero
// function padZero(number) {
// 	return number.toString().padStart(2, "0");
// }