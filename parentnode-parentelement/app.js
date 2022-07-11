// Sự khác nhau giữa parentNode và parentElement
// parentElement có thể null còn parentNode thì không
// document.documentElement -> lấy thẻ html
log(document.documentElement.parentElement); // null
log(document.documentElement.parentNode); // #document
