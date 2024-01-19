const registerStepOne = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const year = document.getElementById('year').value;

    const dateOfBirth = new Date(`${year}-${month}-${day}`);
    console.log(dateOfBirth);

    data = {
        name: name,
        email: email,
        dateOfBirth: dateOfBirth,
    };
    postData('http://localhost:3000/localSignupStepOne', data);
};
