import Slices from '~/components/slices'

const slicesMap = {
  poem: Slices.Poem,
  image: Slices.FullImage,
  gallery: Slices.Gallery,
  text: Slices.TextBlock
}

export default slice => slicesMap[slice.slice_type]