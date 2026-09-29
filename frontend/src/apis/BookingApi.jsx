
const baseURL = "http://localhost:3000";


const CreateBooking = async (bookingData) => {

    try {

        const response = await fetch(`${baseURL}/api/bookings`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        });

        const data = await response.json();

        return data;

    } catch (error) {

        console.log(error);

        return error;

    }

};

const GetMyBookings = async () => {
    try {
        const response = await fetch(`${baseURL}/api/bookings/my`,
            {
                method: "GET",
                credentials: "include", headers: { "Content-Type": "application/json" }
            }); const data = await response.json(); console.log("My Bookings:", data.bookings); return data;
    } catch (error) { console.log(error); return error; }
};

const CancelBooking = async (bookingId) => {
    try {
        const response = await fetch(`${baseURL}/api/bookings/${bookingId}/cancel`, { method: "PATCH", credentials: "include", headers: { "Content-Type": "application/json" } }); const data = await response.json(); return data;
    } catch (error) { console.log(error); return { success: false, message: "Failed to cancel booking" }; }
};



export { CreateBooking, GetMyBookings, CancelBooking };

