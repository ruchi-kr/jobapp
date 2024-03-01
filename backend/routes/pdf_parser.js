 //   pdf parser

 const { PdfReader } = require('pdfreader');

 const pdftextdata = new PdfReader().parseFileItems(`./resumes/b131c506-e50a-4011-ae70-f62540e1c1b3.pdf`, function (err, item) {
     if (err)
         console.error(err);
     else if (!item)
         console.error('null item');
     else if (item.text)
         console.log(item.text);
 });

 module.exports = pdftextdata;