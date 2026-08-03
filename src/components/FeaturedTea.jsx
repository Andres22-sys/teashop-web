import "./FeaturedTea.css";

const optimizedImages = import.meta.glob(
    "/src/assets/images/optimized/*.{jpg,webp,avif}",
    { eager: true, import: "default" }
);

const SIZES = [400, 800, 1600];
const CARD_SIZES = "(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw";

const buildSrcSet = (name, ext) =>
    SIZES.map((w) => {
        const url = optimizedImages[`/src/assets/images/optimized/${name}-${w}.${ext}`];
        return url ? `${url} ${w}w` : null;
    })
        .filter(Boolean)
        .join(", ");

// eslint-disable-next-line react/prop-types -- project does not use prop-types
const TeaImage = ({ name, alt }) => {
    const fallback = optimizedImages[`/src/assets/images/optimized/${name}-800.jpg`];
    return (
        <picture>
            <source type="image/avif" srcSet={buildSrcSet(name, "avif")} sizes={CARD_SIZES} />
            <source type="image/webp" srcSet={buildSrcSet(name, "webp")} sizes={CARD_SIZES} />
            <img
                className="tea-image"
                src={fallback}
                srcSet={buildSrcSet(name, "jpg")}
                sizes={CARD_SIZES}
                alt={alt}
                loading="lazy"
                decoding="async"
            />
        </picture>
    );
};

const teas = [
    { name: "img-berryblitz", title: "Fall Berry Blitz Tea" },
    { name: "img-spiced-rum", title: "Spiced Rum Tea" },
    { name: "img-donut", title: "Seasonal Donuts" },
    { name: "img-myrtle-ave", title: "Myrtle Ave Tea" },
    { name: "img-bedford-bizarre", title: "Bedford Bizarre Tea" },
];

const FeaturedTea = () => {
    return (
        <section className="featured-tea container" id="featured">
            <span className="eyebrow">Tea of the Month</span>
            <h2>What&#39;s Steeping at The Tea Cozy?</h2>
            <div className="teas">
                {teas.map((tea) => (
                    <div className="tea" key={tea.name}>
                        <TeaImage name={tea.name} alt={tea.title} />
                        <h4>{tea.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedTea;
