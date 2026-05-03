let role = "Employee"; // can chnage to Enrolled Member , Subscriber ,  Non-Subscribe

let method ="else-if";

// else if method
if(method == "else-if"){

if (role === "Employee") {
    console.log("You have access to Dietary Services.");
} 
else if (role === "Enrolled Member") {
    console.log("You have access to Dietary Services and one-on-one interaction with a dietician.");
} 
else if (role === "Subscriber") {
    console.log("You have partial access to Dietary Services.");
} 
else if (role === "Non-Subscriber") {
    console.log("Please enroll or subscribe to access Dietary Services.");
} 
else {
    console.log("Invalid role.");
}
}

//switch method
else if(method =="switch"){
    
    switch(role) {
        case "Employee":
            console.log("You have access to Dietary Services.");
            break;
    
        case "Enrolled Member":
            console.log("You have access to Dietary Services and one-on-one interaction with a dietician.");
            break;
    
        case "Subscriber":
            console.log("You have partial access to Dietary Services.");
            break;
    
        case "Non-Subscriber":
            console.log("Please enroll or subscribe to access Dietary Services.");
            break;
    
        default:
            console.log("Invalid role.");
    }   
}
else{
    console.log("invalid method");
}