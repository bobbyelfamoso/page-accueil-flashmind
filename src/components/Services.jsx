const Services = () => {
    return (
        <section style={{ padding: '6rem 0' }} id="services">
            <div className="container">
                <h2>Nos Services</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem'
                }}>
                    <div className="card" style={cardStyle}>
                        <h3>Génération de Flashcards</h3>
                        <p>Créez des flashcards instantanément à partir de n'importe quel texte ou document grâce à notre IA avancée.</p>
                    </div>
                    <div className="card" style={cardStyle}>
                        <h3>Révisions Intelligentes</h3>
                        <p>Un algorithme de répétition espacée optimisé pour maximiser votre rétention d'information.</p>
                    </div>
                    <div className="card" style={cardStyle}>
                        <h3>Suivi de Progression</h3>
                        <p>Visualisez vos performances et adaptez votre apprentissage en temps réel.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                        Prêt à booster votre apprentissage ?
                    </p>
                    <a
                        href="https://site-flash-card-b59c4.web.app/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '1.2rem 3rem',
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            boxShadow: '0 10px 25px rgba(233, 30, 99, 0.4)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 15px 35px rgba(233, 30, 99, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(233, 30, 99, 0.4)';
                        }}
                    >
                        Accéder à Flashcards IA <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

const cardStyle = {
    background: 'var(--card-bg)',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid rgba(0,0,0,0.05)'
};

export default Services;
