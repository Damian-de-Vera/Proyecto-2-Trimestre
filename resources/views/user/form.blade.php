<div class="box box-info padding-1">
    <div class="box-body">
        
        <div class="form-group">
            {{ Form::label('name') }}
            {{ Form::text('name', $user->name, ['class' => 'form-control' . ($errors->has('name') ? ' is-invalid' : ''), 'placeholder' => 'Name']) }}
            {!! $errors->first('name', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('email') }}
            {{ Form::text('email', $user->email, ['class' => 'form-control' . ($errors->has('email') ? ' is-invalid' : ''), 'placeholder' => 'Email']) }}
            {!! $errors->first('email', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('admin') }}
            {{ Form::text('admin', $user->admin, ['class' => 'form-control' . ($errors->has('admin') ? ' is-invalid' : ''), 'placeholder' => 'Admin']) }}
            {!! $errors->first('admin', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('validated') }}
            {{ Form::text('validated', $user->validated, ['class' => 'form-control' . ($errors->has('validated') ? ' is-invalid' : ''), 'placeholder' => 'Validated']) }}
            {!! $errors->first('validated', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('blocked') }}
            {{ Form::text('blocked', $user->blocked, ['class' => 'form-control' . ($errors->has('blocked') ? ' is-invalid' : ''), 'placeholder' => 'Blocked']) }}
            {!! $errors->first('blocked', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('coupon') }}
            {{ Form::text('coupon', $user->coupon, ['class' => 'form-control' . ($errors->has('coupon') ? ' is-invalid' : ''), 'placeholder' => 'Coupon']) }}
            {!! $errors->first('coupon', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('active_status') }}
            {{ Form::text('active_status', $user->active_status, ['class' => 'form-control' . ($errors->has('active_status') ? ' is-invalid' : ''), 'placeholder' => 'Active Status']) }}
            {!! $errors->first('active_status', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('avatar') }}
            {{ Form::text('avatar', $user->avatar, ['class' => 'form-control' . ($errors->has('avatar') ? ' is-invalid' : ''), 'placeholder' => 'Avatar']) }}
            {!! $errors->first('avatar', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('dark_mode') }}
            {{ Form::text('dark_mode', $user->dark_mode, ['class' => 'form-control' . ($errors->has('dark_mode') ? ' is-invalid' : ''), 'placeholder' => 'Dark Mode']) }}
            {!! $errors->first('dark_mode', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('messenger_color') }}
            {{ Form::text('messenger_color', $user->messenger_color, ['class' => 'form-control' . ($errors->has('messenger_color') ? ' is-invalid' : ''), 'placeholder' => 'Messenger Color']) }}
            {!! $errors->first('messenger_color', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('google_id') }}
            {{ Form::text('google_id', $user->google_id, ['class' => 'form-control' . ($errors->has('google_id') ? ' is-invalid' : ''), 'placeholder' => 'Google Id']) }}
            {!! $errors->first('google_id', '<div class="invalid-feedback">:message</div>') !!}
        </div>

    </div>
    <div class="box-footer mt20">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>