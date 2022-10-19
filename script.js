$(function() {
    $('.j_audio').jabradoodle({
    showduration: false,
    playtext: '',
    pausetext: '',
    resumetext: '',
    });
    $('.j_audio').one('click', function() {
    var id = $(this).data('idgalera');
    $.post(base_url+'galeracegueta/get_cont', {id: id}, function(resp) {
    $('.j_contarep'+id).text(resp);
    });
    return false;
    });
    });
