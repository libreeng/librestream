const redirects = require('../newRedirects.json')
const _ = require('lodash')
const fs = require('fs')

function uniqueRedirects(arr) {
  var cleaned = []
  arr.forEach(function (itm) {
    var unique = true;
    cleaned.forEach(function (itm2) {
      if (_.isEqual(itm, itm2)) unique = false;
    })
    if (unique) cleaned.push(itm)
  })
  return cleaned
}

function sortRedirects(arr) {
  const sorted = arr.sort((a, b) => {
    const optA = a.fromPath.toLowerCase().replace('/', '-')
    const optB = b.fromPath.toLowerCase().replace('/', '-')

    if (optA < optB) return -1
    if (optA > optB) return 1
    return 0
  })

  return sorted
}

function flagLoops(arr) {
  // TODO: logic for detecting redirects that point to other redirects
  return
}


function validateJSON(str) {
  // TODO: logic for syntax and schema validation
  return
}

const newRedirects = sortRedirects(uniqueRedirects(redirects))




console.log('#Redirects:', redirects.length)
console.log('#UniqueRedirects:', uniqueRedirects(redirects).length)
fs.writeFile('redirects.json', JSON.stringify(newRedirects), (err) => {
  if (err) throw err

  // success case, the file was saved
  console.log('Redirects saved!')
})

