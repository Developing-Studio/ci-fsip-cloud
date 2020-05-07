function Nimg(src, width, height) {
    if(src === undefined) {
        return false;
    }
    if(width === undefined) {
        return false;
    }
    if(height === undefined) {
        var height = width;
    }
    var display = 'display:block;background-repeat: no-repeat;';
    document.write('<div style="'+ display + 'background-image: url(\'' + src + '\');background-size:' + width + 'px;width:' + width + 'px;height:' + height + 'px"></div>');
    return true;
    
    
}

//<div style="display:block;background-repeat: no-repeat;background-image:url('src1);background-size: width1"