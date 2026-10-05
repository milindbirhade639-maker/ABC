// Display welcome message

function showMessage() {

    document.getElementById("message").innerHTML =
        "Cloud computing provides computing resources over the Internet!";
}


// Display service information

function showService(service) {

    let message = "";

    if (service === "IaaS") {

        message =
            "IaaS provides virtual machines, storage, servers and networking.";

    } 
    else if (service === "PaaS") {

        message =
            "PaaS provides a platform for developing and deploying applications.";

    } 
    else if (service === "SaaS") {

        message =
            "SaaS provides ready-to-use software applications through the Internet.";
    }

    document.getElementById("serviceMessage").innerHTML = message;
}