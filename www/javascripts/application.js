// Display the native navigation bar with the title "Hello World!"
//steroids.view.navigationBar.show("Hello World!");

// Set the WebView background color to white (effective on iOS only)
//steroids.view.setBackgroundColor("#FFFFFF");

function cameraGetPicture() {
    navigator.camera.getPicture(imageReceived, cameraFail, {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        correctOrientation: true,
        targetWidth: 600
    });
}

function imageReceived(imageURI){
    var image = document.querySelector('img#myImage');
    image.src = imageURI;
}

function cameraFail(message){
    alert("Camera error: " + message);
}