@extends('adminlte::page')
@section('template_title')
    {{ $user->name ?? 'Show User' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Show User</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
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
                        <div class="form-group">
                            <strong>Validated:</strong>
                            {{ $user->validated }}
                        </div>
                        <div class="form-group">
                            <strong>Blocked:</strong>
                            {{ $user->blocked }}
                        </div>
                        <div class="form-group">
                            <strong>Coupon:</strong>
                            {{ $user->coupon }}
                        </div>
                        <div class="form-group">
                            <strong>Active Status:</strong>
                            {{ $user->active_status }}
                        </div>
                        <div class="form-group">
                            <strong>Avatar:</strong>
                            {{ $user->avatar }}
                        </div>
                        <div class="form-group">
                            <strong>Dark Mode:</strong>
                            {{ $user->dark_mode }}
                        </div>
                        <div class="form-group">
                            <strong>Messenger Color:</strong>
                            {{ $user->messenger_color }}
                        </div>
                        <div class="form-group">
                            <strong>Google Id:</strong>
                            {{ $user->google_id }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
