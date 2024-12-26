var tg = window.Telegram.WebApp;
var BackButton = tg.BackButton;
var MainButton = tg.MainButton;

BackButton.show();
MainButton.show();

tg.MainButton.text = "Читать";

BackButton.onClick(function() {
    BackButton.hide();
    window.location = 'https://qjkey.github.io/ONFObot/books.html'
});

// MainButton.onClick(function() {
//   MainButton.hide();    
//   document.write("228")
// });
