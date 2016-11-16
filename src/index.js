
import _ from 'lodash';

// strings, default tuning
const strings = [ 'E', 'B', 'G', 'D', 'A', 'E', ];
const pitches = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', ];

module.exports = {
  
  get_pitch_at: function(string = "1", fret ="3") {

    let curr_pitch = strings[string-1];
    let p;
    let starting_idx = _.indexOf(pitches, curr_pitch);

    for (let i=0; i<=fret; i++) {

      if (starting_idx == _.size(pitches) - 1) {
        p = pitches[starting_idx];
        starting_idx = 0;
      }
      else {
        p = pitches[starting_idx++];
      }

    }

    return p;
  },

  get_pitch_number: function(string = "1", fret="3") {

    let pitch_number;

    if (
      (string == 6 && (fret >= 0 && fret <= 7)) ||
      (string == 5 && (fret >= 0 && fret <= 2))
    )
    {
      pitch_number = 2;
    }
    else if (
      (string == 6 && (fret >= 8 && fret <= 19)) ||
      (string == 5 && (fret >= 3 && fret <= 14)) ||
      (string == 4 && (fret >= 0 && fret <= 9)) ||
      (string == 3 && (fret >= 0 && fret <= 4)) ||
      (string == 2 && fret == 0)
    )
    {
      pitch_number = 3;
    }
    else if (
      (string == 6 && (fret >= 20 && fret <= 24)) ||
      (string == 5 && (fret >= 15 && fret <= 24)) ||
      (string == 4 && (fret >= 10 && fret <= 21)) ||
      (string == 3 && (fret >= 5 && fret <= 16)) ||
      (string == 2 && (fret >= 1 && fret <= 12)) ||
      (string == 1 && (fret >= 0 && fret <= 7))
    )
    {
      pitch_number = 4;
    }
    else if (
      (string == 4 && (fret >= 22 && fret <= 24)) ||
      (string == 3 && (fret >= 17 && fret <= 24)) ||
      (string == 2 && (fret >= 13 && fret <= 24)) ||
      (string == 1 && (fret >= 8 && fret <= 19))
    )
    {
      pitch_number = 5;
    }
    else if (
      (string == 1 && fret >= 20)
    )
    {
      pitch_number = 6;
    }

    return pitch_number;
  },
};

