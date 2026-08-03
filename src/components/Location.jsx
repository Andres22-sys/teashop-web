import "./Location.css";

const PinIcon = () => (
    <svg
        className="pin-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
    >
        <path
            d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
        />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
);

const locations = [
    { name: "Downtown", lines: ["384 West 4th St, Suite 108", "Portland, Maine"] },
    { name: "East Bayside", lines: ["5th Avenue, Northwest Corner", "Portland, Maine"] },
    { name: "Oakdale", lines: ["123 Lane, Second Floor", "Portland, Maine"] },
];

const Locations = () => {
    return (
        <section className="locations container" id="locations">
            <span className="eyebrow">Visit Us</span>
            <h2>Our Locations</h2>
            <div className="places">
                {locations.map((loc) => (
                    <div className="location" key={loc.name}>
                        <PinIcon />
                        <h3>{loc.name}</h3>
                        {loc.lines.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Locations;
