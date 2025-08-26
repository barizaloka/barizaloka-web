<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barizaloka Group</title>
    @vite('resources/css/app.css')
</head>

<body class="bg-gray-50 text-gray-800">
    <main>
        @yield('content')
    </main>

    @include('layouts._components.footer')
</body>

</html>