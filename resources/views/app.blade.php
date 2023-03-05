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
            /* background-image: url('assets/movifpsostenible_v2.ico');
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size:contain;     */
            background: rgb(247, 251, 247);
            background: linear-gradient(0deg, rgba(247, 251, 247, 1) 34%, rgba(199, 235, 205, 1) 65%, rgba(192, 223, 198, 1) 89%);
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

</body>


</html>