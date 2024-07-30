import {
  NotFoundConatiner,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponent'

const NotFound = () => (
  <NotFoundConatiner>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundPara>
      We are sorry, the page you requested could not be found
    </NotFoundPara>
  </NotFoundConatiner>
)

export default NotFound
