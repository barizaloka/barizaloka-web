<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>{{ $title ?? env('APP_NAME', 'DigaBlast') }}</title>

    @vite('resources/css/app.css')
    @vite('resources/js/script.js')
</head>

<body>
    @include('layouts._partials.navbar')
    @include('layouts._partials.footer')
</body>

</html>