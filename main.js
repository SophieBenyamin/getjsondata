function ajaxRequest(params) {
    var url = 'https://api.coingecko.com/api/v3/exchange_rates'
    var datajson = [];
    $.get(url).then(function (res) {       
        for (currencycode in res.rates) {
            currencyobj = res.rates[currencycode];
            datajson.push({
                "currencycode": currencycode,
                "name": currencyobj.name,
                "type": currencyobj.type,
                "unit": currencyobj.unit,
                "value": currencyobj.value
            });
        }
        params.success(datajson)
    });
}
