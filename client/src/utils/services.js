// base url for the backend
export const baseUrl = "http://localhost:5000/api";

// Function for making a POST request to the backend
export const postRequest = async (url, body) => {
  // Send a POST request with JSON content type and provided body
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();

  if (!response.ok) {
    let message;

    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }

    return { error: true, message };
  }
  return data;
};

// function to perform get request
export const getRequest = async (url) => {
  const response = await fetch(url);

  const data = await response.json();

  if (!response.ok) {
    let message = "An error occured...";
    if (data?.message) {
      message = data.message;
    }
    return { error: true, message };
  }

  return data;
};
