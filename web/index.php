<html>
<head>
    <style>
        body {
            display: initial;
            height: 100vh;
            margin: 0;
            padding: 0;
        }

        #config_table {
            width: 50em;
            margin: 3em auto 1em;
        }

        @media (max-width: 50em) {
            #config_table {
                width: 100%;
            }
        }

        #config_table tr {
            height: 50px
        }

        #config_table tr td {
            width: 50%
        }

        #config_table tr td input {
            width: 80%;
        }

        #log {
            width: 60em;
            height: 17em;
            margin: 0 auto;
            display: block;
            background: black;
            color: white;
            border: lightgray 6px solid;
            padding: 8px;
            overflow: scroll;
        }
    </style>
    <script src="jquery-3.4.0.min.js"></script>
    <script>
        $(document).ready(function () {
            const config_form = $("#config_form");
            const table = $("#config_table");
            let config;

            $.ajax({
                type: 'GET',
                url: './gm_config',
                success: function (data) {
                    console.log(data);
                    config = JSON.parse(data);
                    config["_keys"].forEach(key => {
                        console.log("loading cfg option: " + key);
                        table.append(`<tr><td>${config[key + "_desc"]}</td><td>${buildInput(config[key + "_type"], key, config[key])}</td></tr>`);
                    });
                    table.append('<tr><td colspan=2><input type="submit" value="Speichern"/></td></tr>');
                }
            });

            function buildInput(type, name, value) {
                if (type === "boolean")
                    return `<select name="${name}"><option value="true"${value === "true" ? " selected" : ""}>True</option><option value="false"${value !== "true" ? " selected" : ""}>False</option></select>`
                return `<input type="${type}" name="${name}" value="${value}"/>`
            }

            //document.getElementById('config_form').onsubmit = function (evt) {
            config_form.submit(function (evt) {
                let dataArray = config_form.serializeArray();
                console.log("saving");
                console.log(dataArray);
                evt.preventDefault();
                dataArray.forEach(object => {
                    config[object.name] = object.value;
                });
                console.log(config);
                $.ajax({
                    type: 'POST',
                    url: './saveConfig.php',
                    data: config,
                    success: function (d) {
                        alert(d);
                    }
                });
            });

            const logObject = {
                filepath: "gm_log",
                timestamp: -1,
                linesrequested: 100,
                content: "",
                first: true
            };

            const span = $("#log");

            function updateLog() {
                $.ajax({
                    type: 'POST',
                    url: './getLog.php',
                    data: logObject,
                    success: function (d) {
                        let o = JSON.parse(d);
                        if (o.timestamp !== logObject.timestamp) {
                            let scrollPos = span.scrollTop() / (span[0].scrollHeight - span.height());
                            Object.assign(logObject, o);
                            span.html(logObject.content);
                            if (logObject.first) {
                                span.scrollTop(span[0].scrollHeight);
                                delete logObject.first;
                            }
                            else if (scrollPos > 0.97) {
                                span.scrollTop(span[0].scrollHeight);
                            }
                        }
                    }
                });
                window.setTimeout(updateLog, 1000);
            }

            updateLog();
        });
    </script>
</head>
<body>
<form id="config_form" method="post">
    <table id="config_table">
        <tbody>
        </tbody>
    </table>
</form>

<span id="log"></span><br>

</body>
</html>
