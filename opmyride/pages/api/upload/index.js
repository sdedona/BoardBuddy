import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

var mv = require('mv');


export const config = {
    api: {
       bodyParser: false,
    }
};
 
export default async (req, res) => {
    
    const data = await new Promise((resolve, reject) => {
       const form = new IncomingForm()
       
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            console.log(fields, files)
            console.log(files.file.filepath)
            var oldPath = files.file.filepath;
            var fileExtension = files.file.originalFilename.split('.').pop();
            var newPath = `./public/images/${'uploadimg'+'.'+fileExtension}`;
            
            mv(oldPath, newPath, function(err) {
            });
            res.status(200).json({ fields, files })
        })
    })
    
}

//credit to Danny B. from FullStackSoup.blog for this tutorial viewable at https://fullstacksoup.blog/2021/11/04/next-js-upload-image-to-public-folder/