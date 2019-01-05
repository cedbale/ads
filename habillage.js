<script type="text/javascript">
(function() {

    if ( parent.document) {
       doc = parent.document;
    } else {
        doc = document;
    }

    // BEGIN PARAMETERS
    var mode = 'default'; // Mode = default || default-with-margin || iframe || full
    var defaultWithMarginTop = '10px';
    var timestamp = new Date().getTime();
    var reference = encodeURIComponent(window.location.pathname);
    var backgroundColor = '#FFFFFF';
    var backgroundImage = '%%FILE:JPG1%%';
    var px = new Image();
    px.border=0;
    px.height=1;
    var campaignName = 'autres';
    var campaignVersion = 1;
    var campaignLink = '%%DEST_URL%%';
    px.src = '';
    // END PARAMETERS

    if (px.src != document.location.href && px.src != '') {
        doc.getElementsByTagName('body')[0].appendChild(px);
    }

    var baseStaticUrl = doc.location.protocol + '//static.bioaddict.fr/operations/';
    var hrefAds = '%%CLICK_URL_UNESC%%' + campaignLink;

    if (backgroundColor != null) {
        doc.body.style.backgroundColor = backgroundColor;
    }

    if (backgroundImage != null) {
        doc.body.style.backgroundImage = "url('"+backgroundImage+"')";
    }

    var e = doc.createElement('link');
    e.async = true;
    e.href = baseStaticUrl + 'style.css?' + campaignVersion;
    e.type = 'text/css';
    e.rel = 'stylesheet';
    doc.getElementsByTagName('head')[0].appendChild(e);
    doc.body.onclick = function(ev){

        if (window.event) {
            obj = window.event.srcElement;
        } else {
            obj = ev.srcElement || ev.target;
        }

        if (obj == doc.body) {
            window.open(hrefAds);
        }
    };

    if (mode != 'default') {
        var width = 1000;
        var height = 222;

        if (mode != 'default-with-margin') {
        var divRedirection = doc.createElement('div');
        divRedirection.onclick = function(ev){
            window.open(hrefAds);
        };
        // divRedirection.style.position = 'absolute';
        divRedirection.style.width = '100%';
        divRedirection.style.height = (height+6) + 'px';
        divRedirection.style.zIndex = 10;
        divRedirection.style.textAlign = 'center';

            var styleElement = doc.createElement('style');
            var css = '#exads {display: none;}';
            styleElement.type = 'text/css';

            if (styleElement.styleSheet){
                styleElement.styleSheet.cssText = css;
            } else {
                styleElement.appendChild(doc.createTextNode(css));
            }
    }

        if (mode == 'full') {
            var img = doc.createElement('img');
            img.src = baseStaticUrl + 'large-banner.jpg';
            img.style.width = (width+11) + 'px';
            img.style.height = height + 'px';
            img.style.backgroundColor = backgroundColor;
            divRedirection.appendChild(img);
        } else if (mode == 'default-with-margin') {
            doc.body.getElementsByClassName('precontainer')[0].style.marginTop = defaultWithMarginTop;
        } else {
            var iframe = doc.createElement('iframe');
            iframe.src = baseStaticUrl + 'iframe';
            iframe.style.width = width + 'px';
            iframe.style.height = height + 'px';
            iframe.style.border = '0';
            iframe.style.margin = '0 auto';
            iframe.style.display = 'block';
            iframe.onclick = doc.body.onclick;
            doc.body.insertBefore(iframe, doc.body.firstChild);
        }

        if (mode != 'default-with-margin') {
            doc.body.insertBefore(styleElement, doc.body.firstChild);
            doc.body.insertBefore(divRedirection, doc.body.firstChild);
        }
    }
}());
</script>
