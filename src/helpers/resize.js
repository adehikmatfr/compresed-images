const sharp = require("sharp");

const ImageResize = async (
  dirImages,
  dirDestination,
  nameAndExt,
  width,
  height,
  quality
) => {
  sharp(dirImages)
    .resize({ width, height })
    .jpeg({ quality })
    .toFile(dirDestination + nameAndExt, function (err) {
      console.log("gagal resize: " + err);
    });
};

module.exports = {
  ImageResize,
};
