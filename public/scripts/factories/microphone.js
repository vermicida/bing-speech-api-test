"use strict";

(function() {

    /**
     * This factory wraps the MicrophoneClient from the Microsoft Speech SDK to make it compatible with AngularJS.
     */
    function $microphone($q) {

        // The default dictation mode.
        var dictationMode = Microsoft
            .ProjectOxford
            .SpeechRecognition
            .SpeechRecognitionMode
            .longDictation;

        /**
         * The $microphone class.
         */
        return function(subscriptionKey, locale) {

            var deferred;

            // Create a new MicrophoneClient using the given subscription key and locale.
            var client = Microsoft
                .ProjectOxford
                .SpeechRecognition
                .SpeechRecognitionServiceFactory
                .createMicrophoneClient(
                    dictationMode,
                    locale,
                    subscriptionKey,
                    subscriptionKey
                );

            // Resolve the deferred object when a transcript is received.
            client.onFinalResponseReceived = function(response) {
                
                deferred.resolve(response);
            };

            // Reject the deferred object when an error occurs.
            client.onError = function(code, response) {

                deferred.reject(code, response);
            };

            /**
             * Starts the microphone recording.
             */
            this.startRecording = function() {

                // Creaete a new deferred object. It will resolve
                // the transcript regarding the current recording.
                deferred = $q.defer();
                
                client.startMicAndRecognition();
            };

            /**
             * Ends the microphone recording.
             */
            this.stopRecording = function() {
                
                client.endMicAndRecognition();
                
                return deferred.promise;
            };
        };
    }

    /**
     * Dependency injection.
     */
    $microphone.$inject = ["$q"];

    /**
     * The factory definition.
     */
    angular.module("bing-speech-api-test").factory("$microphone", $microphone);

})();
