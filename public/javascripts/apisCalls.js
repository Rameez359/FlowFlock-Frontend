const registerStepOne = async () => {
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
    const response = await postData('http://localhost:3000/localSignupStepOne', data);
    console.log('Success:', response);

    if (response.statusCode === 200) {
        localStorage.setItem('userId', `${response.response.userId}`);
    }
    document.getElementById('modal-content-step-one').classList.add('display-none');
    document.getElementById('modal-content-step-two').classList.remove('display-none');
};

const registerStepTwo = async () => {
    const code = document.getElementById('verification-code').value;
    const userId = localStorage.getItem('userId');
    const data = {
        code: code,
        userId: userId,
    };

    const response = await postData('http://localhost:3000/localSignupStepTwo', data);
    console.log('Success:', response);

    if (response.statusCode === 200) {
        document.getElementById('modal-content-step-two').classList.add('display-none');
        document.getElementById('modal-content-step-three').classList.remove('display-none');
    }
};

const registerStepThree = async () => {
    const username = document.getElementById('username').value;
    const userId = localStorage.getItem('userId');
    const data = {
        username: username,
        userId: userId,
    };

    const response = await postData('http://localhost:3000/localSignupStepThree', data);
    console.log('Success:', response);

};
