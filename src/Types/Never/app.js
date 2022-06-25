// Never Type
// function plotError(message: string, code: number):never {
//     throw {
//         errorMessage: message,
//         errorCode: code
//     };
// }
// plotError("Internal Server Error", 500);
// Eg2
function infinityLoop() {
    while (true) {
        console.log("Looping...");
    }
}
infinityLoop();
