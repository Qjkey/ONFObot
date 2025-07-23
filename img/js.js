var tg = window.Telegram.WebApp;

var BackButton = tg.BackButton;

BackButton.show();

BackButton.onClick(function() {
    BackButton.hide();
    tg.exitFullscreen() 
    window.location = 'https://qjkey.github.io/ONFObot/books.html';
});
tg.onEvent('backButtonClicked', function() {
    BackButton.hide();
});

app.post("/create-invoice", async (req, res) => {

  const invoiceLink = await botApi.createInvoiceLink(
    "Title", //title
    "Some description", //description
    "{}", //payload
    "", // For Telegram Stars payment this should be empty
    "XTR", //currency
    [{ amount: 1, label: "Diamond" }], //prices
  );

  res.json({ invoiceLink });
});

const { invoiceLink } = await useGetInvoiceLink();

WebApp.openInvoice(invoiceLink, (status) => {
  if (status === "paid") {
    alert('Спс');
  }
});
