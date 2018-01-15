var FileUpload = {
    //将文件信息转换为base64
    readBlobAsDataURL: function (blob, callback) {
        var a = new FileReader();
        a.onload = function (e) {
            callback(e.target.result);
        };
        a.readAsDataURL(blob);
    },
    dataURLtoBlob: function (dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime});
    },
    drawDataURLToCanvas:function (canvas,dataurl) {
        var img = new Image();
        img.onload = function(){
            canvas.drawImage(img);
        };
        img.src = dataurl;
    }
};