import contentful from "contentful";


console.log(contentful)
export const client = contentful.createClient({
  space: 'baunjt2hnyoc',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'yvnM3272Jbg3bY5Yhkm83QTBzpXlPEEK9u6dom4ld0g'
})
