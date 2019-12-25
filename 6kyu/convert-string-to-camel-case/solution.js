function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

/*
function toCamelCase(str) {
  return (subs = str.split(/[-_]/))[0] + subs.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('');
}
*/
