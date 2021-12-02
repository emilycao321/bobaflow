function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// dark & light mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

//  const clear = (() => {
//     const defined = v => v !== null && v !== undefined;
//     const timeout = setInterval(() => {
//         const ad = [...document.querySelectorAll('.ad-showing')][0];
//         if (defined(ad)) {
//             const video = document.querySelector('iframe');
//             if (defined(video)) {
//                 video.currentTime = video.duration;
//             }
//         }
//     }, 500);
//     return function() {
//         clearTimeout(timeout);
//     }
// })();

