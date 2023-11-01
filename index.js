document.addEventListener('DOMContentLoaded', function () {
    const baseUrl = "http://localhost:3000";
    console.log("API base URL:", baseUrl);
///The bASEuRL,the DomContentLoaded Eventlistener to show that the Dom is Loaded//
        ////Navbar EVENT LISTENERS making them  not need to persist after reloading the page.//

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
    
    })
///to make the selection empty on seleting a court name on the courts///
    function hideOptions() {
        const selectElement = document.getElementById('court');
        const selectedValue = selectElement.value;
        for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].value !== selectedValue) {
                selectElement.options[i].style.display = 'none';
            }
        }
    }
  // Code that executes(Variables with stored reference in the element by IDS) on form submission that is on clicking send(eventListeners) the message to show too form the input fields//
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
        alert('Your message has been  we value your feedback!');
    }
///Communicating with the server using Public Api key// 
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

                ///Displaying the posted information/the fetched Public Api data by accessing the  the sentiment data using result.result.label and result.result.score/delete buttons
                const structuredData = {
                    ...data,
                    sentiment: result.result.label,
                    score: result.result.score
                };
                console.log("Structured Data:", structuredData);
                const resultList = document.getElementById('result-list');
                resultList.innerHTML = '';

                for (const [key, value] of Object.entries(structuredData)) {
                    const listItem = document.createElement('li');
                    const deleteButton = document.createElement('button'); // Create the delete button
                    deleteButton.textContent = 'Delete';
                    deleteButton.style.backgroundColor = '#f44336'; // styling the dynamically added delete button Red
                    deleteButton.addEventListener('click', () => {
                      listItem.remove(); // Remove the list item when the delete button is clicked
                    });
                    listItem.textContent = `${key}: ${value}`;
                    listItem.appendChild(deleteButton); // Appending the delete button to the list item
                    resultList.appendChild(listItem);
                  }
            })
            .catch(error => {
                console.error(error);
            });
    }
    // the social Media links variables stored inn references by the Elements by IDS, making them  not need to persist after reloading the page.//

    const youtubeLink = document.getElementById('youtubeLink');
    const facebookLink = document.getElementById('facebookLink');
    const twitterLink = document.getElementById('twitterLink');
    const helpLink = document.getElementById('helpLink');
    const socialMediaContentDiv = document.getElementById('socialMediaContent');

    // The event listeners for youtubeLink, facebookLink, twitterLink, and helpLink

    function loadContent(page) {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `You clicked on the ${page} link.`;
    }

    function loadSocialMedia(platform) {
        const socialMediaContentDiv = document.getElementById('socialMediaContent');
        socialMediaContentDiv.innerHTML = `You clicked on the ${platform} link.`;
    }

