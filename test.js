// $(function(){
//     $('.inner-container img.rounded-image').click(function(e){
//         e.preventDefault();
//         $('.toggle-text').fadeToggle();
//     });
// });

function toggle(ele){
    var divChild = ele.children[2];
    var buttonChild = ele.children[3];
    $(divChild).fadeToggle();
    $(buttonChild).fadeToggle();
}

function togglev2(ele){
    var parentDiv = ele.parentElement;
    var textChild = parentDiv.children[2];
    var buttonChild = parentDiv.children[3];
    $(textChild).fadeToggle();
    $(buttonChild).fadeToggle();
}

function scroll_function(id){
    var ele = document.getElementById(id);
    var rect = ele.getBoundingClientRect();
    console.log(rect.top);
    window.scrollTo({
        top: rect.top,
        behavior: "smooth",
    });
}

// var width = $(".gallery.link").width()
// var image = $(".gallery.image")
// image.css("width", width-2 + "px")

// var image = $(".gallery.image")
// console.log(image.width())
// var caption = $(".gallery.caption")
// caption.css("left", "-" + image.width() + "px")
// caption.css("height", 0.2*image.height() + "px")
// caption.css("width", image.width() + "px")