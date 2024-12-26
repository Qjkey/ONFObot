var tg = window.Telegram.WebApp;
var BackButton = tg.BackButton;
var MainButton = tg.MainButton;

BackButton.show();
MainButton.show();

tg.MainButton.text = "Читать";

MainButton.onClick(function() {
    MainButton.hide();
    document.write("228");
});
WebApp.onEvent('mainButtonClicked', function() {
    MainButton.hide();    
});

BackButton.onClick(function() {
    BackButton.hide();
    window.location = 'https://qjkey.github.io/ONFObot/books.html';
});
WebApp.onEvent('backButtonClicked', function() {
    BackButton.hide();
});
