import './styles.css';

const Log = () => <div className="log"></div>;
    
    const Flame = () => (
        <div className="flame">
            <div className="blur"></div>
        </div>
    )

    const Spark = () => <div className="spark"></div>;


    const Campfire = () => {
        return (
            <section className="campfire">
                <Flame />
                {[...Array(7)].map((_, index) => (
                    <Log key={index} />
                ))}
                {[...Array(4)].map((_, index) => (
                    <Spark key={index} />
                ))}
                <div className="light"></div>
            </section>
        )
    }

export default Campfire;