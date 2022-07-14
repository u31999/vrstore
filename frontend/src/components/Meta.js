import {Helmet} from 'react-helmet'

const Meta = ({title, description, keyword}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keyword} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcom To VR-Store',
    keyword: 'vr, virtial reality, buy, sell',
    description: 'best virtial reaility products'
}

export default Meta
