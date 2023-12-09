import Modal from '../../../components/modal'
import swagPhotos, { Photo } from '../../../lib/photos'
import Frame from '../../../components/frame'

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  const photos = swagPhotos
  const photo: Photo = photos.find((p) => p.id === photoId)!

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  )
}