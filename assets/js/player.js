var repeatPost = 0;

function player() {
    $.post("url1.php", {"id": "", "type": "auto", "siteuser": "", "md5": "7399841f2f2ea09f5886a54b6647beec"},
        function (data) {
            if (data['msg'] == 200) {
                var isiPad = navigator.userAgent.match(/iPad|iPhone|Android|Linux|iPod/i) != null;
                if (data['ext'] == 'link') {
                    document.getElementById('a1').innerHTML = '<iframe width="100%" height="100%" allowTransparency="true" frameborder="0" scrolling="no" src="' + data['url'] + '"></iframe>';
                } else if (isiPad || data['ext'] == 'h5') {
                    document.getElementById('a1').innerHTML = '<video src="' + data['url'] + '" controls="controls" width="100%" height="100%"></video>';
                } else {
                    if (data['ext'] == 'm3u8' || data['ext'] == 'm3u8_list') {
                        var flashvars = {f: '', a: data['url'], c: 0, s: 4, lv: 0, p: 1, v: 100, b: 1}
                    } else if (data['ext'] == 'mp4') {
                        var flashvars = {f: data['url'], c: 0, p: 1, v: 100, h: 1};
                    } else if (data['ext'] == 'xml') {
                        var flashvars = {f: data['url'], s: 2, c: 0, p: 1, v: 100, b: 1};
                    }
                    var params = {
                        bgcolor: '#FFF',
                        allowFullScreen: true,
                        allowScriptAccess: 'always',
                        wmode: 'transparent'
                    };
                    CKobject.embedSWF('http://jx.71ki.com/ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '100%', '100%', flashvars, params);
                }
                $('#loading').hide();
                $('#a1').show();
            } else {
                $('#loading').hide();
                $('#a1').hide();
                $('#error').show();
                if (data['msg']) {
                    $('#error').html(data['msg']);
                } else {
                    if (repeatPost < 4) {
                        var loadingTip = '亲!请稍等,正在重新加载';
                        for (var i = 0; i <= repeatPost; i++) {
                            loadingTip += '.';
                        }
                        $('#error').html(loadingTip);
                        player();
                        repeatPost++;
                    } else {
                        $('#error').html('亲!视频没有播放出来,请刷新一下!');
                    }
                }
            }
        }, "json");
}

player();
