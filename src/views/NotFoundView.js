import { useParams } from 'react-router-dom'

export default function NotFoundView() {
  const params = useParams()
  return <p>"{params.pageName}" page not found!</p>
}
