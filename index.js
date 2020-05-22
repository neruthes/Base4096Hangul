// Copyright (c) 2020 Neruthes <https://neruthes.xyz/>
// Published under GNU AGPL v3 <https://www.gnu.org/licenses/agpl-3.0.html>.

const Base4096Hangul = {};

Base4096Hangul.Encode_char = function (uint12) {
    // console.log(uint12);
    return String.fromCodePoint(uint12+0xAC00);
};
Base4096Hangul.Decode_char = function (char) {
    var charCode = char.codePointAt(0);
    return charCode-0xAC00;
};
Base4096Hangul.encodeString = function (rawStr, inputOptions) {
    var options = {
        header: '',
        footer: '',
        randomSpaces: false
    };
    if (inputOptions) {
        Object.keys(inputOptions).map(x => options[x] = inputOptions[x]);
    };
	var rawArr = (new TextEncoder('utf-8')).encode(rawStr);
	var arr = [];
	rawArr.map(function (x) {
		arr.push(x);
	});
	var result_1 = arr.map(function (x) {
		var xbin = x.toString(2);
		if (xbin.length < 8) {
			xbin = (new Array(8-xbin.length)).fill('0').join('') + xbin;
		};
		return xbin;
	}).join('').replace(/(\d{12})/g, '$1 ').trim();
    var result = result_1.split(' ').map(function (x) {
		if (x.length === 12) {
			return Base4096Hangul.Encode_char(parseInt(x, 2));
		} else {
			return Base4096Hangul.Encode_char(parseInt(x + (new Array(12-x.length)).fill(0).join(''), 2));
		};
	}).join('');
    if (result.length > 15 && options.randomSpaces) { // Add random space chars
        var tmp2 = result;
        var tmp2length = tmp2.length;
        var tmp3 = '';
        var tmp3progress = 0;
        while (tmp2.length > 0) {
            var stepLength = Math.floor(Math.random() * 4) + 2;
            var phrase = tmp2.slice(0, stepLength);
            console.log(phrase);
            tmp3 += phrase + [' ', ' ', ' ', ' ', ', ', '. '][Math.floor(Math.random()*6)];
            tmp2 = tmp2.slice(stepLength);
            tmp3progress += stepLength;
        };
        result = (tmp3.trimRight() + '.').replace('..', '.');
    };
    // Use `0xAC00 + 8200` for padding in future
	return options.header + result + options.footer;
};
Base4096Hangul.decodeString = function (rawStr) {
    var str = rawStr.match(/[\uAC00-\uCC09]/g).join(''); // Base8192Hangul in future?
    console.log(str);
	var MyArr = str.split('').map(function (digit) {
		var uint12 = Base4096Hangul.Decode_char(digit);
		var xbin = uint12.toString(2);
		var realXbin = (new Array(12-xbin.length)).fill('0').join('') + xbin;
		return realXbin;
	}).join('').replace(/(\d{8})/g, '$1 ').trim().split(' ').map(function (xbin, i) {
		if (xbin.length === 8) {
			return parseInt(xbin, 2);
		};
	});
    var decodedString = (new TextDecoder('utf-8')).decode(new Uint8Array(MyArr));
    return decodedString;
};

Base4096Hangul.selfTest = function () {
    // Known issue: Cannot compare strings correctly
    var myTestStrings = [
        'Hello world! Can you read United States Constitution?',
        '苟利国家生死以，岂因祸福避趋之。',
        'Le monde va changer de base. Nous ne sommes rien soyons tout.'
    ];
    var test = function (clearTextString, index) {
        var encodedString = Base4096Hangul.encodeString(clearTextString);
        var decodedString = Base4096Hangul.decode(encodedString, { format: 'string.UTF-8' });
        if (clearTextString.trim() == encodedString.trim()) {
            console.log(`[Test ${index}] SUCCESS`);
            return 0;
        } else {
            console.error(`[Test ${index}] FAILED (Cannot reproduce the input string)`);
            console.log(`[Test ${index}] encodedString: ${encodedString}`);
            console.log(`[Test ${index}] originalString: ${clearTextString}`);
            console.log(`[Test ${index}] decodedString: ${decodedString}`);
            return 1;
        }
    };
    var result = myTestStrings.map(test).reduce((a, b) => a + b);
    if (result === 0) {
        console.log('All tests passed');
    } else {
        console.log(`${myTestStrings.length - result} tests passed. ${result} tests failed.`);
    };
};

module.exports = Base4096Hangul;
