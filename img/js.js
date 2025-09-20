var tg = window.Telegram.WebApp;

var BackButton = tg.BackButton;

BackButton.show();

BackButton.onClick(function() {
    BackButton.hide();
    tg.exitFullscreen();
    window.location = 'https://qjkey.github.io/ONFObot/books.html';
});
tg.onEvent('backButtonClicked', function() {
    BackButton.hide();
});

tg.createInvoiceLink(
    "Title", "Some description", "{}", "XTR", [{ amount: 1, label: "Diamond"
);

tg.openInvoice(function() {
  if (status === "paid") {
    alert('Спс');
  }
});
