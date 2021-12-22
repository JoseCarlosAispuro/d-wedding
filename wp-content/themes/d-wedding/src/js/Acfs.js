import Hero from "./sections/Hero";
import Banner from "./sections/Banner";
import SingleImage from "./sections/SingleImage";

const Acfs = ({acfs}) => {
    acfs.map(acf => {
        const [name, fields] = acf

        if (name === 'hero') {
            return <Hero key={name}
                         title={fields.hero_title}
                         image={fields.background_image}
            />
        } else if (name === 'banner') {
            return <Banner key={name}
                           title={fields.banner_title}
                           image={fields.image}
            />
        } else if (name === 'single_image') {
            return <SingleImage key={name} title={fields.single_title}/>
        }
    })
}

export default Acfs