import berryBlitzTea from '/src/assets/images/img-berryblitz.jpg';
import spicedRumTea from '/src/assets/images/img-spiced-rum.jpg';
import donut from '/src/assets/images/img-donut.jpg';
import myrtleTea from '/src/assets/images/img-myrtle-ave.jpg';
import bedfordTea from '/src/assets/images/img-bedford-bizarre.jpg';
import "./FeaturedTea.css";

const FeaturedTea = () => {
    return (
        <section className="featured-tea" id="featured">
            <h2>Tea of the Month</h2>
            <h3>What&#39;s Steeping at The Tea Cozy?</h3>
            <div className="teas">
                <div className="tea">
                    <img src={berryBlitzTea} alt="Fall Berry Blitz Tea" />
                    <h4>Fall Berry Blitz Tea</h4>
                </div>
                <div className="tea">
                    <img src={spicedRumTea} alt="Spiced Rum Tea" />
                    <h4>Spiced Rum Tea</h4>
                </div>
                <div className="tea">
                    <img src={donut} alt="Seasonal Donuts" />
                    <h4>Seasonal Donuts</h4>
                </div>
                <div className="tea">
                    <img src={myrtleTea} alt="Myrtle Ave Tea" />
                    <h4>Myrtle Ave Tea</h4>
                </div>
                <div className="tea">
                    <img src={bedfordTea} alt="Bedford Bizarre Tea" />
                    <h4>Bedford Bizarre Tea</h4>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTea;
