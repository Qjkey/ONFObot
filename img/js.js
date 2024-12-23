var tg = window.Telegram.WebApp;
var BackButton = WebApp.BackButton;

BackButton.show();

BackButton.onClick(function() {  
    BackButton.hide();
});
WebApp.onEvent('backButtonClicked', function() {      
    BackButton.hide();          
});
