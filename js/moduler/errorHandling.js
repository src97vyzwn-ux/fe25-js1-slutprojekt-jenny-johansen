// function to display error
export function displayError(error){
    const main = document.querySelector('main');
    main.innerHTML = '';

    const errorMessage = document.createElement('h1');
    errorMessage.innerText = error.Message || error;
    
    main.append(errorMessage);
}

// listener if user is offline and reloads the page when user is online again
export function networkListener() {
    window.addEventListener('offline', () => {
        displayError("Connection lost! Are you offline?");
    });

    window.addEventListener('online', () => {
        window.location.reload(); 
    });
}