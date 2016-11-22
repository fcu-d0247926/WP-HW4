/*jshint esversion: 6 */

const imgElement = '<img src="http://projectwritten.com/wp-content/uploads/faultseries_icon1.jpg" alt="Fault-Logo" />';

$('document').ready(() => {

    $('#loadPic').click( () => {
        $('#loadPic').hide();
        $('#pic').append(imgElement);
    } );

});
