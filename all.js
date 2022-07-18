var accepted_domains = new Array("http://127.0.0.1:8081/wd");
//設定只有 angeloeyez.blogspot 和 www.cnn.com/aka 這兩個網站可以直接連結這組程式
//你也可以改成"",表示不允許其他任何網站連結這組程式

var domaincheck = document.location.href; 
var accepted_ok = false;
if (domaincheck.indexOf("http") != -1) {
 for (r = 0; r < accepted_domains.length; r++)
  if (domaincheck.indexOf(accepted_domains[r]) != -1) {
   accepted_ok = true;
   break;
  }
} else accepted_ok = true;
if (!accepted_ok) {
 alert("此站站長未經允許擅自盜連這組程式！"); //在該盜連網頁上跳出警告小視窗
 location.href = "https://github.com/HanLinMa"; //強制導向其他網址
}




alert('先執行我吧')
    function attackchk() {
        const data = {
            hwnd: trigdata.captureHwnd,
            key: fb_key.value,
            screenshot_enable: sc_enable
        }

        $.ajax({
            type: 'POST',
            url: '/attackchk',
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify(data),
        });

    }

    function ddkey(ddhwnd, ddkey) {
        const data = {
            hwnd: ddhwnd,
            key: ddkey,
        }

        $.ajax({
            type: 'POST',
            url: '/ddkey',
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify(data),
        });

    }

    function trigger1(hwnd, key) {

        let endpoint = 'http://127.0.0.1:8080/api/keyboard/send?'
        $.ajax({
            type: 'GET',
            url: endpoint + 'hwnd=' + hwnd + '&keyvalue=' + key,
            contentType: "application/json",
            // crossDomain: true,
            // xhrFields: {
            //     withCredentials: true
            // }
            //data: JSON.stringify(trigdata)
        });

    }

    function getimgval() {

        //var image = document.getElementById("imghp")[0].toDataURL("image/jpeg", 1);
        var image = paramP1.imgHp.src;
        //image = image.replace('data:image/png;base64,', '');

        $.ajax({
            type: 'POST',
            url: '/imgval',
            data: '{ "imageData" : "' + image + '" }',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            crossDomain: true,
            success: function (msg) {
                alert('Image saved successfully !');
            }
        });
    }

    //https://toutiao.io/posts/txaibr/preview
    var image = document.getElementById("imghp")
    image.onload = function () {

        //const avg = getAverageRGB(img)
        //console.log("R: " + avg.r + " G: " + avg.g + " B: " + avg.b)

        Tesseract.recognize(canvasHp, {
            tessedit_char_blacklist: 'e',
            progress: function (e) {
                console.log(e)
            }
        }).then(function (d) { console.log(d) })
        //span.style.background = "rgb(" + avg.r + "," + avg.g + "," + avg.b + ")";
        //const rgb = getImageColor(img)
        //const hsl = rgbtohsl(rgb)
        //span.style.background = hsl
    }

    //取得點擊游標位置
    function getCursorPosition(canvas, event) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        //console.log("x: " + x + " y: " + y)
        var pixelData = ctxP1.getImageData(x, y, 1, 1).data;

        if (document.getElementById("contactChoice1").checked) {
            trigdata.xposition = x;
            trigdata.yposition = y;
            trigdata.colorR = pixelData[0];
            trigdata.colorG = pixelData[1];
            trigdata.colorB = pixelData[2];

            document.getElementById('xvalue').value = x.toString();
            document.getElementById('yvalue').value = y.toString();

            //span.style.background = "rgb(" + pixelData[0] + "," + pixelData[1] + "," + pixelData[2] + ")";
            const rgb = [trigdata.colorR, trigdata.colorG, trigdata.colorB]
            const hsl = rgbtohsl(rgb)
            span.style.background = "hsl(" + hsl[0] + "," + hsl[1] + "%," + hsl[2] + "%)";
            trigdata.HSL_H = hsl[0]
            trigdata.HSL_S = hsl[1]
            trigdata.HSL_L = hsl[2]
            document.getElementById('HSL_L').value = hsl[2].toString();

        }
        if (document.getElementById("contactChoice2").checked) {
            trigdata.xposition02 = x;
            trigdata.yposition02 = y;
            trigdata.colorR02 = pixelData[0];
            trigdata.colorG02 = pixelData[1];
            trigdata.colorB02 = pixelData[2];

            document.getElementById('xvalue02').value = x.toString();
            document.getElementById('yvalue02').value = y.toString();

            //span02.style.background = "rgb(" + pixelData[0] + "," + pixelData[1] + "," + pixelData[2] + ")";

            const rgb = [trigdata.colorR02, trigdata.colorG02, trigdata.colorB02]
            const hsl = rgbtohsl(rgb)
            span02.style.background = "hsl(" + hsl[0] + "," + hsl[1] + "%," + hsl[2] + "%)";
            trigdata.HSL_H02 = hsl[0]
            trigdata.HSL_S02 = hsl[1]
            trigdata.HSL_L02 = hsl[2]
            document.getElementById('HSL_L02').value = hsl[2].toString();
        }
        if (document.getElementById("contactChoice3").checked) {
            trigdata.xposition03 = x;
            trigdata.yposition03 = y;
            trigdata.colorR03 = pixelData[0];
            trigdata.colorG03 = pixelData[1];
            trigdata.colorB03 = pixelData[2];

            document.getElementById('xvalue03').value = x.toString();
            document.getElementById('yvalue03').value = y.toString();

            //span03.style.background = "rgb(" + pixelData[0] + "," + pixelData[1] + "," + pixelData[2] + ")";

            const rgb = [trigdata.colorR03, trigdata.colorG03, trigdata.colorB03]
            const hsl = rgbtohsl(rgb)
            span03.style.background = "hsl(" + hsl[0] + "," + hsl[1] + "%," + hsl[2] + "%)";
            trigdata.HSL_H03 = hsl[0]
            trigdata.HSL_S03 = hsl[1]
            trigdata.HSL_L03 = hsl[2]
            document.getElementById('HSL_L03').value = hsl[2].toString();
        }

    }

    const canvas = document.querySelector('canvas')
    canvas.addEventListener('mousedown', function (e) {
        getCursorPosition(canvas, e)
    })



    //var img = document.getElementById('imghp');
    var span = document.getElementById('span');



    //https://icode.best/i/37053540602718
    function getImageColor(img) {
        var canvas = document.createElement('canvas')
        canvas.width = img.width;
        canvas.height = img.height;

        var context = canvas.getContext("2d");
        img.crossOrigin = "Anonymous"
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 获取像素数据
        var data = context.getImageData(0, 0, img.width, img.height).data;
        //console.log(data)
        var r = 1,
            g = 1,
            b = 1;
        // 取所有像素的平均值
        for (var row = 0; row < img.height; row++) {
            for (var col = 0; col < img.width; col++) {
                // console.log(data[((img.width * row) + col) * 4])
                if (row == 0) {
                    r += data[((img.width * row) + col)];
                    g += data[((img.width * row) + col) + 1];
                    b += data[((img.width * row) + col) + 2];
                } else {
                    r += data[((img.width * row) + col) * 4];
                    g += data[((img.width * row) + col) * 4 + 1];
                    b += data[((img.width * row) + col) * 4 + 2];
                }
            }
        }

        //console.log(r, g, b)
        // 求取平均值
        r /= (img.width * img.height);
        g /= (img.width * img.height);
        b /= (img.width * img.height);

        // 将最终的值取整
        r = Math.round(r);
        g = Math.round(g);
        b = Math.round(b);
        console.log(r, g, b)

        return [r, g, b]
    }

    //https://www.w3schools.com/colors/colors_hsl.asp
    function rgbtohsl(rgb) {
        r = rgb[0] / 255;
        g = rgb[1] / 255;
        b = rgb[2] / 255;

        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var l = (min + max) / 2;
        var difference = max - min;
        var h, s, l;
        if (max == min) {
            h = 0;
            s = 0;
        } else {
            s = l > 0.5 ? difference / (2.0 - max - min) : difference / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / difference + (g < b ? 6 : 0);
                    break;
                case g:
                    h = 2.0 + (b - r) / difference;
                    break;
                case b:
                    h = 4.0 + (r - g) / difference;
                    break;
            }
            h = Math.round(h * 60);
        }
        s = Math.round(s * 100); //转换成百分比的形式* 1.5
        l = Math.round(l * 100);// * 0.8
        const str = "hsl(" + h + "," + s + "%," + l + "%)";
        console.log('str', str)
        return [h, s, l]
    }

    function getAverageRGB(imgEl) {

        var blockSize = 5,
            // only visit every 5 pixels
            defaultRGB = {
                r: 0,
                g: 0,
                b: 0
            },
            // for non-supporting envs
            canvas = document.createElement('canvas'),
            context = canvas.getContext && canvas.getContext('2d'),
            data,
            width,
            height,
            i = -4,
            length,
            rgb = {
                r: 0,
                g: 0,
                b: 0
            },
            count = 0;

        if (!context) {
            return defaultRGB;
        }

        height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
        width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

        context.drawImage(imgEl, 0, 0);

        try {
            data = context.getImageData(0, 0, width, height);
        } catch (e) {
            /* security error, img on diff domain */
            alert('x');
            return defaultRGB;
        }

        length = data.data.length;

        while ((i += blockSize * 4) < length) {
            ++count;
            rgb.r += data.data[i];
            rgb.g += data.data[i + 1];
            rgb.b += data.data[i + 2];
        }

        // ~~ used to floor values
        rgb.r = ~~(rgb.r / count);
        rgb.g = ~~(rgb.g / count);
        rgb.b = ~~(rgb.b / count);

        return rgb;

    }
function listBtn() {
  var listBtn = document.getElementById('listBtn');
  var textlistn = document.getElementById('textlistn');
  if (textlistn.style.display === 'none') {
    textlistn.style.display = 'block';
    listBtn.innerText = "隱藏";
  } else {
    textlistn.style.display = 'none';
    listBtn.innerText = "秀出來";
  }
}




