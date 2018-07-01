window.onload = function () {

  fetch('https://free.currencyconverterapi.com/api/v5/currencies')
  .then((response) => {
    return response.json()
  }).then((data) => {
    let select = document.querySelector('#formControlSelect1')
    let select2 = document.querySelector('#formControlSelect2')

    for (let currency in data.results) {
      // console.log(data.results[currency].id)
      let option = document.createElement('option')
      let option2 = document.createElement('option')

      option.innerHTML = data.results[currency].id
      option2.innerHTML = data.results[currency].id

      select.appendChild(option)
      select2.appendChild(option2)
    }
    console.log(data.results.AED)
  }) 
}

function convert(amount, fromCurrency, toCurrency, cb) {
  
  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);
  var query = fromCurrency + '_' + toCurrency;

  var url = 'https://free.currencyconverterapi.com/api/v5/convert?q='
            + query + '&compact=ultra'

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      try {

        var val = myJson[query];
        console.log(val)
        if (val) {
          var total = val * amount;
          cb(null, Math.round(total * 100) / 100);
        } else {
          var err = new Error("Value not found for " + query);
          console.log(err);
          cb(err);
        }
      } catch(e) {
        console.log("Parse error: ", e);
        cb(e);
      }

    });
}

let amountInput = document.getElementById('amount')
let formControlSelect1 = document.getElementById('formControlSelect1')
let formControlSelect2 = document.getElementById('formControlSelect2')

var fromCurrency = 'USD' 
var toCurrency = 'PHP'

formControlSelect1.oninput = (e) => {
  fromCurrency = formControlSelect1.value
  console.log('From: ', fromCurrency)
}

formControlSelect2.oninput = (e) => {
  toCurrency = formControlSelect2.value
  console.log('To: ', toCurrency)
}

amountInput.oninput = (e) => {
  let amount = amountInput.value
  if (amount) {
    convert(amount, fromCurrency, toCurrency, function(err, amount) {
      document.getElementById('result').value = amount
      console.log(amount);
    });
  }
}

