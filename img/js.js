var tg = window.Telegram.WebApp;
var BackButton = tg.BackButton;
var MainButton = tg.MainButton;

BackButton.show();
MainButton.show();

tg.MainButton.text = "Читать";
// tg.MainButton.color = tg.ThemeParams.button_color;
tg.MainButton.color = 'F8AFA0';

BackButton.onClick(function() {
    BackButton.hide();
    window.location = 'https://qjkey.github.io/ONFObot/books.html'
});

MainButton.onClick(function() {
  MainButton.hide();    
  document.write("228")
});
