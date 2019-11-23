// console.log('this is loaded');

const keys = () => {
    const arguments = process.argv;
    let argArr = [];

    for (let i = 2; i < arguments.length; i++) {
        argArr.push(arguments[i]);
    }
    return argArr.join("+");
};

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

module.exports = keys;