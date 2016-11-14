
import _ from 'lodash';

// strings, default tuning
const strings = [ 'E', 'B', 'G', 'D', 'A', 'E', ];
const pitches = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', ];

module.exports = {
  
  get_pitch_at: function (string = "1", fret ="3") {

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

};

