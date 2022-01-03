console.log("mainnew file loaded");

jQuery(function() {
    console.log("mainnew document loaded");

    let toggleBlocks = [];
    let toggles = $('[data-toggle-id]');
    toggles.animate({
        height: 'hide'
    }, 500).addClass('collapsed');

    console.log(toggleBlocks);

    console.log($('[data-toggle-id]'));
    $('[data-action="toggle"]').click(function(e) {
        console.log($(this));
        let targetName = $(this).attr('data-target');
        let target = $(`[data-toggle-id="${targetName}"]`);
        let groupName = target.attr('data-toggle-group');
        console.log(target);

        if (!target.hasClass('collapsed')) {

            target.animate({
                height: 'hide'
            }, 500).addClass('collapsed');
        } else {
            if (groupName) {
                $(`[data-toggle-group="${groupName}"]`).animate({
                    height: 'hide'
                }, 500).addClass('collapsed');
            }
            target.animate({
                height: 'show'
            }, 500).removeClass('collapsed');
        }
    });


});