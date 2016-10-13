var Tag={
    getReferrer:function(){
        var referrer = '';
        try {
            referrer = window.top.document.referrer;
        } catch (e) {
            if (window.parent) {
                try {
                    referrer = window.parent.document.referrer;
                } catch (e2) {
                    referrer = '';
                }
            }
        }
        if (referrer === '') {
            referrer = document.referrer;
        }
        return referrer;
    },
    getQuery:function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    },
    getTag:function(){
        return this.getQuery("tag");
    }
};
window.onload = function(){
       var tag=Tag.getTag();
       var refer=Tag.getReferrer();
       var data={};
       data.tag=tag||"";
       data.refer=refer||"";
       $.post("/extensionUrlContrl/services/addrefer.jsx",data,function(res){
       },"json");
    };