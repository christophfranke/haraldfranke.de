import Slices from "~/components/slices";

const slicesMap = {
  poem: Slices.Poem,
  image: Slices.FullImage,
  gallery: Slices.Gallery,
  text: Slices.TextBlock,
  video: Slices.Video,
};

export default (slice) => slicesMap[slice.slice_type];
