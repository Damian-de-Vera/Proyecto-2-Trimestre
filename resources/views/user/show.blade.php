@extends('adminlte::page')
@section('template_title')
    {{ $user->name ?? 'Usuario' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Usuario</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('users.index') }}"> Volver</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Avatar:</strong>
                      <img src="/storage/assets/img/{{ $user->avatar }}" class="rounded img-fluid" width="300" height="250" alt="avatar">    
                        </div>
                        <div class="form-group">
                            <strong>Name:</strong>
                            {{ $user->name }}
                        </div>
                        <div class="form-group">
                            <strong>Email:</strong>
                            {{ $user->email }}
                        </div>
                        <div class="form-group">
                            <strong>Admin:</strong>
                            {{ $user->admin }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
