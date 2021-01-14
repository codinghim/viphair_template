import path from 'path';
const fs = require('fs');

/**
 *  This function reads a file returns a JSON object of data
 */
export const getData = async () => {
    const dir = "data/data.json"
    const file = fs.readFileSync(dir)
    const res = JSON.parse(file)
    return res
}