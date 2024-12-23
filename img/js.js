document.write("Тест")

var tg = window.Telegram.WebApp;
var BackButton = tg.BackButton;

BackButton.show();
BackButton.onClick(function() {
    WebApp.showAlert("BackButton clicked");
    BackButton.hide();
});
WebApp.onEvent('backButtonClicked', function() {
    document.write("Test2222222222")
});
