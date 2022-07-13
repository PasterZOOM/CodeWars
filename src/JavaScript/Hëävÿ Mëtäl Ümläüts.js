const heavyMetalUmlauts = (boringText) => boringText
    .replace(/A/g, '\u00c4')
    .replace(/a/g, '\u00e4')
    .replace(/O/g, '\u00d6')
    .replace(/o/g, '\u00f6')
    .replace(/E/g, '\u00cb')
    .replace(/e/g, '\u00eb')
    .replace(/U/g, '\u00dc')
    .replace(/u/g, '\u00fc')
    .replace(/I/g, '\u00cf')
    .replace(/i/g, '\u00ef')
    .replace(/Y/g, '\u0178')
    .replace(/y/g, '\u00ff')


console.log(heavyMetalUmlauts('Announcing the Macbook Air Guitar'))