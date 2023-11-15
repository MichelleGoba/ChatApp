// base url or the backend
export const baseUrl = "http://localhost:5000/api";

// post request function
export const postRequest = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    });


    // to get data and return an error
    const data = await response.json();

    if (!response.ok) {
        let message;

        if (data?.message) {
            message = data.message;
        } else {
            message = data;  // set own custom message set for sever
        }

    
        return { error: true, message };
    }

    return data;
};
