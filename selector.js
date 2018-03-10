$(document).ready(function() {
    $("#e1").select2({templateResult: formatState,
        width: '500px'
    });
    $('#e1').on('select2:select', function (e) {
        console.log(e.params.data.id+'.jpg');
        froggerImage.src = 'thumbs/' + e.params.data.id+'.jpg';
        // Do something
    });

});
function formatState (shadam) {
    if (!shadam.id) {
        return shadam.text;
    }
    var baseUrl = "thumbs";
    var $state = $(
        '<span><img src="' + baseUrl + '/' + shadam.element.value + '.jpg" class="img-flag" /> ' + shadam.text + '</span>'
    );
    return $state;
};
