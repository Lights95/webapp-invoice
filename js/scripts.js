/*jshint esversion: 6*/
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
const button = document.getElementById('button');

loadJSON('data/ex.json');

button.addEventListener("click", function(){
    loadJSON('data/example2.json');
});

function loadJSON(file) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', file, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                var data = JSON.parse(xobj.responseText);

                data.total = 0;

                for (var i=0; i<data.services.length; i++) {
                    data.services[i].position = i+1;
                    data.services[i].total = data.services[i].hours*data.services[i].fee;
                    data.total += data.services[i].total;
                }

                ReactDOM.render(<Layout data={data}/>, app);
            }
        };
        xobj.send(null);
}
