var header = (() => {
    var callback = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        var url = $(evt.target).attr('href');

        $.ajax(url, { dataType: 'text' })
            .then((content) => {
                let names = url.split('.');
                $modal_title.html(names[0]);
                $modal_content.html(content).parent().show();
            });
    };

    var close = (evt) => {
        $modal_title.html('');
        $modal_content.html('');
        $modal.hide();
    };


    var init = () => {
        $header.on('click', '> [rel|=js]', callback);
        $modal.find('[rel=btn-close]').click(close);
    };

    var $header = $("[rel=js-header]");
    var $modal = $('[rel=js-modal]');
    var $modal_title = $modal.find('[rel=js-modal-title]');
    var $modal_content = $modal.find('[rel=js-modal-content]');

    return { init: init };

})();
$(document).ready(header.init);