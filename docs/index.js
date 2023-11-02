document.addEventListener('DOMContentLoaded', function () {
    const baseUrl = "http://localhost:3000";
    console.log("API base URL:", baseUrl);

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
        contentDiv.innerHTML = `Services button under maintenance!!.`;
    });

    aboutUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        contentDiv.innerHTML = `About Us button under maintenance!!.`;
    });

    contactUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        contentDiv.innerHTML = `Contact Us button under maintenance!!`;
    });

    function hideOptions() {
        const selectElement = document.getElementById('court');
        const selectedValue = selectElement.value;
        for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].value !== selectedValue) {
                selectElement.options[i].style.display = 'none';
            }
        }
    }

    const form = document.getElementById('contact-form');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', function (event) {
        event.preventDefault();
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

        postToApi(data);
        showPopup();
    });

    function showPopup() {
        alert('Your message has been sent. We value your feedback!');
    }

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

        fetch(url, options)
            .then(response => response.json())
            .then(result => {
                console.log("Sentiment Analysis Result:", result);
                handleSentiments(data, result);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function handleSentiments(data, result) {
        const structuredData = {
            ...data,
            sentiment: result.result.label,
            score: result.result.score
        };
        console.log("Structured Data:", structuredData);
        const resultList = document.getElementById('result-list');
        resultList.innerHTML = '';

        const positiveList = document.getElementById('positiveList');
        const negativeList = document.getElementById('negativeList');

        for (const [key, value] of Object.entries(structuredData)) {
            const listItem = document.createElement('li');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.style.backgroundColor = '#f44336';
            deleteButton.addEventListener('click', () => {
                listItem.remove();
            });
            listItem.textContent = `${key}: ${value}`;
            listItem.appendChild(deleteButton);
            resultList.appendChild(listItem);

            if (value === 'positive') {
                const positiveItem = document.createElement('li');
                positiveItem.textContent = key;
                positiveList.appendChild(positiveItem);
                makePositiveDecision();
            } else if (value === 'negative') {
                const negativeItem = document.createElement('li');
                negativeItem.textContent = key;
                negativeList.appendChild(negativeItem);
                makeNegativeDecision();
            }
        }
    }

    const youtubeLink = document.getElementById('youtubeLink');
    const facebookLink = document.getElementById('facebookLink');
    const twitterLink = document.getElementById('twitterLink');
    const helpLink = document.getElementById('helpLink');

    youtubeLink.addEventListener('click', function () {
        loadSocialMedia('YouTube');
    });

    facebookLink.addEventListener('click', function () {
        loadSocialMedia('Facebook');
    });

    twitterLink.addEventListener('click', function () {
        loadSocialMedia('Twitter');
    });

    helpLink.addEventListener('click', function () {
        loadSocialMedia('Help');
    });

    function loadContent(page) {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `You clicked on the ${page} link.`;
    }

    function loadSocialMedia(platform) {
        const socialMediaContentDiv = document.getElementById('socialMediaContent');
        socialMediaContentDiv.innerHTML = `You clicked on the ${platform} link.`;
    }

    function makePositiveDecision() {
        console.log('The sentiment analysis indicates a positive response.');
        displayPositiveMessage();
    }

    function makeNegativeDecision() {
        console.log('The sentiment analysis indicates a negative response.');
        displayNegativeWarning();
    }

    function displayPositiveMessage() {
        const positiveMessage = document.createElement('p');
        positiveMessage.textContent = 'Thank you for your positive feedback!';
        positiveMessage.style.color = 'green';
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.appendChild(positiveMessage);
    }

    function displayNegativeWarning() {
        const warningMessage = document.createElement('p');
        warningMessage.textContent = 'We apologize for any inconvenience. Please contact us for further assistance.';
        warningMessage.style.color = 'red';
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.appendChild(warningMessage);
    }
});
   





