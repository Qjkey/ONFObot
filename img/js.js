var tg = window.Telegram.WebApp;

var BackButton = tg.BackButton;

BackButton.show();

BackButton.onClick(function() {
    BackButton.hide();
    window.location = 'https://qjkey.github.io/ONFObot/books.html';
});
tg.onEvent('backButtonClicked', function() {
    BackButton.hide();
});
