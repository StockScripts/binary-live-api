import { LiveApi, LiveData, RestApi, OAuth } from '../lib/';

function rest() {
    //new OAuth().authorize();

    const restApi = new RestApi('1ODkgtmZbZAGlFXD0gwlhjZxThPW');
    restApi.getMarketsList().then((r) => {
        console.log('response', r);
    });
}

function ws() {
    const liveApi = new LiveApi();
    const liveData = new LiveData('iLEylxcgJAabTQ4jrKwZEfNSvXYN4lcqLtnbLfuVZxyOysCYnW0pp3AJIJHZibUiyGqiaeXrL1S4TMLzAOYeZkjV2G2LTYLQNtp6vN04K1HnWwz7VvMAeAieCVtqR5dS');

    liveData.on('message', function(data) {
        console.log('message', data, LiveData);
    });

    liveApi.getMarketHistory('frxXPDUSD').catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

rest();
