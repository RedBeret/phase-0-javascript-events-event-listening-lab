function addingEventListener() {
    const clickMe = document.getElementById('button');
    clickMe.addEventListener('click', e => {
        alert('I was clicked!');
        // console.log("I was clicked!");
    });
};
addingEventListener();
