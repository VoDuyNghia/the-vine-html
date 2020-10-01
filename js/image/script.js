$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    PSV = new PhotoSphereViewer({
        panorama: 'images/system/' + $('#image_360').val(),
        container: 'your-pano',
        time_anim: 200,
        anim_speed: $('#anim_speed').val() + 'rpm',
        navbar: true,
        default_position: { long: $('#long').val(), lat: $('#lat').val() },
        navbar_style: {
            backgroundColor: 'rgba(58, 67, 77, 0.7)',
        },
        size: {
            width: '100%',
            height: '600px'
        },
    });
})


$('body').on('submit', 'form#formAjax', function(e) {
    e.preventDefault();

    actionURL = $(this).data('url');
    formData = new FormData(this);

    $.ajax({
        type: 'POST',
        url: actionURL,
        data: formData,
        beforeSend: function() {
            Swal.showLoading();
        },
        success: function(data) {
            setTimeout(function() {
                Swal.fire(
                    'Thành công!',
                    'Đăng ký Thành Công!',
                    'success'
                )
                $('#supplier-modal').modal('hide');
                $("#formAjax").load(location.href + " #formAjax>*", "");
            }, 2000);
        },
        error: function(reject) {
            if (reject.status == 422) {
                var error = $.parseJSON(reject.responseText);
                $.each(error.errors, function(key, value) {
                    $('.error-' + key).text(value[0]);
                })

                setTimeout(function() {
                    Swal.fire(
                        'Thất bại!',
                        'Vui lòng điền đầy đủ thông tin trước khi gửi!',
                        'error'
                    )
                }, 300);
            } else {
                setTimeout(function() {
                    Swal.fire(
                        'Thất bại!',
                        'Vui lòng thử lại sau!',
                        'error'
                    )
                }, 300);
            }
        },
        cache: false,
        contentType: false,
        processData: false,
    });
});

$(document).ready(function() {
    $('body').on('keyup', 'input[data-role="check"]', function() {
        $('.error-' + $(this).attr('name')).text('');
    })

    $('body').on('change', 'select[data-role="check"]', function() {
        $('.error-' + $(this).attr('name')).text('');
    });
});

function showContent(id) {
    $.ajax({
        type: 'GET',
        url: '/get_content_service',
        data: {
            service_id: id,
        },
        dataType: 'json',
        success: function(data) {
            document.getElementById('content_service').innerHTML = data.data.content;
            document.getElementById('title_service').innerHTML = data.data.name;
            document.getElementById('price_service').innerHTML = data.data.price;
        },
        error: function(reject) {
            setTimeout(function() {
                Swal.fire(
                    'Thất bại!',
                    'Vui lòng thử lại sau!',
                    'error'
                )
            }, 300);
        },
    });
}

$('body').on('submit', 'form#formSubscriber', function(e) {
    e.preventDefault();

    setTimeout(function() {
        Swal.fire(
            'Thành công!',
            'Đăng ký Thành Công!',
            'success'
        )
        $("#formSubscriber").load(location.href + " #formSubscriber>*", "");
    }, 500);
})