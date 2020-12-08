const { NEXT_PUBLIC_API_URL: API_URL } = process.env;

const getImgUrlWidthAPI = (url) => API_URL + url;

const imageSizeHelper = (img, desiredWidth, desiredHeight) => {
  const { thumbnail, small, medium, large } = img.formats;

  if (img.width < desiredWidth && img.height < desiredHeight) {
    return getImgUrlWidthAPI(img.url);
  } else if (thumbnail?.width >= desiredWidth && thumbnail?.height >= desiredHeight) {
    return getImgUrlWidthAPI(thumbnail.url);
  } else if (small?.width >= desiredWidth && small?.height >= desiredHeight) {
    return getImgUrlWidthAPI(small.url);
  } else if (medium?.width >= desiredWidth && medium?.height >= desiredHeight) {
    return getImgUrlWidthAPI(medium.url);
  } else {
    // Prevent situation when an image width and height not enough in large, but next width and height more 2k.
    return getImgUrlWidthAPI(large.url);
  }

};

export default imageSizeHelper;
