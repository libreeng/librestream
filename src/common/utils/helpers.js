import React from 'react'
import format from 'date-fns/format'
import queryString from 'query-string'
import { domToReact } from 'html-react-parser'
import parse from "html-react-parser"
export const formatDate = date => {
  let dateFormated = ''
  if (date) {
    dateFormated = format(new Date(date), 'MMMM dd, yyyy')
  }
  return dateFormated
}

export const objectToArray = object => {
  if (object) {
    return Object.entries(object).map(e => ({ ...e[1], id: e[0] }))
  }
  return []
}
export const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    // eslint-disable-next-line no-param-reassign
    obj[item[keyField]] = item
    return obj
  }, {})

export const formatToPhone = number => {
  const input = number.replace(/\D/g, '').substring(0, 10) // First ten digits of input only
  const zip = input.substring(0, 3)
  const middle = input.substring(3, 6)
  const last = input.substring(6, 10)
  return `(${zip}) ${middle} - ${last}`
}

export const getFilter = (query) => {
  const defaultFilter = ''
  if (query) {
    const queriedFilter = queryString.parse(query)
    const { filter } = queriedFilter
    return filter
  }
  return defaultFilter
}

export function slugify(string) {
  const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
  const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export const decodeURLParams = search => {
  const hashes = search.slice(search.indexOf("?") + 1).split("&");
  return hashes.reduce((params, hash) => {
    const split = hash.indexOf("=");

    if (split < 0) {
      return Object.assign(params, {
        [hash]: null
      });
    }

    const key = hash.slice(0, split);
    const val = hash.slice(split + 1);

    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
}

export function iFrameResizeMessage(event) {

  console.log(`got resize message: ${JSON.stringify(event.data)}`)

  const matches = document.querySelectorAll('iframe') // iterate through all iFrames on page
  matches.forEach((match) => {
    if (match.contentWindow === event.source) { // found the iFrame that sent us a message
      // eslint-disable-next-line no-param-reassign
      match.height = Number(event.data.height)
      return 1
    }
    return 0
  })
}

export function getHeroParseOptions(props) {
  return ({
    replace: ({ attribs, name, children }) => {
      if (!attribs) return;

      if (name === 'p') {
        // eslint-disable-next-line consistent-return
        return <>{domToReact(children, getHeroParseOptions(props))}</>
      }
    }
  })
}

function checkExtension(str) {
  if (!str) return true
  const extensions = ['pdf', 'mp4']
  const ext = (str.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1]

  return extensions.includes(ext)
}

function getContentParseOptions(props) {
  return ({
    replace: ({ attribs, name, children }) => {
      if (!attribs) return

      if (name === 'a' && checkExtension(attribs.href)) {
        // eslint-disable-next-line consistent-return
        attribs.href = `https://cms.librestream.com${attribs.href}`
        return <a {...attribs}>{domToReact(children)}</a>
      }
    }
  })
}

export const customParse = (props, options) => {
  if (!options) {
    return parse(props, getContentParseOptions(props))
  }
  return parse(props, options)
}

export const embedUrl = (string) => {
  let url;
  
  try {
    if(string.startsWith("/static/")) {
      return string
    }
    url = new URL(string);
  } catch (_) {
    return `https://cms.librestream.com${string}`
  }
  return url;
}






export const algoliaParse = (string) => {
  return replaceHtmlEntities(string, true)
}

function replaceHtmlEntities(string,doParse = true){
  const mapObj = {
    "&nbsp;": " ",
    "&hellip;": "&#8230;", // ...
    "&amp;": "&#38;",// Ampersand
    "&ldquo;": "&#8220;",  //  Left Double Quotation Mark
    "&rdquo;": "&#8221;", //  Right Double Quotation Mark
    "&lsquo;": "&#8216;",// Left Single Quotation Mark
    "&rsquo;": "&#8217;",// Right Single Quotation Mark
    "&bull;": "&#8226;",// Bullet
    "&ndash;": "&#8211;",// En Dash
    "&mdash;": "&#8212;",// Em Dash
    "&horbar;": "&#8213;",// Horizontal Bar
  };
  var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

  return string.replace(re, function(matched){
    const replaced = mapObj[matched.toLowerCase()];    
    return (doParse) ? parse(replaced) : replaced;      
  });
}

