# Uqudo Capacitor Plugin Demo Sample App

This project is a sample Ionic Capacitor application that demonstrates the usage of the Uqudo Capacitor Plugin for passport onboarding with facial recognition.

## Prerequisites

Before you begin, ensure you have the following prerequisites in place:

- Ionic Capacitor installed on your development machine
- Knowledge of TypeScript and JavaScript programming
- Access to the Uqudo SDK and an access token

## Setup and Installation

1. Create a new Ionic Capacitor project or use an existing one.

2. Add the Uqudo Capacitor Plugin to your project.

    ```sh
    npm install uqudosdk-capacitor
    ```

3. Open the TypeScript or JavaScript file where you want to use the Uqudo Capacitor Plugin. In this example, it's the `Home.tsx` file.

4. Include the following code snippet in your TypeScript or JavaScript file. Replace the `ACCESS_TOKEN_HERE` placeholder with your actual access token.

## Running the App

1. Connect a physical device or use an emulator.

2. Build and run the Ionic Capacitor application using the following command:

    ```sh
    ionic capacitor run android   # For Android
    ionic capacitor run ios       # For iOS
    ```

## Features

- Passport onboarding
- Facial recognition
- Handling enrollment results

## How It Works

1. The `plugin.init()` method is called to initialize the Uqudo Capacitor Plugin.

2. When the "Enroll" button is clicked, the `enroll()` function is invoked to begin the onboarding process.

3. The `window.addEventListener("TraceEvent", ...)` method listens to trace events and logs them to the console.

4. The Uqudo SDK is used to create a document and an enrollment object with the specified configuration.

5. The result of the enrollment process is displayed in an alert and logged to the console.

## Notes

- Customize the project according to your needs and refer to the [official Uqudo SDK documentation](http://docs.uqudo.com/docs/) for more details and configurations.
- Ensure that you have added the Uqudo Capacitor Plugin to your project using `npm install uqudosdk-capacitor`.
- Replace the `ACCESS_TOKEN_HERE` placeholder with your actual access token for the Uqudo SDK.
- Make sure to handle errors and edge cases as needed for your specific use case.
