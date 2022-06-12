function importUser(id,name){
    var iWidth=320;
    var iHeight=300;
    var iTop = (window.screen.availHeight-30-iHeight)/2;
    var iLeft = (window.screen.availWidth-10-iWidth)/2;
    window.open("/hjoa/mail/getuser_layer.aspx?id="+id+"&name="+name,"name1","height="+iHeight+", width="+iWidth+", top="+iTop+", left="+iLeft);
}

function importUser2(id,name){
    layer.open({
        type: 2,
        title: '人员选择',
        maxmin: false,
        shadeClose: false,
        scrollbar:false,
        area : ['350px' , '350px'],
        offset: 100+'px',
        content: '/hjoa/mail/getuser_layer.aspx?type=2&id='+id+'&name='+name
    });
}

function importUser_layer(toID,Text1){
    parent.layer.open({
        type: 2,
        title: '人员选择',
        maxmin: false,
        shadeClose: false,
        scrollbar:false,
        area : ['350px' , '350px'],
        //offset: (document.body.scrollHeight-340)/2+'px',
        content: '/hjoa/mail/NewChooseUser.aspx?id='+toID+'&name='+Text1
    });
};

function openDialog(openUrl){
    var iWidth=750;
    var iHeight=230;
    var iTop = (window.screen.availHeight-30-iHeight)/2;
    var iLeft = (window.screen.availWidth-10-iWidth)/2;
    window.open(openUrl,"name2","height="+iHeight+", width="+iWidth+", top="+iTop+", left="+iLeft);
}

function openDialog_WH(openUrl,iWidth,iHeight){

    var iTop = (window.screen.availHeight-30-iHeight)/2;
    var iLeft = (window.screen.availWidth-10-iWidth)/2;
    window.open(openUrl,"name3","height="+iHeight+", width="+iWidth+", top="+iTop+", left="+iLeft);
}

function clientBrowser(){

    var u = navigator.userAgent, app = navigator.appVersion;
    mobile=!!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/) && u.indexOf('QIHU') && u.indexOf('Chrome') < 0;
    iPad=u.indexOf('iPad') > -1;

    if(mobile && !iPad)
        return true;
    else
        return false;
}

function popWin_middel_notitle(t, url) {
    w = window.screen.availWidth;
    if (w > 1000)
        parent.parent.layer.open({
            type: 2,
            title: false,
            shadeClose: true,
            scrollbar: false,
            shade: 0.6,
            area: [w * 0.8 + "px", '80%'],
            shift: 0,
            content: url
        });
    else
        parent.parent.layer.open({
            type: 2,
            title: false,
            shadeClose: true,
            scrollbar: false,
            shade: 0.6,
            area: [w * 0.98 + "px", '80%'],
            content: url,

            success: function (layero) {
                $(layero).addClass("scroll-wrapper")
            }
        });
}

function popWin_auto(t,url){
    w=window.screen.availWidth;
    if(w>1000)
        parent.parent.layer.open({
            type: 2,
            title: t,
            shadeClose: true,
            scrollbar:false,
            shade: 0.8,
            area: ["90%", '90%'],
            shift: 0,
            content: url
        });
    else
        parent.parent.layer.open({
            type: 2,
            title: t,
            shadeClose: true,
            scrollbar:false,
            shade: 0.8,
            area: ["90%", '90%'],
            content: url,

            success: function(layero){
                $(layero).addClass("scroll-wrapper")}
        });
}

function popWin(t,url){
    w=window.screen.availWidth;
    if(w>1000)
        parent.parent.layer.open({
            type: 2,
            title: t,
            shadeClose: true,
            scrollbar:false,
            shade: 0.8,
            area: [w*0.8+"px", '90%'],
            shift: 0,
            content: url
        });
    else
        parent.parent.layer.open({
            type: 2,
            title: t,
            shadeClose: true,
            scrollbar:false,
            shade: 0.8,
            area: [w*0.98+"px", '90%'],
            content: url,

            success: function(layero){
                $(layero).addClass("scroll-wrapper")}
        });
}

function popPage(t,url,w,h){
    layer.open({
        type: 2,
        title: t,
        shadeClose: true,
        scrollbar:false,
        shade: 0.8,
        area: [w+"px", h+"px"],
        shift: 0,
        content: url
    });
}

function popLayer(t,url){
    w=window.screen.availWidth;
    if(w>1000)
        layer.open({
            type: 2,
            title: t,
            shadeClose: true,
            scrollbar:false,
            shade: 0.8,
            area: [w*0.6+"px", '90%'],
            shift: 0,
            offset: '0px',
            content: url
        });
    else
        layer.open({
            type: 2,
            title: t,
            shadeClose: true,
            scrollbar:false,
            shade: 0.8,
            area: [w*0.98+"px", '90%'],
            content: url,
            offset: '0px',
            success: function(layero){
                $(layero).addClass("scroll-wrapper")}
        });
}