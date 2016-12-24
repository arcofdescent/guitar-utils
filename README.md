
## guitar-utils

Utilities for guitar fretboard and audio

### Example usage

```javascript

var gUtils = require('guitar-utils');

var p = gUtils.get_pitch_at(5, 0); // p will be 'A'
var pn = gUtils.get_pitch_number(5, 0); // pn will be 2
var next_p = gUtils.get_next_pitch('C'); // next_p will be 'D'
var prev_p = gUtils.get_prev_pitch('G'); // prev_p will be 'F'
var prev_p = gUtils.get_prev_pitch('F', 1); // prev_p will be 'E'

```
**get_pitch_at** and **get_pitch_number** take two arguments. 
First is the string (1-6),  second is the fret (0-24). 
Fret 0 means open string :)

**get_next_pitch** and **get_prev_pitch** take two arguments. 
First is the pitch,  second is the number of half steps (default is 2)

### Installation

```
npm install guitar-utils

