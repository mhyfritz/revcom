var revComMap = {
  'A': 'T',
  'C': 'G',
  'G': 'C',
  'T': 'A',
  'a': 't',
  'c': 'g',
  'g': 'c',
  't': 'a'
}

function revcom (seq) {
  return seq
      .split('')
      .reverse()
      .map(function (base) { return revComMap[base] || base })
      .join('')
}

module.exports = revcom
