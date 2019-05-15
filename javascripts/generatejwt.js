// Assume this was from a successful authentication and stored somewhere
var jwt = 'eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6InhaRGZacHJ5NFA5dlpQWnlHMmZOQlJqLTdMejVvbVZkbTd0SG9DZ1NOZlkifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.AP_CIMClixc5-BFflmjyh_bRrkloEvwzn8IaWJFfMz13X76PGWF0XFuhjJUjp7EYnSAgtjJ-7iJG4IP7w3zGTBk_AUdmvRCiWp5YAe8S_Hcs8e3gkeYoOxiXFZlSSAx0GfwW1cZ0r67mwGtso1I3VXGkSjH5J0Rk6809bn25GoGRjOPu'
var appConfig = {
    GET_CONFIGURATION: 'GET CONFIG',

    receiveMessage: function (event) {
        var data = $.parseJSON(event.data || '{}');

        if (typeof (data) === 'object' && ('key' in data)) {
            if (data.key === appConfig.GET_CONFIGURATION) {

                var eventData = {
                    'jwt': `${jwt}`,
                    'language': "EN",
                    'baseURL': "http://example.com:8080/app1",
                    'appName': "MY APP"
                };

                event.source.postMessage(eventData, event.origin);
                return;
            }
        }

    },
}

// POST MESSAGE
$(document).ready(function () {
    window.addEventListener("message", appConfig.receiveMessage, false);
});
