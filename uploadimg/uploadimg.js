(function($){
    $.fn.uploadImg = function(file, show, opt) {
        var me, c;
        opt = typeof(opt) == "object" ? opt : {};
        if(!window.applicationCache && typeof(opt.upapi) == "undefined") {
            alert("please use explore that support html5");
            return false;
        }else if(!window.applicationCache && typeof(opt.upapi) != "undefined") {
            $.ajax
        }
        me = $(this);
        file = (typeof(file) == "string") ? $(file) : file;
        show = (typeof(show) == "string") ? $(show) : show;
        file.change(function(){
            var file = $(this),
                img,
                FR = new FileReader(),
                imgFile,ctx;
            imgFile  = file[0].files[0];
            FR.readAsDataURL(imgFile);
            FR.onload = function(){
                var result = this.result;
                img  = new Image();
                img.onload = function() {
                    ctx.drawImage(img, 0,0, 100, 100);
                }
                img.src = result;
            }
            if(!c) {
                c = document.createElement('canvas');
                c.setAttribute('width', (typeof(opt.width) == "undefined") ? 100 : opt.width);
                c.setAttribute('height', (typeof(opt.height) == "undefined") ? 100 : opt.height);
                $(c).appendTo(show);
                ctx = c.getContext('2d');
            }else {
                ctx = c.getContext('2d');
                ctx.clearRect(0, 0, (typeof(opt.width) == "undefined") ? 100 : opt.width, (typeof(opt.height) == "undefined") ? 100 : opt.height);
           }
        });
        me.click(function(){
            file.trigger('click');
        });
    };
})($);
(function(){
    $("#up_winxin_img").uploadImg('#weixin_img', '#show_up_img');
})();
