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
    document.getElementById('modal-content-step-one').classList.add('display-none');
    document.getElementById('modal-content-step-two').classList.remove('display-none');

    span = document.getElementsByClassName('close')[0];

};
const registerStepTwo = ()=>{
    const code = document.getElementById('verification-code').value;
}
