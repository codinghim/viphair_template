const fs = require('fs');

export const getImages = async () => {
    const dir = await fs.readdirSync('public/images/hair');
    return dir
}