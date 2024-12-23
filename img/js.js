document.write("Тест")

var tg = window.Telegram;
var BackButton = WebApp.BackButton;

BackButton.show();
BackButton.onClick(function() {
    WebApp.showAlert("BackButton clicked");
    BackButton.hide();
});
WebApp.onEvent('backButtonClicked', function() {
    document.write("Test2222222222")
});
