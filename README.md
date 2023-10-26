# Chrome Extension: Domain API Caller

## Description
This Chrome extension allows you to make an API call with the current webpage's domain as a query parameter. When you visit a webpage and click the extension icon, it will open a popup that enables you to make the API call.

## Installation
1. Clone or download this repository to your local machine.

2. Open Google Chrome.

3. Navigate to `chrome://extensions/`.

4. Enable "Developer mode" by toggling the switch at the top right.

5. Click "Load unpacked" and select the directory where you have saved this project.

6. The extension should now be loaded in your Chrome browser.

## Usage
1. Click on the extension icon in your Chrome toolbar to open the popup.

2. In the popup, click the "Call API" button.

3. The extension will make an API call to a local server using the current webpage's domain as a query parameter.

## Local Server (Optional)
If you need a local server to handle API requests from the extension, follow these steps:
1. Create a local server with your preferred technology stack (e.g., Node.js with Express).
2. Ensure that your server listens on a specified address (e.g., `http://localhost:5000`) and is accessible from your extension.

## Configuration
- The extension's manifest file (`manifest.json`) is configured to use `popup.html` as the popup page.
- The `popup.html` file contains the user interface for the extension's popup.
- JavaScript logic for the extension is defined in `popup.js`.
- Modify the JavaScript code to specify the API endpoint, or make any other necessary adjustments to suit your use case.

## Troubleshooting
If the extension doesn't work as expected, please check the following:
- Verify that the manifest file is correctly configured.
- Ensure your local server is running and accessible.
- Review the Chrome Developer Tools console for error messages and debugging information.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- This project is based on the [OpenAI GPT-3](https://beta.openai.com/) model.
- Inspiration for Chrome extension development: [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/).

## Author
- [Shivam Kumar]

Feel free to customize this README with your project's specific details and acknowledgments. This is a basic template to get you started.
