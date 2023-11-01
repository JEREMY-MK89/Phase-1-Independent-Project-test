// Code that executes when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Code that executes when the DOM is fully loaded
   /// const sections = document.querySelectorAll('.section');
   const baseUrl = "http://localhost:3000";
    console.log("API base URL:", baseUrl);

    ////Navbar EVENT LISTENERS 
    const homeLink = document.getElementById('homeLink');
    const galleryLink = document.getElementById('galleryLink');
    const servicesLink = document.getElementById('servicesLink');
    const aboutUsLink = document.getElementById('aboutUsLink');
    const contactUsLink = document.getElementById('contactUsLink');
    const contentDiv = document.getElementById('content');

    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        contentDiv.innerHTML = `BUTTON COMING SOON!!!!.`;
    });

    galleryLink.addEventListener('click', function (event) {
        event.preventDefault();
        contentDiv.innerHTML = `BUTTON COMING SOON!!.`;
    });

    servicesLink.addEventListener('click', function (event) {
        event.preventDefault();
        contentDiv.innerHTML = `You clicked on the Services link!!.`;
    });

    aboutUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        contentDiv.innerHTML = `You clicked on the About Us link!!.`;
    });

    contactUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        contentDiv.innerHTML = `You clicked on the Contact Us link!!`;
    });

})

////THE FORM with the Add event listener for the "Send" button to send and  pop up msg


const form = document.getElementById('contact-form');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const data = {
        name: name,
        email: email,
        phone: phone,
        message: message

    };

    postToApi(data); // Call the function to make an asynchronous request to the server or API
    showPopup(); // Call the function to show the popup message
  
    });

    function showPopup() {
        alert('Your message has been sent!');
    }

    ///making an asynchronous request to the server or Public API to post data with the key

    function postToApi(data) {
        const url = 'https://sentiment-analysis40.p.rapidapi.com/api/sentiment';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '989cc5d3d5msh893be13c94e2f79p156b4cjsn100fd12716d6',
                'X-RapidAPI-Host': 'sentiment-analysis40.p.rapidapi.com',
            },
            body: JSON.stringify({
                language: 'en',
                text: document.getElementById('message').value
            })
        };
    }