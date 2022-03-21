function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '').replace('.png', '')] = r(item);
    });
    return images;
}

module.exports = importAllImages;
