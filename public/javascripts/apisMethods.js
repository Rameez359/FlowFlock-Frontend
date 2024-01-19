const postData = async (url, data) => {
    try {
        const response = fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log(`Local Signup StepOne Ended with Response: [${JSON.stringify(result)}]`);
    } catch (error) {
        console.error('Error:', error);
    }
};
