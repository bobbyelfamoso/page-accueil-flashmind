const Contact = () => {
    return (
        <section style={{ padding: '6rem 0', background: '#212529', color: '#fff' }} id="contact">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ color: '#fff' }}>Contactez-nous</h2>
                <p style={{ color: '#adb5bd', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Une question ? Une suggestion ? Notre équipe est à votre écoute pour améliorer votre expérience d'apprentissage.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                    <div style={itemStyle}>
                        <span style={iconStyle}>📍</span>
                        <div>
                            <strong>Adresse</strong>
                            <p style={{ margin: 0, color: '#ced4da' }}>Paris, France</p>
                        </div>
                    </div>

                    <div style={itemStyle}>
                        <span style={iconStyle}>📧</span>
                        <div>
                            <strong>Email</strong>
                            <p style={{ margin: 0, color: '#ced4da' }}>workfishofficial@gmail.com</p>
                        </div>
                    </div>

                    <div style={itemStyle}>
                        <span style={iconStyle}>📷</span>
                        <div>
                            <strong>Instagram</strong>
                            <p style={{ margin: 0, color: '#ced4da' }}>
                                <a href="https://www.instagram.com/workfishofficial/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#ced4da' }}>
                                    @workfishofficial
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '5rem', borderTop: '1px solid #343a40', paddingTop: '2rem', fontSize: '0.9rem', color: '#6c757d' }}>
                    © {new Date().getFullYear()} Flashcards IA. Tous droits réservés.
                </div>
            </div>
        </section>
    );
};

const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'left'
};

const iconStyle = {
    fontSize: '2rem',
    background: 'rgba(255,255,255,0.1)',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%'
};

export default Contact;
