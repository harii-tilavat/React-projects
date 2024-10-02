const baseUrl = "http://localhost:3000";

export async function fetchAvailablePlace() {
    const res = await fetch(baseUrl + '/places');
    const data = await res.json();

    if (!res.ok) {
        throw new Error("Failed to fetch places!");
    }
    return data.places;
}
export async function updateUserPlaces(places) {
    const response = await fetch(baseUrl + '/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed to update user places!");
    }
    console.log("Response MESSAGE : ", resData.message);

    return resData.message;
}

export async function fetchUserPlaces() {
    const res = await fetch(baseUrl + '/user-places');
    const data = await res.json();
    if (!res.ok) {
        throw new Error("Failed to fetch your places!");
    }
    return data.places;
}