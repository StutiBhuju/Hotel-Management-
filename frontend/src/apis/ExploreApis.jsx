
const baseURL = "http://localhost:3000";


const GetAllRooms = async () => {

    try {

        const response = await fetch(`${baseURL}/api/rooms`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        console.log(data.rooms)

        return data;

    } catch (error) {

        console.log(error);
        return error;

    }

};


export { GetAllRooms };
