
## guitar-utils

Utilities for guitar fretboard and audio

### Example usage

```javascript

var gUtils = require('guitar-utils');

var p = gUtils.get_pitch_at(5, 0); // p will be 'A'
var pn = gUtils.get_pitch_number(5, 0); // pn will be 2

```
**get_pitch_at** and **get_pitch_number** take two arguments. 
First is the string (1-6),  second is the fret (0-24). 
Fret 0 means open string :)

### Installation

```
npm install guitar-utils

