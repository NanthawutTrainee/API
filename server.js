var axios = require('axios');

var express = require('express');
var app = express();
var fs = require("fs");

var config = {
    method: 'get',
    url: 'https://graph.microsoft.com/beta/security/attackSimulation/simulations/e81c22e5-5e90-4391-86e5-ae67d90940b3/report/simulationUsers?$top=999',
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6ImVvdFBhdm56a1hJLTBNcjdDR2dhellLbmhjTFRoMDN0UV9MaWh1ZDZRODgiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83N2I0Y2ZlNy00OTRhLTQ2OTAtYmRiNy1jMzY1YTIwZGRmYjMvIiwiaWF0IjoxNjU4NzM3NTY5LCJuYmYiOjE2NTg3Mzc1NjksImV4cCI6MTY1ODc0MjM0MywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyWmdZTmhYSGY5Q3d6eUxxeW00eldmNXc3VFZ3bWZ1Ly93bGJlanJmNGQzeGtMUGFSOEEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6InRlc3QgYXBpIiwiYXBwaWQiOiJlMGI1OTcyMC0xYTkxLTRlMzItYWE1Yi0xYjVjNTUxNDA5NjEiLCJhcHBpZGFjciI6IjAiLCJnaXZlbl9uYW1lIjoiTWltZXRpY19CSSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjU4LjEzNy44MC4xMzAiLCJuYW1lIjoiTWltZXRpY19CSSIsIm9pZCI6Ijk3MWQ1MzEwLTI0Y2UtNDZkMi04MmYwLWUwMzkxMTI2M2Q4NiIsInBsYXRmIjoiMTQiLCJwdWlkIjoiMTAwMzIwMDFGQzZBQUUyMiIsInJoIjoiMC5BVWtBNTgtMGQwcEprRWE5dDhObG9nM2Zzd01BQUFBQUFBQUF3QUFBQUFBQUFBQkpBTjguIiwic2NwIjoiUmVwb3J0cy5SZWFkLkFsbCBTZWN1cml0eUV2ZW50cy5SZWFkLkFsbCBVc2VyLlJlYWQgcHJvZmlsZSBvcGVuaWQgZW1haWwiLCJzdWIiOiJ2WEFqZnMtX21wN3l3a2Z2MjhjMkx6dndIYVRQRkRXc1hlbzFsM2FEeXNVIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkFTIiwidGlkIjoiNzdiNGNmZTctNDk0YS00NjkwLWJkYjctYzM2NWEyMGRkZmIzIiwidW5pcXVlX25hbWUiOiJNaW1ldGljX0JJQHZzdGVjcy5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJNaW1ldGljX0JJQHZzdGVjcy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJvTTctSndyT1gweWtRd3llcm5aYkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI5YzZkZjBmMi0xZTdjLTRkYzMtYjE5NS02NmRmYmQyNGFhOGYiLCJjNDMwYjM5Ni1lNjkzLTQ2Y2MtOTZmMy1kYjAxYmY4YmI2MmEiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6IlFUYlgtT1g4LXJRejFpdXJ0VzlUVkY3a3NfVV9OQXJtRFljN05GWjhUOU0ifSwieG1zX3RjZHQiOjE0NzkzODQwMDV9.OIgQ4qn6dlO-y6A_NUlA2cpFHFtCP2Wy_i_9Tl1SQoOKo8lNKZ7Aouxl-OzL_PtmXICLVl4hDnrh5tX5Wmyb8VJF1_kRb3uCx1orh4zDhQzspe4iiBAsjyFwm33ufFskiFCU3sN-xbLwjzPcrN__HgBTHT8FDLzdwjzxzawqC3gTEgs2NWyCIcogOE5yirUix3Pj0hdayCYt18yfIgifQRUCtnkXYm89B4lqRkSgdh63FQBINKTcumiNzhQ6ihuGHWl8K78Ghuv6PhHxNEEiCesJJoISJJ7PG-wN9xG3unuRXzJMTxLhqjC409yJFehSwBzXtEj1vFPohXcalRWPkg'
    }
};

app.get('/', function (req, res) {

    axios(config)
        .then(function (response) {
             res.status(200).json(response.data.value).end
            console.log(response.data.value);
        })
        
        .catch(function (error) {
            console.log(error);
        });

    

})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:8081")
})