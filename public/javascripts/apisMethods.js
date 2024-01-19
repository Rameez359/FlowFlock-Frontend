const postData = async (url, data) => {
    try {
        const response = fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(`Local Signup StepOne Ended with Response: [${JSON.stringify(result)}]`);
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
};
