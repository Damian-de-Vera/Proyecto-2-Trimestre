<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>MoviFP Sostenible - Proyecto de innovación educativa</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/movifpsostenible_v2.ico') }}" />
    <!-- Bootstrap icons-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet" />
    <!-- My styles -->
    <style>
        .card {
            margin-top: 1.5rem;
        }

        .showcase3 {
            background-image: url('assets/img/bg-showcase-3.jpg')
        }

        .showcase2 {
            background-image: url('assets/img/bg-showcase-2.jpg')
        }

        .showcase1 {
            background-image: url('assets/img/bg-showcase-1.jpg')
        }

        body {

            background-image: url('assets/movifpsostenible_v2.ico');
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
            background-size: contain;

            /*
        background: rgb(247, 251, 247);
        background: linear-gradient(0deg, rgba(247, 251, 247, 1) 34%, rgba(199, 235, 205, 1) 65%, rgba(192, 223, 198, 1) 89%);
            */
        }

        /*   footer {
        position: fixed;
        height: 100px;
        bottom: 0;
        width: 100%;
}*/
    </style>

    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])

    @inertiaHead
</head>

<body>
    @inertia
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="js/scripts.js"></script>
    <!-- Accessibility Code for "www.movifp.com" -->
    <script>
        window.interdeal = {
            "sitekey": "2b4bc0fe9de2932fe5f032853a056968",
            "Position": "Left",
            "Menulang": "ES",
            "domains": {
                "js": "https://cdn.equalweb.com/",
                "acc": "https://access.equalweb.com/"
            },
            "btnStyle": {
                "vPosition": [
                    "80%",
                    null
                ],
                "scale": [
                    "0.6",
                    "0.6"
                ],
                "color": {
                    "main": "#6e7577",
                    "second": ""
                },
                "icon": {
                    "type": 7,
                    "shape": "semicircle"
                }
            }
        };
        (function(doc, head, body) {
            var coreCall = doc.createElement('script');
            coreCall.src = 'https://cdn.equalweb.com/core/4.4.1/accessibility.js';
            coreCall.defer = true;
            coreCall.integrity =
                'sha512-tq2wb4PBHqpUqBTfTG32Sl7oexERId9xGHX2O3yF91IYLII2OwM1gJVBXGbEPaLmfSQrIE+uAOzNOuEUZHHM+g==';
            coreCall.crossOrigin = 'anonymous';
            coreCall.setAttribute('data-cfasync', true);
            body ? body.appendChild(coreCall) : head.appendChild(coreCall);
        })(document, document.head, document.body);
    </script>

</body>


</html>