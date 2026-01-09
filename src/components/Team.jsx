const Team = () => {
    const members = [
        { name: 'Nourith COHEN', role: 'Patronne', initials: 'NC' },
        { name: 'Baptiste BONNET', role: 'Équipe Infra', initials: 'BB' },
        { name: 'Baptiste CLOT', role: 'Équipe Infra', initials: 'BC' },
        { name: 'Jessy FONSAT', role: 'Digital Marketing', initials: 'JF' },
        { name: 'Jasmine ADOUWEKONOU', role: 'Digital Marketing', initials: 'JA' },
        { name: 'Keen GOLITIN', role: 'Digital Marketing', initials: 'KG' }
    ];

    return (
        <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-color)' }} id="team">
            <div className="container">
                <h2>Notre Équipe</h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                    {members.map((member, index) => (
                        <div key={index} style={{
                            textAlign: 'center',
                            padding: '2rem',
                            borderRadius: '20px',
                            background: 'var(--card-bg)',
                            boxShadow: 'var(--shadow-md)',
                            transition: 'transform 0.3s ease',
                            flex: '0 1 250px',
                            maxWidth: '300px'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--primary-color)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                margin: '0 auto 1.5rem',
                                border: '4px solid var(--bg-color)',
                                transition: 'background-color 0.3s ease'
                            }}>
                                {member.initials}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                            <p style={{ margin: 0, color: 'var(--primary-color)', fontWeight: '600' }}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
