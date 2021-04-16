import React from 'react'
import PropTypes from 'prop-types'
import redirects from '../../redirects.json'
import _ from 'lodash'

function arrUnique(arr) {
  var cleaned = [];
  arr.forEach(function (itm) {
    var unique = true;
    cleaned.forEach(function (itm2) {
      if (_.isEqual(itm, itm2)) unique = false;
    });
    if (unique) cleaned.push(itm);
  });
  return cleaned;
}

const alphaRedirects = redirects.sort((a, b) => {
  const optA = a.fromPath.toLowerCase().replace('/', '-')
  const optB = b.fromPath.toLowerCase().replace('/', '-')

  if (optA < optB) {
    return -1
  }
  if (optA > optB) {
    return 1
  }

  return 0

})

var cleanRedirects = arrUnique(redirects);

console.log(alphaRedirects.length)
// console.log(JSON.stringify(alphaRedirects.length))



const clean = props => {
  return (
    <div>
      <h1>HELLO</h1>
      <div>
        {JSON.stringify(cleanRedirects)}
      </div>

    </div>
  )
}

clean.propTypes = {

}

export default clean
