/*
 * enterDate - дата
 * separator  - разделитель
 */
function replaceDate(enterDate, separator) {
  var D = new RegExp('\\D', 'g'),                     // не число
      d = new RegExp('(\\d{2})'),                     // день
      m = new RegExp('(\\' + separator + '+\\d{2})'), // месяц
      Y = new RegExp('(\\' + separator + '+\\d{4})'), // год 
      
      result = enterDate
                .replace(D, '')
                .replace(d, '$1' + separator)
                .replace(m, '$1' + separator)
                .replace(Y, '$1')
                .slice(0,10);
                
  return result;
}
