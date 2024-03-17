let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
let divContainer = document.createElement('div');
divContainer.classList.add('container');
document.body.appendChild(divContainer);

sessions.forEach((session, index) => {
    console.log(session)
    let divSession = document.createElement('div');
    divSession.classList.add('session');
    divSession.innerText = `session${index+1}: ${session.visit}`;
    divContainer.appendChild(divSession);
})
