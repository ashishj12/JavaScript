async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network error: ${response.statusText}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new Error("JSON parsing error");
        } else {
            throw error;
        }
    }
}

fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
