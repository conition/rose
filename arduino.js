var Arduino = function() {};

// Example input
// {
//   identifier: 2,
//   position: {
//     x: 348.2053719841859,
//     y: 508.3352613930756
//   },
//   force: 1.4068404316055179,
//   pressure: 0.5,
//   distance: 50,
//   angle: {
//     radian: 4.453618088420993,
//     degree: 255.17352002964435
//   },
//   direction: {
//     x: 'left',
//     y: 'down',
//     angle: 'down'
//   }
// }


/**
 * Arduino.prototype.move - Send move command to robot
 *
 * @param  {String} m Direction
 * @return {Boolean}  OK
 */
Arduino.prototype.move = function(m) {
  // TODO: move robot
  return true;
};

module.exports = new Arduino();
