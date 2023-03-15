export const getUserByNationality = (nationality) => {
    const requestHeaders = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const url = `https://randomuser.me/api/?nat=${nationality}`;

    return fetch(url, requestHeaders)
        .then((response) => response.json())
        .catch((error) => error);
} 