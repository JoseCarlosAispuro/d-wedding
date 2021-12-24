import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import { ApiRoutes } from './utils/api-routes'
import Banner from './sections/Banner'
import Hero from './sections/Hero'
import SingleImage from './sections/SingleImage'

const $appContainer = document.getElementById('app'),
  siteUrl = $appContainer.dataset.siteUrl,
  pageId = $appContainer.dataset.pageId

const App = () => {
  const [acfs, setAcfs] = useState([])

  useEffect(() => {
    requestPageContent()
  }, [])

  async function requestPageContent() {
    const rest = await fetch(ApiRoutes.page(siteUrl, pageId))
    const json = await rest.json()
    setAcfs(json.acf)
  }

  return (
    <div>
      {Object.entries(acfs).map((acf) => {
        const [name, fields] = acf

        if (name === 'hero') {
          return <Hero key={name} title={fields.hero_title} image={fields.background_image} />
        } else if (name === 'banner') {
          return <Banner key={name} title={fields.banner_title} image={fields.image} />
        } else if (name === 'single_image') {
          return <SingleImage key={name} title={fields.single_title} />
        }
      })}
    </div>
  )
}

ReactDOM.render(<App />, $appContainer)
