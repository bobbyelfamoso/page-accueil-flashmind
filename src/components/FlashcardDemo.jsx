import { useState } from 'react';

const FlashcardDemo = () => {
    const [topic, setTopic] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [cards, setCards] = useState([]);

    const dataset = {
        'histoire': [
            { front: 'Qui était Napoléon Bonaparte ?', back: 'Un militaire et homme d\'État français, premier empereur des Français.' },
            { front: 'Date de la Révolution Française ?', back: '1789' },
            { front: 'Quelle était la capitale de l\'Empire Romain ?', back: 'Rome' }
        ],
        'svt': [
            { front: 'Qu\'est-ce que la mitose ?', back: 'Le processus de division cellulaire.' },
            { front: 'Rôle de l\'ADN ?', back: 'Stocker l\'information génétique.' },
            { front: 'Où se passe la photosynthèse ?', back: 'Dans les chloroplastes des cellules végétales.' }
        ],
        'code': [
            { front: 'Différence entre let et const ?', back: 'let permet la réaffectation, const non.' },
            { front: 'Qu\'est-ce qu\'une closure ?', back: 'Une fonction qui garde accès à son scope parent même après son exécution.' },
            { front: 'Que signifie DOM ?', back: 'Document Object Model.' }
        ]
    };

    const handleGenerate = () => {
        if (!topic.trim()) return;
        
        setIsGenerating(true);
        setCards([]);

        // Simulate AI thinking
        setTimeout(() => {
            const lowerTopic = topic.toLowerCase();
            let foundCards = [];
            
            if (lowerTopic.includes('histoire') || lowerTopic.includes('roi') || lowerTopic.includes('guerre')) {
                foundCards = dataset.histoire;
            } else if (lowerTopic.includes('svt') || lowerTopic.includes('bio') || lowerTopic.includes('cellule')) {
                foundCards = dataset.svt;
            } else if (lowerTopic.includes('code') || lowerTopic.includes('js') || lowerTopic.includes('web')) {
                foundCards = dataset.code;
            } else {
                // Default cards if no match
                foundCards = [
                    { front: `Concept clé : ${topic}`, back: "Ceci est un exemple de réponse générée par l'IA de Flashcards IA." },
                    { front: "Comment apprendre efficacement ?", back: "Utilisez la répétition espacée proposée par notre outil." },
                    { front: "Pourquoi Flashcards IA ?", back: "Pour gagner du temps et mémoriser sur le long terme." }
                ];
            }
            
            setCards(foundCards);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <section className="section" id="demo" style={{ backgroundColor: 'var(--card-bg)', transition: 'all 0.3s ease' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '1rem' }}>Essayez notre IA</h2>
                <p style={{ marginBottom: '2.5rem', opacity: 0.8 }}>Entrez un sujet et laissez notre technologie générer vos premières cartes.</p>
                
                <div style={{ 
                    maxWidth: '600px', 
                    margin: '0 auto 3rem',
                    display: 'flex',
                    gap: '10px'
                }}>
                    <input 
                        type="text" 
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="Ex: La Révolution Française, Le JavaScript, La mitose..."
                        style={{
                            flex: 1,
                            padding: '1rem 1.5rem',
                            borderRadius: '12px',
                            border: '2px solid var(--primary-color)',
                            background: 'var(--bg-color)',
                            color: 'var(--text-color)',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />
                    <button 
                        onClick={handleGenerate}
                        disabled={isGenerating || !topic.trim()}
                        className="btn"
                        style={{
                            padding: '0 2rem',
                            height: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: (isGenerating || !topic.trim()) ? 0.6 : 1
                        }}
                    >
                        {isGenerating ? 'IA en cours...' : 'Générer'}
                    </button>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '1.5rem',
                    minHeight: '200px'
                }}>
                    {isGenerating && (
                        <div style={{ gridColumn: '1 / -1', padding: '2rem' }}>
                            <div className="loader" style={{ margin: '0 auto' }}></div>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>Analyse du sujet et création des cartes...</p>
                        </div>
                    )}
                    
                    {!isGenerating && cards.map((card, idx) => (
                        <div key={idx} className="demo-card">
                            <div className="demo-card-inner">
                                <div className="demo-card-front">
                                    <strong>Question</strong>
                                    <p>{card.front}</p>
                                </div>
                                <div className="demo-card-back">
                                    <strong>Réponse</strong>
                                    <p>{card.back}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlashcardDemo;
