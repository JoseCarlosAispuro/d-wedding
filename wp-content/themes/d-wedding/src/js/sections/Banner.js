const Banner = ({title, image}) => {

    return (
        <section className="banner">
            <div>{title}</div>
            <div>{image}</div>
        </section>
    )
};

export default Banner;