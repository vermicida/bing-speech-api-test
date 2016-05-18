"use strict";

(function() {

    /**
     * The properties corresponding the Bing Speech API.
     */
    var properties = {
        "subscriptionKey": "your-bing-speech-api-subscription-key",
        "defaultLocaleId": "es-ES",
        "supportedLocales": [
            { "id": "ar-EG", "name": "Arabic (Egypt)" },
            { "id": "ca-ES", "name": "Catalan" },
            { "id": "zh-CN", "name": "Chinese (China)" },
            { "id": "zh-HK", "name": "Chinese (Hong Kong)" },
            { "id": "zh-TW", "name": "Chinese (Taiwan)" },
            { "id": "da-DK", "name": "Danish" },
            { "id": "nl-NL", "name": "Dutch" },
            { "id": "en-AU", "name": "English (Australia)" },
            { "id": "en-CA", "name": "English (Canada)" },
            { "id": "en-IN", "name": "English (India)" },
            { "id": "en-NZ", "name": "English (New Zeland)" },
            { "id": "en-GB", "name": "English (UK)" },
            { "id": "en-US", "name": "English (US)" },
            { "id": "fi-FI", "name": "Finnish" },
            { "id": "fr-CA", "name": "French (Canada)" },
            { "id": "fr-FR", "name": "French (France)" },
            { "id": "de-DE", "name": "German" },
            { "id": "it-IT", "name": "Italian" },
            { "id": "ja-JP", "name": "Japanese" },
            { "id": "ko-KR", "name": "Korean" },
            { "id": "nb-NO", "name": "Norwegian Bokmål" },
            { "id": "pl-PL", "name": "Polish" },
            { "id": "pt-BR", "name": "Portuguese (Brazil)" },
            { "id": "pt-PT", "name": "Portuguese (Portugal)" },
            { "id": "ru-RU", "name": "Russian" },
            { "id": "es-MX", "name": "Spanish (Mexico)" },
            { "id": "es-ES", "name": "Spanish (Spain)" },
            { "id": "sv-SE", "name": "Swedish" }
        ]
    };

    /**
     * The value definition.
     */
    angular.module("bing-speech-api-test").value("properties", properties);

})();
