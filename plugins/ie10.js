//ie10及以下都不支持的方法写在此处
if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}
//IE8不支持Date.now()
if (!Date.now) Date.now = function () {return +new Date();};
/*ie8 不支持console*/
window.console = window.console || (function(){
        var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile
            = c.clear = c.exception = c.trace = c.assert = function(){};
        return c;
    })();