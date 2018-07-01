function createDB() {
  var currency
  fetch('https://free.currencyconverterapi.com/api/v5/currencies')
      .then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data.results.AED)
        currency = data.results
        console.log(currency)
      })
  if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
    return;
  }
  idb.open('converter', 1, function(upgradeDb) {
      var store = upgradeDb.createObjectStore('currencies', {
        keyPath: 'id'
      });
      for (let item in currency) {
        store.put({id: currency[item].id, currency: currency[item].currencyName})
      }
  })
}

function readDB() {
  idb.open('converter', 1).then(function(db) {
    var tx = db.transaction(['currencies'], 'readonly');
    var store = tx.objectStore('currencies');
    return store.getAll();
  }).then(function(items) {
    // Use beverage data
    console.log(items)
  });
}

readDB()

createDB()