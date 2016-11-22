/*jshint esversion: 6 */

$('document').ready(() => {

    $('p:first').click( () => {
        $('p:first').hide();
    } );

    $('#second').click( () => {
        $('#second').hide();
    } );

    $('.third').click( () => {
        $('.third').hide();
    } );

});
