"use strict";

(function() {

    /**
     * The application main component.
     */
    function app($window, properties, $microphone) {

        var self = this;
        var microphone;

        /**
         * Init the component.
         */
        self.$onInit = function() {

            // The component model.
            self.vm = {};
            self.vm.action = "Record";
            self.vm.recording = false;
            self.vm.transcript = undefined;
            self.vm.transcripts = [];
            self.vm.locales = properties.supportedLocales;
            self.vm.selectedLocale = properties.defaultLocaleId;

            // Create a new microphone client for the default locale.
            createMicrophoneClient();
        };

        /**
         * Reset the current microphone client to handle the selected locale transcriptions.
         */
        self.onLocaleChange = function() {

            createMicrophoneClient();
        };

        /**
         * Toggle the microphone recording.
         */
        self.toggleMicrophone = function() {

            if (self.vm.recording) {

                // Do some UI stuff.
                self.vm.recording = false;
                self.vm.action = "Record";

                // Stop the microphone recording.
                microphone.stopRecording().then(

                    // Pushes the received transcription to the collection.
                    function(response) {
                        self.vm.transcripts.push(response[0]);
                    },

                    // Prints the given error in the console.
                    function() {
                        // The 'code' is usually -1 and the 'response' is always empty, so we print a generic message.
                        $window.console.error("There was an error while transcripting the audio");
                    }
                );
            }
            else {

                // Do some UI stuff.
                self.vm.recording = true;
                self.vm.action = "Stop recording";

                // Start the microphone recording.
                microphone.startRecording();
            }
        };

        /**
         * Create a new microphone client for the selected locale.
         */
        function createMicrophoneClient() {

            microphone = new $microphone(
                properties.subscriptionKey,
                self.vm.selectedLocale
            );

            $window.console.log("A new microphone client for '" + self.vm.selectedLocale + "' locale has been created");
        }
    }

    /**
     * Dependency injection.
     */
    app.$inject = ["$window", "properties", "$microphone"];

    /**
     * The component definition.
     */
    angular.module("bing-speech-api-test").component("app", {
        templateUrl: "./public/views/app.html",
        controller: app
    });

})();
