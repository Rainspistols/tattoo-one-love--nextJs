const { NEXT_PUBLIC_API_URL: API_URL } = process.env;

const getImgUrlWidthAPI = (url) => API_URL + url;

const imageSizeHelper = (img, desiredWidth, desiredHeight) => {
  if (img.width < desiredWidth && img.height < desiredHeight) {
    return getImgUrlWidthAPI(img.url);
  } else if (
    img.formats.thumbnail?.width > desiredWidth &&
    img.formats.thumbnail?.height > desiredHeight
  ) {
    return getImgUrlWidthAPI(img.formats.thumbnail.url);
  } else if (
    img.formats.small?.width > desiredWidth &&
    img.formats.small?.height > desiredHeight
  ) {
    return getImgUrlWidthAPI(img.formats.small.url);
  } else if (
    img.formats.medium?.width > desiredWidth &&
    img.formats.medium?.height > desiredHeight
  ) {
    return getImgUrlWidthAPI(img.formats.medium.url);
  } else if (
    img.formats.large?.width > desiredWidth &&
    img.formats.large?.height > desiredHeight
  ) {
    return getImgUrlWidthAPI(img.formats.large.url);
  }
};

export default imageSizeHelper;
