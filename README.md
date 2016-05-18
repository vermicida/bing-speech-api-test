
# bing-speech-api-test

This is an example of Bing Speech API using the Microsoft Speech SDK. That simple, no need a further explanation :-)

## Getting started

The first step is to get a subscription key for the [Bing Speech API](https://www.microsoft.com/cognitive-services/en-us/speech-api). You have some pricing options, including a free subscription, so don't worry about it. To use the Cognitive Services you need a Microsoft account, so [create one](https://signup.live.com/signup) if you do not have it already. Once you have requested your subscription key, you will find it in [your subscriptions](https://www.microsoft.com/cognitive-services/en-US/subscriptions) panel; go down and find it under the **Speech - Preview** section. Have it at hand, you will use it in a minute.

Now, clone this repo using the command below:
```bash
$ git clone https://github.com/vermicida/bing-speech-api-test.git
```

Then, install de app dependencies using NPM:
```bash
$ npm install
```

## Configuration

It is time to set your Bing Search API subscription key in the app. Go to the `properties.js` document, in the `./public/scripts/values` path. Look at the `properties` JSON object and locate the `subscriptionKey` property; change its value for your key:

```javascript
var properties = {
    "subscriptionKey": "your-bing-speech-api-subscription-key" // Your subscription key goes here
}
```

You can change the server's port if you want -it is `8080` by default-. Do it this way in the `bs-config.json` document:
```json
{
  "port": 9000
}
```

## Running

You're only one step to talk to the screen. Just run the NPM `dev` script in the root directory:
```bash
$ npm run dev
```

Now, navigate the server in a browser. You can try many languages if you feel polyglot today ;)

## License

Code released under the [MIT license](./LICENSE).
