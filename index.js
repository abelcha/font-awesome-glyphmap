const fs = require('fs');
const cheerio = require('cheerio');

const filepath = process.argv[2];

const content = fs.readFileSync(`${filepath}/demo.html`, 'utf8');

const $ = cheerio.load(content);

const rtn = {};

$('.asset-icon').each((k, e) => {
  const name = $(e).find('.text-gray-darker').text().slice(3);
  const glyph = $(e).find('i').text().charCodeAt(0);
  rtn[name] = glyph;
})

console.log(JSON.stringify(rtn, null, 2))