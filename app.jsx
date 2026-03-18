const { useState, useEffect, useRef } = React;

        const CHANNEL_ID = 'UCOsM3EhSrxLLbYSukirSytw';

        function AnimatedCounter({ value, duration = 1500 }) {
            const [count, setCount] = useState(0);
            const counterRef = useRef(null);
            const [hasAnimated, setHasAnimated] = useState(false);

            useEffect(() => {
                if (value === null || value === undefined) return;

                const observer = new IntersectionObserver(
                    (entries) => {
                        const [entry] = entries;
                        if (entry.isIntersecting && !hasAnimated) {
                            let start = null;
                            const targetValue = parseInt(value, 10);

                            const step = (timestamp) => {
                                if (!start) start = timestamp;
                                const progress = timestamp - start;

                                // Ease-out effect
                                const easeOutQuart = 1 - Math.pow(1 - progress / duration, 4);

                                const currentCount = Math.min(
                                    Math.floor(targetValue * easeOutQuart),
                                    targetValue
                                );

                                setCount(currentCount);

                                if (progress < duration) {
                                    requestAnimationFrame(step);
                                } else {
                                    setCount(targetValue);
                                    setHasAnimated(true);
                                }
                            };

                            requestAnimationFrame(step);
                            observer.disconnect();
                        }
                    },
                    { threshold: 0.1 }
                );

                if (counterRef.current) {
                    observer.observe(counterRef.current);
                }

                return () => observer.disconnect();
            }, [value, duration, hasAnimated]);

            // Add comma separators for readability (e.g. 3,842)
            const formattedCount = new Intl.NumberFormat().format(count);

            return <span ref={counterRef}>{value === null ? '...' : formattedCount}</span>;
        }

        function App() {
            const [isScrolled, setIsScrolled] = useState(false);
            const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
            const [activeSection, setActiveSection] = useState('home');
            const [latestVideos, setLatestVideos] = useState([]);
            const [isLoading, setIsLoading] = useState(true);
            const [activeVideoId, setActiveVideoId] = useState(null);
            const [formStatus, setFormStatus] = useState('idle');
            const [formData, setFormData] = useState({ name: '', email: '', message: '' });

            const [stats, setStats] = useState({ subscriberCount: null, viewCount: null, videoCount: null });

            useEffect(() => {
                const fetchStats = async () => {
                    try {
                        const response = await fetch('https://api.socialcounts.org/youtube-live-subscriber-count/UCOsM3EhSrxLLbYSukirSytw');
                        if (response.ok) {
                            const data = await response.json();
                            setStats({
                                subscriberCount: data.counters.api.subscriberCount,
                                viewCount: data.counters.api.viewCount,
                                videoCount: data.counters.api.videoCount
                            });
                        }
                    } catch (error) {
                        console.error('Error fetching stats:', error);
                    }
                };
                fetchStats();
            }, []);


            useEffect(() => {
                const handleScroll = () => {
                    setIsScrolled(window.scrollY > 50);
                };
                window.addEventListener('scroll', handleScroll, { passive: true });
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            useEffect(() => {
                const sections = ['home', 'latest', 'programs', 'services', 'about', 'contact'];
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveSection(entry.target.id);
                            }
                        });
                    },
                    { rootMargin: '-150px 0px -150px 0px', threshold: 0.1 }
                );

                sections.forEach((sectionId) => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        observer.observe(element);
                    }
                });

                return () => {
                    sections.forEach((sectionId) => {
                        const element = document.getElementById(sectionId);
                        if (element) {
                            observer.unobserve(element);
                        }
                    });
                };
            }, []);

            const scrollToSection = (e, sectionId) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                const element = document.getElementById(sectionId);
                if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            };

            useEffect(() => {
                const fetchVideos = async () => {
                    if (!CHANNEL_ID) {
                        loadMockData();
                        return;
                    }
                    try {
                        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
                        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
                        if (!response.ok) throw new Error('Network response was not ok');
                        const data = await response.json();
                        if (data.status === 'ok') {
                            const formattedVideos = data.items.slice(0, 6).map(item => {
                                const videoId = item.link.split('v=')[1];
                                return {
                                    id: videoId,
                                    title: item.title,
                                    thumbnail: item.thumbnail || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
                                    date: new Date(item.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }),
                                };
                            });
                            setLatestVideos(formattedVideos);
                            setIsLoading(false);
                        } else {
                            throw new Error('Failed to parse RSS');
                        }
                    } catch (error) {
                        console.error("Error fetching videos:", error);
                        loadMockData();
                    }
                };
                fetchVideos();
            }, []);

            const loadMockData = () => {
                setTimeout(() => {
                    setLatestVideos([
                        { id: 'dQw4w9WgXcQ', title: 'Loading latest video...', thumbnail: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600', date: 'Recent' }
                    ]);
                    setIsLoading(false);
                }, 1200);
            };

            const handleFormSubmit = async (e) => {
                e.preventDefault();
                setFormStatus('submitting');

                // Basic validation (although HTML5 required attributes handle most of this)
                const sanitizedName = formData.name.trim().replace(/<[^>]*>?/gm, ''); // Basic strip HTML
                const sanitizedEmail = formData.email.trim();
                const sanitizedMessage = formData.message.trim().replace(/<[^>]*>?/gm, ''); // Basic strip HTML

                if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
                    alert("Please fill out all fields with valid information.");
                    setFormStatus('idle');
                    return;
                }

                try {
                    const response = await fetch('https://formsubmit.co/ajax/muftimujahid@gmail.com', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            name: sanitizedName,
                            email: sanitizedEmail,
                            message: sanitizedMessage,
                            _subject: `New Message from ${sanitizedName} via Website`,
                            _captcha: "false"
                        })
                    });

                    if (response.ok) {
                        setFormStatus('success');
                        setFormData({ name: '', email: '', message: '' });
                        setTimeout(() => setFormStatus('idle'), 5000);
                    } else {
                        throw new Error('Form submission failed');
                    }
                } catch (error) {
                    console.error("Error submitting form:", error);
                    alert("There was an error sending your message. Please try again later or email directly.");
                    setFormStatus('idle');
                }
            };

            const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData(prev => ({ ...prev, [name]: value }));
            };

            useEffect(() => {
                if (activeVideoId) document.body.style.overflow = 'hidden';
                else document.body.style.overflow = 'auto';
            }, [activeVideoId]);


            const categories = [
                { title: 'Dars-e-Nizami', icon: 'fa-book-open', desc: 'Deep dives into classical Islamic texts like Hidaya and Noor ul Anwaar.', link: 'https://www.youtube.com/@drmuftimujahid/playlists' },
                { title: 'Juma Bayans', icon: 'fa-users', desc: 'Friday khutbahs and sermons delivered at Masjid E Rahmath.', link: 'https://www.youtube.com/@drmuftimujahid/playlists' },
                { title: 'Dars-e-Hadees', icon: 'fa-bookmark', desc: 'Short episodes and practical sessions on prophetic traditions.', link: 'https://www.youtube.com/@drmuftimujahid/playlists' },
                { title: 'Daily Masail', icon: 'fa-heart', desc: 'Practical guidance explaining the rulings of Islam for daily life.', link: 'https://www.youtube.com/@drmuftimujahid/playlists' }
            ];

            const servicesData = [
                { title: 'Islamic Studies', icon: 'fa-graduation-cap', desc: 'Comprehensive foundation in authentic Islamic knowledge, history, and principles.' },
                { title: 'Quran Tajweed', icon: 'fa-book-quran', desc: 'Master the proper pronunciation and articulation rules for reciting the Holy Quran.' },
                { title: 'Translation', icon: 'fa-language', desc: 'In-depth translation and exegesis of classical Islamic texts and scriptures.' },
                { title: 'Hadith', icon: 'fa-book', desc: 'Study the sayings, actions, and approvals of Prophet Muhammad (PBUH).' },
                { title: 'Fiqh', icon: 'fa-scale-balanced', desc: 'Understanding Islamic jurisprudence and practical rulings for daily life.' },
                { title: 'Alim Course', icon: 'fa-certificate', desc: 'Complete, rigorous training on the Quran and Hadith to become a qualified scholar.' },
                { title: 'Mufti Training', icon: 'fa-pen-nib', desc: 'Advanced training in Quran, Hadith, and Fiqh, qualifying one to issue religious edicts (Fatawa).' }
            ];

            return (
                <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 font-sans text-stone-100 selection:bg-amber-500/30">

                    {/* Background Orbs (Optimized with hardware acceleration) */}
                    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] transform-gpu will-change-transform"></div>
                        <div className="absolute top-[40%] right-[-5%] w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-[150px] transform-gpu will-change-transform"></div>
                        <div className="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] bg-teal-500/20 rounded-full blur-[130px] transform-gpu will-change-transform"></div>
                    </div>

                    {/* Video Player Modal */}
                    {activeVideoId && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                            <div className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer" onClick={() => setActiveVideoId(null)}></div>
                            <div className="relative w-full max-w-5xl bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-10 aspect-video transition-all">
                                <button onClick={() => setActiveVideoId(null)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors border border-white/20">
                                    <i className="fa-solid fa-xmark text-lg"></i>
                                </button>
                                <iframe loading="lazy" src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                            </div>
                        </div>
                    )}

                    {/* Navbar */}
                    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-2xl px-6 py-3' : ''}`}>
                                <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => scrollToSection(e, 'home')}>
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-emerald-950 font-serif font-bold text-xl shadow-lg">MQ</div>
                                    <span className="font-serif font-bold text-lg md:text-xl tracking-wide text-white drop-shadow-md">Dr. Mufti Mujahid Ali Qasmi</span>
                                </div>

                                <div className="hidden md:flex items-center space-x-8">
                                {['home', 'latest', 'programs', 'services', 'about', 'contact'].map((item) => (
                                        <a key={item} href={`#${item}`} onClick={(e) => scrollToSection(e, item)} className={`text-sm font-medium transition-colors capitalize ${activeSection === item ? 'text-amber-400' : 'text-white/80 hover:text-amber-400'}`}>
                                            {item === 'latest' ? 'Videos' : item}
                                        </a>
                                    ))}
                                    <a href="https://www.youtube.com/@drmuftimujahid?sub_confirmation=1" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-white/10">
                                        <i className="fa-brands fa-youtube text-red-500 text-lg"></i> Subscribe
                                    </a>
                                </div>

                                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                    <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {mobileMenuOpen && (
                            <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-emerald-950/95 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-2xl py-6 flex flex-col items-center space-y-5">
                                {['home', 'latest', 'programs', 'services', 'about', 'contact'].map((item) => (
                                    <a key={item} href={`#${item}`} onClick={(e) => scrollToSection(e, item)} className={`text-lg font-medium capitalize ${activeSection === item ? 'text-amber-400' : 'text-white'}`}>
                                        {item === 'latest' ? 'Latest Videos' : item}
                                    </a>
                                ))}
                                <a href="https://www.youtube.com/@drmuftimujahid?sub_confirmation=1" target="_blank" rel="noreferrer" className="bg-red-600/90 backdrop-blur-md text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mt-4">
                                    <i className="fa-brands fa-youtube text-lg"></i> Subscribe Channel
                                </a>
                            </div>
                        )}
                    </nav>

                    {/* Hero Section */}
                    <section id="home" className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-amber-300 text-sm font-semibold tracking-wider mb-8 shadow-lg">
                                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                                ISLAMIC SCHOLAR & EDUCATOR
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                                <span className="block text-amber-400/90 text-2xl md:text-4xl mb-2 tracking-widest uppercase">Dr.</span>
                                MUFTI MUJAHID <br className="hidden md:block"/> ALI QASMI
                            </h1>
                            <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl mb-10 shadow-2xl">
                                <p className="text-lg md:text-xl text-emerald-50/90 leading-relaxed font-light">
                                    Guiding souls through the light of Quran & Sunnah. Join for deep insights into classical Islamic texts, daily spiritual guidance, and profound Friday sermons.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                                <button onClick={() => { if(latestVideos.length > 0) setActiveVideoId(latestVideos[0].id); else scrollToSection({preventDefault: ()=>{}}, 'latest'); }} className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-400 text-emerald-950 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:scale-105 flex items-center justify-center gap-2">
                                    <i className="fa-regular fa-circle-play text-xl"></i> Watch Latest Bayan
                                </button>
                                <a href="https://www.youtube.com/@drmuftimujahid" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:scale-105">
                                    <i className="fa-brands fa-youtube text-red-500 text-xl"></i> Explore Channel
                                </a>
                            </div>

                            {/* Live Stats Section */}
                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-6 px-8 shadow-xl">
                                <div className="flex flex-col items-center">
                                    <span className="text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-md">
                                        <AnimatedCounter value={stats.subscriberCount} duration={2000} />
                                    </span>
                                    <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
                                        <i className="fa-brands fa-youtube text-red-500"></i> Subscribers
                                    </span>
                                </div>
                                <div className="hidden md:block w-px h-12 bg-white/20"></div>
                                <div className="flex flex-col items-center">
                                    <span className="text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-md">
                                        <AnimatedCounter value={stats.viewCount} duration={2000} />
                                    </span>
                                    <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
                                        <i className="fa-solid fa-eye text-emerald-500"></i> Total Views
                                    </span>
                                </div>
                                <div className="hidden md:block w-px h-12 bg-white/20"></div>
                                <div className="flex flex-col items-center">
                                    <span className="text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-md">
                                        <AnimatedCounter value={stats.videoCount} duration={2000} />
                                    </span>
                                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
                                        <i className="fa-solid fa-video text-purple-500"></i> Videos
                                    </span>
                                </div>
                            </div>

                        </div>
                    </section>

                     {/* Videos Section */}
                    <section id="latest" className="py-24 relative z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-xl">
                                <div>
                                    <div className="flex items-center gap-2 text-amber-400 font-semibold mb-3">
                                        <i className="fa-brands fa-youtube text-lg"></i> AUTOMATIC FEED
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Latest Uploads</h2>
                                    <p className="text-emerald-100/70 max-w-2xl text-lg">Click any video below to watch it directly on this page without leaving the website.</p>
                                </div>
                                <a href="https://www.youtube.com/@drmuftimujahid/videos" target="_blank" rel="noreferrer" className="mt-6 md:mt-0 flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full font-medium transition-all backdrop-blur-sm group">
                                    View All <i className="fa-solid fa-chevron-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                </a>
                            </div>

                            {isLoading ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[1, 2, 3].map((skeleton) => (
                                        <div key={skeleton} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-4 animate-pulse">
                                            <div className="w-full h-52 bg-white/10 rounded-2xl mb-4"></div>
                                            <div className="h-6 bg-white/10 rounded-lg w-3/4 mb-3"></div>
                                            <div className="h-4 bg-white/10 rounded-lg w-1/2 mb-6"></div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {latestVideos.map((video) => (
                                        <div key={video.id} onClick={() => setActiveVideoId(video.id)} className="cursor-pointer group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(251,191,36,0.15)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                            <div className="p-3">
                                                <div className="relative overflow-hidden rounded-2xl">
                                                    <img loading="lazy" src={video.thumbnail} alt={video.title} className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-700 will-change-transform" />
                                                    <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-white shadow-2xl transform scale-90 group-hover:scale-100 transition-transform bg-red-600/90 border-red-500">
                                                            <i className="fa-solid fa-play text-2xl ml-1"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-6 pt-2 flex flex-col flex-grow relative z-10">
                                                <h3 className="font-bold text-xl text-white line-clamp-2 mb-4 group-hover:text-amber-300 transition-colors leading-snug">{video.title}</h3>
                                                <div className="mt-auto flex items-center justify-between">
                                                    <div className="flex items-center gap-2 text-sm text-emerald-100/60 font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                                                        <i className="fa-regular fa-clock"></i> {video.date}
                                                    </div>
                                                    <span className="text-amber-400 text-sm font-bold uppercase tracking-wider flex items-center gap-1 group-hover:text-white transition-colors">
                                                        Play Now <i className="fa-regular fa-circle-play"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Programs Section */}
                    <section id="programs" className="py-24 relative z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-md">Educational Programs</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
                                <p className="text-emerald-100/80 max-w-2xl mx-auto text-lg">Structured learning and regular spiritual gatherings covering various aspects of authentic Islamic knowledge.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {categories.map((cat, index) => (
                                    <a key={index} href={cat.link} target="_blank" rel="noreferrer" className="block bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 shadow-xl relative">
                                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <i className="fa-solid fa-arrow-up-right-from-square text-amber-400/50"></i>
                                        </div>
                                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/20 rounded-2xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-400/50 transition-all duration-300 shadow-inner">
                                            <i className={`fa-solid ${cat.icon} text-2xl`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors">{cat.title}</h3>
                                        <p className="text-emerald-50/70 leading-relaxed text-sm">{cat.desc}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section id="services" className="py-24 relative z-10 bg-black/20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-md">Our Services & Specializations</h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
                                <p className="text-emerald-100/80 max-w-2xl mx-auto text-lg">Comprehensive Islamic education ranging from foundational studies to advanced scholarly training.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {servicesData.map((service, index) => (
                                    <div key={index} className="flex flex-col bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/20 rounded-2xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500/30 transition-all duration-300 shadow-inner">
                                            <i className={`fa-solid ${service.icon} text-2xl`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors">{service.title}</h3>
                                        <p className="text-emerald-50/70 leading-relaxed text-sm mb-6 flex-grow">{service.desc}</p>
                                        <button onClick={(e) => scrollToSection(e, 'contact')} className="mt-auto w-full bg-white/10 hover:bg-amber-500 hover:text-emerald-950 text-white border border-white/20 px-4 py-3 rounded-xl font-medium transition-all backdrop-blur-sm flex items-center justify-center gap-2 group/btn">
                                            Contact Us <i className="fa-solid fa-arrow-right text-sm group-hover/btn:translate-x-1 transition-transform"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="py-24 relative z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                                    <div className="lg:w-1/2 relative w-full flex justify-center">
                                        <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-emerald-500/20 rounded-[3rem] blur-xl z-0"></div>
                                        <div className="relative z-10 rounded-3xl shadow-2xl w-full max-w-sm h-auto aspect-[3/4] border border-white/20 bg-gradient-to-br from-emerald-800 to-emerald-950 flex flex-col items-center justify-center p-8 overflow-hidden">
                                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMGw4IDhaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>
                                            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-emerald-950 font-serif font-bold text-6xl shadow-2xl mb-8 border-4 border-white/10 z-10 transform hover:scale-105 transition-transform duration-500">
                                                MQ
                                            </div>
                                            <div className="text-center z-10">
                                                <div className="text-amber-400 font-bold text-lg mb-1 tracking-widest uppercase">Dr. Mufti</div>
                                                <div className="text-white font-serif font-bold text-2xl drop-shadow-lg">Mujahid Ali Qasmi</div>
                                                <div className="w-12 h-1 bg-amber-500/50 mx-auto mt-4 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-sm font-bold tracking-widest mb-6">BIOGRAPHY</div>
                                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Dr. MUFTI MUJAHID ALI QASMI</h2>
                                        <div className="space-y-6 text-emerald-50/80 text-lg leading-relaxed mb-10">
                                            <p>A dedicated Islamic scholar committed to spreading the authentic teachings of Islam. With a profound understanding of classical texts, he bridges the gap between historical wisdom and contemporary challenges.</p>
                                            <p>He regularly delivers Friday sermons (Khutbahs) at <span className="text-amber-300 font-semibold">Masjid E Rahmath</span> in Banjara Hills, Hyderabad, and conducts special lectures at institutions like <span className="text-amber-300 font-semibold">Misbah Ul Uloom</span>. His teachings cover a wide array of subjects including Fiqh (Jurisprudence), Tafseer (Quranic Exegesis), and Hadees.</p>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-amber-400 flex-shrink-0">
                                                    <i className="fa-solid fa-envelope text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white">Email Address</h4>
                                                    <p className="text-emerald-100/60 text-sm break-all">muftimujahid@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-amber-400 flex-shrink-0">
                                                    <i className="fa-solid fa-phone text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white">Phone / WhatsApp</h4>
                                                    <p className="text-emerald-100/60 text-sm">+91-9700440940 (Masail)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-amber-400 flex-shrink-0">
                                                    <i className="fa-brands fa-youtube text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white">Official Channel</h4>
                                                    <p className="text-emerald-100/60 text-sm">@drmuftimujahid</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        {/* Contact Form */}
                    <section id="contact" className="py-24 relative z-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col lg:flex-row gap-16">
                                <div className="lg:w-5/12">
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-sm font-bold tracking-widest mb-6">GET IN TOUCH</div>
                                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Send a Message</h2>
                                    <p className="text-emerald-100/70 text-lg mb-10 leading-relaxed">If you have a question regarding a specific Masail, or wish to invite Mufti Sahab for a Bayan, please send a message using the secure form.</p>
                                </div>
                                <div className="lg:w-7/12">
                                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                                        {formStatus === 'success' && (
                                            <div className="absolute inset-0 z-20 bg-emerald-950/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
                                                <i className="fa-solid fa-circle-check text-5xl text-emerald-400 mb-6"></i>
                                                <h3 className="text-3xl font-serif font-bold text-white mb-3">Message Sent!</h3>
                                                <p className="text-emerald-100/80 text-lg">Thank you for reaching out. We will get back to you soon.</p>
                                            </div>
                                        )}
                                        <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-emerald-100/80 mb-2">Your Name</label>
                                                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all" placeholder="e.g. Abdullah" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-emerald-100/80 mb-2">Email Address</label>
                                                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all" placeholder="your@email.com" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-emerald-100/80 mb-2">Your Message / Query</label>
                                                <textarea required name="message" value={formData.message} onChange={handleInputChange} rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all resize-none" placeholder="Type your message or masail query here..."></textarea>
                                            </div>
                                            <button disabled={formStatus === 'submitting'} type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-emerald-950 px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70">
                                                {formStatus === 'submitting' ? <><i className="fa-solid fa-spinner fa-spin text-lg"></i> Preparing...</> : <><i className="fa-solid fa-paper-plane text-lg"></i> Send Message</>}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-lg pt-16 pb-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                                <div>
                                    <div className="flex items-center gap-3 mb-6" onClick={(e) => scrollToSection(e, 'home')}>
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-emerald-950 font-serif font-bold text-xl shadow-lg cursor-pointer">MQ</div>
                                        <span className="font-serif font-bold text-xl text-white cursor-pointer">Dr. Mufti Mujahid Ali</span>
                                    </div>
                                    <p className="text-emerald-100/60 text-sm leading-relaxed max-w-sm">Dedicated to providing authentic Islamic knowledge, daily guidance, and spiritual awakening through the teachings of Quran and Sunnah.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                                    <ul className="space-y-4 text-emerald-100/60">
                                        {['home', 'latest', 'programs', 'services', 'contact'].map(item => (
                                            <li key={item}>
                                                <a href={`#${item}`} onClick={(e) => scrollToSection(e, item)} className="hover:text-amber-400 transition-colors flex items-center gap-2 capitalize">
                                                    <i className="fa-solid fa-chevron-right text-xs"></i> {item === 'latest' ? 'Videos' : item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-6">Connect</h4>
                                    <div className="flex gap-4 mb-6">
                                        <a href="https://www.youtube.com/@drmuftimujahid" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-500 text-white transition-all shadow-lg hover:scale-110">
                                            <i className="fa-brands fa-youtube text-xl"></i>
                                        </a>
                                    </div>
                                    <p className="flex items-center gap-2 text-emerald-100/60 text-sm mb-2"><i className="fa-solid fa-location-dot text-amber-400 w-4"></i> Hyderabad, India</p>
                                    <p className="flex items-center gap-2 text-emerald-100/60 text-sm mb-2"><i className="fa-solid fa-phone text-amber-400 w-4"></i> +91-9700440940</p>
                                    <p className="flex items-center gap-2 text-emerald-100/60 text-sm"><i className="fa-solid fa-envelope text-amber-400 w-4"></i> muftimujahid@gmail.com</p>
                                </div>
                            </div>
                            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-100/40">
                                <p>&copy; {new Date().getFullYear()} Dr. Mufti Mujahid Ali Qasmi. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);