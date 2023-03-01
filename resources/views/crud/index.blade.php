@extends('adminlte::page')

@section('title', 'Usuarios')

@section('content_header')
<h1>Usuarios Registrados</h1>
@stop

@section('content')
<table>
    @foreach ($users as $user)
    <tr>
        <td>
            {{$user->name}}
        </td>
    </tr>



    @endforeach
</table>
@stop

@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
<script>
    console.log('Hi!');
</script>
@stop