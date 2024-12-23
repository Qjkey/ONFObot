document.write("Тест");

var tg = window.Telegram.WebApp;
var BackButton = tg.BackButton;

BackButton.show();
BackButton.onClick(function() {
    WebApp.showAlert("BackButton clicked");
    BackButton.hide();
});
