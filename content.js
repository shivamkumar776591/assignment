chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "addDomainToQueryParam") {
        const domain = window.location.hostname;
        const apiUrl = `http://localhost:5000/?domain=${domain}`;
        window.location.href = apiUrl;
    }
});
