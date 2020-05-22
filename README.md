# Base4096Hangul

## Mechanism

Split bits into Uint12 digits and plus each element by 0xAC00 to get a Unicode code point.

## Use

### Encoding

```javascript
Base4096Hangul.encodeString('This is the string you want to encode.', { header: 'This is a header. ' })
```

Result:

```
This is a header. 녆둩 댲걩 댲건늆넠 댷끲늖멧긇 땯덒걷눖 면긇끯긆녮 눶뭤뉒먀
```

Notes:

- Options may be omitted.

### Decoding

```javascript
Base4096Hangul.decodeString('녆둩 댲걩 댲건늆넠 댷끲늖멧긇 땯덒걷눖 면긇끯긆녮 눶뭤뉒먀')
```

Result:

```
This is the string you want to encode.
```

## Web App

Try at [neruthes.xyz/Base4096Hangul/](https://neruthes.xyz/Base4096Hangul/).

## Package Management Tools

- NPM: https://www.npmjs.com/package/base4096hangul

## Copyright

Copyright (c) 2020 Neruthes <[neruthes.xyz](https://neruthes.xyz)>.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
