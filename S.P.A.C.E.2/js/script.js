$(document).ready(function()
{
    $('#content_insert').load('/pages/CSOverview.html');
    
    
    
    
 $('.sub_head').show();
    $('.main_head').click(function() {
        $(this).siblings('.main_head').find('ul').slideUp();
        $(this).find('ul').slideToggle();
    });   
    
    

document.getElementById("avatar").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("content").classList.toggle("show");
}
    

    

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
});

function DisplayCSOverview()
{
    $('#content_insert').load('/pages/CSOverview.html');
}

function DisplayDTP()
{
    $('#content_insert').load('/pages/DTP.html');
}


