//test.js
// Combined code with both functionalities
(function () {
    window.onkeydown = function (event) {
        if (event.keyCode === 220) {
            toggleCustomCursor();
        } else if (event.keyCode === 192) {
            runJavaScriptPrompt();
        }
    };

    function toggleCustomCursor() {
        (function () {
            var style = document.createElement('style');
            style.innerHTML = '* { cursor: none !important; }';
            document.head.appendChild(style);
            var customCursor = document.createElement('img');
            customCursor.src = 'https://i.ibb.co/0sk7SFG/cat-cursor.png';
            customCursor.style.position = 'fixed';
            customCursor.style.top = '0';
            customCursor.style.left = '0';
            customCursor.style.zIndex = '999999';
            customCursor.style.width = '3%';
            customCursor.style.height = 'auto';
            customCursor.style.pointerEvents = 'none';
            document.body.appendChild(customCursor);

            function updateCustomCursorPosition(event) {
                customCursor.style.top = (event.clientY - customCursor.height / 2) + 'px';
                customCursor.style.left = (event.clientX - customCursor.width / 2) + 'px';
                var bgColor = getComputedStyle(document.body).backgroundColor;
                var brightness = calculateBrightness(bgColor);
                if (brightness < 128) {
                    customCursor.style.filter = 'invert(100%)';
                } else {
                    customCursor.style.filter = 'none';
                }
            }
            document.addEventListener('mousemove', updateCustomCursorPosition);

            function calculateBrightness(color) {
                var match = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                if (!match) return null;
                var r = parseInt(match[1]);
                var g = parseInt(match[2]);
                var b = parseInt(match[3]);
                return (r * 299 + g * 587 + b * 114) / 1000;
            }
        })();
    }

    function runJavaScriptPrompt() {
        (function () {
            var code = prompt("Enter JavaScript code to run:");
            if (code) {
                var script = document.createElement('script');
                script.textContent = code;
                document.body.appendChild(script);
            } else {
                alert("No code provided!");
            }
        })();
    }

    // Cat2.js code
    var _0x4328 = function (_0x3740de, _0x8729f5) {
        var _0x3acaeb = _0x3aca();
        return _0x4328 = function (_0x43289f, _0x3c89a5) {
            _0x43289f = _0x43289f - 0xc5;
            var _0xb8b29b = _0x3acaeb[_0x43289f];
            return _0xb8b29b;
        }, _0x4328(_0x3740de, _0x8729f5);
    };

    function _0x3aca() {
        var _0x21b404 = ['16px', 'fontFamily', '20px', 'left', 'pageX', 'preventDefault', '200px', '#fff', '11052VCwHCg', 'appendChild', 'style', 'mouseup', '470939ylIIxu', 'offsetLeft', 'borderRadius', 'addEventListener', 'pageY', 'remove', 'top', 'Url?', 'href', 'width', 'zIndex', 'innerHTML', 'onhashchange', 'offsetTop', 'getElementsByTagName', '12eqsJxP', 'onclick', '10px', 'then', '205mokRJc', 'span', 'border', '951071TXRAiP', 'backgroundColor', 'div', 'color', 'Launch ByeSecurly', '3fKRmuK', '421546xcyWnZ', '1904VAXUjh', '10TzIRdA', 'fontSize', 'location', 'float', '&times;', 'cursor', 'mousemove', 'src', '0 0 10px rgba(0, 0, 0, 0.5)', 'toString', 'pointer', '#f7f7f7', 'mousedown', '17591BTUZxQ', '1675440CMmlez', 'fixed', '427689XTmBqn', 'right', 'createElement'];
        _0x3aca = function () {
            return _0x21b404;
        };
        return _0x3aca();
    }(function (_0x373394, _0x408de1) {
        var _0x2b4463 = _0x4328,
            _0x4ae912 = _0x373394();
        while (!![]) {
            try {
                var _0x1d8288 = parseInt(_0x2b4463(0xcd)) / 0x1 + -parseInt(_0x2b4463(0xe9)) / 0x2 * (parseInt(_0x2b4463(0xe8)) / 0x3) + -parseInt(_0x2b4463(0xc9)) / 0x4 * (parseInt(_0x2b4463(0xe0)) / 0x5) + -parseInt(_0x2b4463(0xf9)) / 0x6 + parseInt(_0x2b4463(0xf8)) / 0x7 * (parseInt(_0x2b4463(0xea)) / 0x8) + parseInt(_0x2b4463(0xfb)) / 0x9 * (-parseInt(_0x2b4463(0xeb)) / 0xa) + -parseInt(_0x2b4463(0xe3)) / 0xb * (parseInt(_0x2b4463(0xdc)) / 0xc);
                if (_0x1d8288 === _0x408de1) break;
                else _0x4ae912['push'](_0x4ae912['shift']());
            } catch (_0x19895d) {
                _0x4ae912['push'](_0x4ae912['shift']());
            }
        }
    }(_0x3aca, 0x50feb));

    (function () {
        var _0x60ab66 = _0x4328,
            _0x51b539 = document[_0x60ab66(0xfd)]('div'),
            _0x3d963c = document[_0x60ab66(0xfd)](_0x60ab66(0xe5)),
            _0x3fbc48 = document[_0x60ab66(0xfd)](_0x60ab66(0xe1)),
            _0x1651fe = document[_0x60ab66(0xfd)]('button');
        _0x51b539[_0x60ab66(0xcb)][_0x60ab66(0xd1)] = _0x60ab66(0xfa), _0x51b539['style'][_0x60ab66(0xd3)] = _0x60ab66(0x100), _0x51b539[_0x60ab66(0xcb)][_0x60ab66(0xd8)] = '20px', _0x51b539[_0x60ab66(0xcb)][_0x60ab66(0xe4)] = '9999', _0x51b539[_0x60ab66(0xcb)][_0x60ab66(0xcf)] = _0x60ab66(0xf6), _0x51b539['style'][_0x60ab66(0xce)] = _0x60ab66(0xf3), _0x51b539[_0x60ab66(0xcb)][_0x60ab66(0xd4)] = _0x60ab66(0xcf), _0x51b539[_0x60ab66(0xcb)][_0x60ab66(0xcc)] = _0x60ab66(0xde), _0x3d963c[_0x60ab66(0xcb)][_0x60ab66(0xee)] = _0x60ab66(0xfc), _0x3fbc48[_0x60ab66(0xcb)][_0x60ab66(0xf0)] = _0x60ab66(0xf5), _0x3fbc48[_0x60ab66(0xd8)] = _0x60ab66(0xef), _0x3fbc48[_0x60ab66(0xd5)] = function () {
            var _0xf0f5c7 = _0x60ab66;
            _0x51b539[_0xf0f5c7(0xd2)]();
        }, _0x1651fe[_0x60ab66(0xfb)] = _0x60ab66(0xe7), _0x1651fe[_0x60ab66(0xcb)]['fontFamily'] = _0x60ab66(0xff), _0x1651fe[_0x60ab66(0xcb)][_0x60ab66(0xec)] = _0x60ab66(0xfe), _0x1651fe['style']['float'] = _0x60ab66(0xc8), _0x1651fe['style']['backgroundColor'] = '#333', _0x1651fe[_0x60ab66(0xcb)][_0x60ab66(0xcc)] = _0x60ab66(0xdf), _0x1651fe[_0x60ab66(0xcb)][_0x60ab66(0xde)] = _0x60ab66(0xc7), _0x1651fe[_0x60ab66(0xcb)][_0x60ab66(0xe2)] = 'none', _0x1651fe[_0x60ab66(0xcb)][_0x60ab66(0xf1)] = _0x60ab66(0xde), _0x1651fe[_0x60ab66(0xcb)]['cursor'] = _0x60ab66(0xf5), _0x1651fe['onclick'] = function () {
            var _0x40424c = _0x60ab66,
                _0x4f18ec = prompt(_0x40424c(0xd4)),
                _0x4d57a6 = 'https://api.codetabs.com/v1/proxy?quest=';
            fetch(_0x4d57a6 + _0x4f18ec)['then'](_0x4a4cc6 => _0x4a4cc6[_0x40424c(0xe2)]())['then'](_0x188cad => document[_0x40424c(0xfd)](_0x188cad));
            var _0x3aef2b = document[_0x40424c(0xd6)]('*');
            for (var _0x3558bc = 0x0, _0x7d9589 = _0x3aef2b[_0x40424c(0xe0)]; _0x3558bc < _0x7d9589; _0x3558bc++) {
                _0x3aef2b[_0x3558bc][_0x40424c(0xf2)] && (_0x3aef2b[_0x3558bc][_0x40424c(0xf2)] = new URL(_0x3aef2b[_0x3558bc][_0x40424c(0xf2)], _0x4f18ec)[_0x40424c(0xd5)], _0x3aef2b[_0x3558bc][_0x40424c(0xf3)] = _0x4d57a6 + _0x3aef2b[_0x3558bc]['src']);
            }
            window[_0x40424c(0xe8)] = function (_0x35368e) {
                var _0xe67e54 = _0x40424c;
                _0x35368e[_0xe67e54(0xee)](), alert(_0x35368e[_0xe67e54(0xdf)]());
            };

            function _0x1131a0(_0x25007d) {
                var _0x2649d4 = _0x40424c;
                _0x25007d[_0x2649d4(0xee)](), alert(_0x25007d), window[_0x2649d4(0xed)] = new URL(_0x25007d[_0x2649d4(0xf1)], _0x25007d[_0x2649d4(0xef)])[_0x2649d4(0xd5)];
            }
            window[_0x40424c(0xd4)] = _0x1131a0;
        }, _0x3d963c[_0x60ab66(0xca)](_0x1651fe), _0x3d963c[_0x60ab66(0xca)](_0x3fbc48), _0x51b539['appendChild'](_0x3d963c), document[_0x60ab66(0xcf)][_0x60ab66(0xca)](_0x51b539);
        var _0x161c18 = ![],
            _0x534152 = {
                'x': 0x0,
                'y': 0x0
            };
        _0x3d963c['addEventListener'](_0x60ab66(0xf7), function (_0x20f1a9) {
            var _0x59688 = _0x60ab66;
            _0x161c18 = !![], _0x534152['x'] = _0x20f1a9[_0x59688(0xc5)] - _0x51b539[_0x59688(0xce)], _0x534152['y'] = _0x20f1a9[_0x59688(0xd1)] - _0x51b539[_0x59688(0xda)];
        }), document[_0x60ab66(0xd0)](_0x60ab66(0xf1), function (_0x4730c7) {
            var _0x2bec19 = _0x60ab66;
            _0x161c18 && (_0x51b539[_0x2bec19(0xcb)][_0x2bec19(0xd1)] = _0x4730c7[_0x2bec19(0xc5)] - _0x534152['x'] + 'px', _0x51b539[_0x2bec19(0xcb)][_0x2bec19(0xce)] = _0x4730c7[_0x2bec19(0xd1)] - _0x534152['y'] + 'px');
        }), document['addEventListener'](_0x60ab66(0xcc), function () {
            _0x161c18 = ![];
        });
    }());
})();
