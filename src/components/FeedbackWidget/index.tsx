import { FeedbackWidget as FeedGet } from 'feedget'

export const FeedbackWidget = () => {
  return (
    <div>
      <FeedGet clientId={import.meta.env.VITE_FEEDGET_CLIENT_ID} />
    </div>
  )
}
