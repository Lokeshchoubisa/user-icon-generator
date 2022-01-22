const Jimp = require('jimp');

async function getIcon(username,color) {
    try {
        
        color=color ? color : "white";
        username = username.split(" ");
        let logo = "";
        username.map(name => {
            logo = logo + name[0];
        })

        logo = logo.toUpperCase();

        const image = await new Jimp(256, 256, 'white')
    
        
        const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
       
        image.print(font, 0, 90,
            {
                text: logo,
                alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                alignmentY: Jimp.VERTICAL_ALIGN_CENTER
            }, image.getWidth(), image.getHeight());

        image.color([{ apply: 'xor', params: [color] }]);
    

        return {err:null,file:image};
    }
    catch (err) {
        return {error:err,file:null};
    }
}


module.exports = getIcon;