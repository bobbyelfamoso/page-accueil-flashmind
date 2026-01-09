const Hero = () => {
    return (
        <section style={{
            padding: '8rem 0 6rem',
            textAlign: 'center',
            background: 'var(--hero-gradient)'
        }}>
            <div className="container">
                <h1>Les Workfish</h1>
                <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                    Nous sommes une équipe passionnée dédiée à révolutionner votre apprentissage grâce à la puissance de l'Intelligence Artificielle.
                </p>
                <a href="#services" className="btn btn-primary">Découvrir nos services</a>
            </div>
        </section>
    );
};

export default Hero;
