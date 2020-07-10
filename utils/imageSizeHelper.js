export default (img, desiredWidth, desiredHeight) => {
  if (img.width < desiredWidth && img.height < desiredHeight) {
    return img.url;
  } else if (
    img.formats.thumbnail.width > desiredWidth &&
    img.formats.thumbnail.height > desiredHeight
  ) {
    return img.formats.thumbnail.url;
  } else if (
    img.formats.small.width > desiredWidth &&
    img.formats.small.height > desiredHeight
  ) {
    return img.formats.small.url;
  } else if (
    img.formats.medium.width > desiredWidth &&
    img.formats.medium.height > desiredHeight
  ) {
    return img.formats.medium.url;
  } else if (
    img.formats.large.width > desiredWidth &&
    img.formats.large.height > desiredHeight
  ) {
    return img.formats.large.url;
  }
};
