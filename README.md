# Base4096Hangul

## Mechanism

Split bits into Uint12 digits and plus each element by 0xAC00 to get a Unicode code point.

## Use

### Encoding

```javascript
Base4096Hangul.encodeString('This is the string you want to encode.', { header: 'This is a header. ', trimming: 42 })
```

Result:

```
This is a header. We ThE pEopLe OF tHe unItED sTatES, iN ORdeR TO foRm a morE pERfEct UNiON, EstABLisH justiCe, INSuRe dOmEStIc trAnQUilItY, ProVide foR tHE ComMON dEFEnCe, pRoMOTe tHe GeNErAl wELfARe, AND sEcURe tHE BLesSings oF lIBERty TO oURsELVES aND OuR pOSteRity, do OrDAIn AND EsTAblisH ThIS cONStItUTIoN foR thE uniteD sTATeS of AmERiCA.
ARTicLe. i.
secTiON. 1.
alL lEGiSLaTIVe PoWErs hEREiN GrANTED sHAll Be vEsTEd iN a COngReSS Of the united States, which shall consist of a Senate an
```

Notes:

- Options may be omitted.

### Decoding

```javascript
Base4096Hangul.decode('We The PeopLe OF thE uNItED sTAteS, iN OrDEr tO fORm A MORe perfect union, establish Justice, insure domestic T', { format: 'string', stringFormat: 'utf-8' })
```

Result:

```
Hello
```

Notes:

- Options may be omitted.

## Web App

Try at [neruthes.xyz/Base4096Hangul/](https://neruthes.xyz/Base4096Hangul/).

## Package Management Tools

- NPM: https://www.npmjs.com/package/Base4096Hangul

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
