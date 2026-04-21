// Jake Altom Portfolio - Script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Entrance Animation Gating ---
    const openingWrapper = document.getElementById('opening-wrapper');
    
    // Check if user came from inside the site
    const isInternalNavigation = document.referrer && document.referrer.includes(window.location.hostname);
    const skipAnimation = isInternalNavigation && sessionStorage.getItem('portfolio_opened');

    if (openingWrapper) {
        if (!skipAnimation) {
            openingWrapper.classList.add('opening-up-wrapper');
            setTimeout(() => {
                openingWrapper.classList.add('opening-up-animate');
                sessionStorage.setItem('portfolio_opened', 'true');
            }, 100);
        } else {
            // No animation if already seen this session or moving between internal pages
            openingWrapper.classList.remove('opening-up-wrapper');
        }
    }

    // --- Theme Management ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (themeToggle) {
        themeToggle.textContent = currentTheme === 'dark' ? 'LIGHT MODE' : 'DARK MODE';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? 'LIGHT MODE' : 'DARK MODE';
        });
    }

    // --- Intersection Observer for Reveals ---
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // --- Smooth Anchor Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Set Active Nav Link ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // --- Hobby Tab Switching ---
    const hobbyChips = document.querySelectorAll('.hobby-chips .chip');
    const hobbyPanels = document.querySelectorAll('.hobby-panel');

    if (hobbyChips && hobbyChips.length > 0) {
        hobbyChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const target = chip.getAttribute('data-hobby');
                
                // Update chips
                hobbyChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                
                // Update panels
                hobbyPanels.forEach(panel => {
                    if (panel.id === target) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            });
        });
    }

    // --- Neural Network Hero Visualizer ---
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let dots = [];
        const dotCount = 40;
        const connectionDist = 100;
        
        const initCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            dots = [];
            for (let i = 0; i < dotCount; i++) {
                dots.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        };

        let mouse = { x: null, y: null };
        canvas.parentElement.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        canvas.parentElement.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        const drawDots = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const color = isDark ? '76, 175, 80' : '45, 90, 39'; // Primary color in RGB
            
            const activeDots = [...dots];
            if (mouse.x !== null) {
                activeDots.push({ x: mouse.x, y: mouse.y, isMouse: true });
            }

            activeDots.forEach((dot, index) => {
                if (!dot.isMouse) {
                    dot.x += dot.vx;
                    dot.y += dot.vy;

                    if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
                    if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${color}, 0.5)`;
                    ctx.fill();
                }

                for (let j = index + 1; j < activeDots.length; j++) {
                    const other = activeDots[j];
                    const dx = dot.x - other.x;
                    const dy = dot.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDist) {
                        ctx.beginPath();
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = `rgba(${color}, ${1 - dist/connectionDist})`;
                        ctx.lineWidth = dot.isMouse || other.isMouse ? 1 : 0.5;
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(drawDots);
        };

        initCanvas();
        drawDots();
        window.addEventListener('resize', initCanvas);
    }

    // --- Cognitive Insight Engine ---
    const insightText = document.getElementById('insight-text');
    const insightMeta = document.getElementById('insight-meta');
    
    if (insightText && insightMeta) {
        const insights = [
            { text: "Your brain's working memory can typically hold only 7±2 pieces of information. AI attention mechanisms aim to bypass this bottleneck.", category: "Cognitive Psychology" },
            { text: "Neural networks aren't 'smart'—they're just exceptionally good at high-dimensional pattern matching.", category: "AI Architecture" },
            { text: "The 'Uncanny Valley' occurs when a simulation is almost, but not perfectly, human, triggering a biological avoidance response.", category: "Human-AI Interaction" },
            { text: "Reinforcement Learning is modeled after Operant Conditioning: behaviors followed by rewards are more likely to be repeated.", category: "Behavioral AI" },
            { text: "Heuristics are mental shortcuts that ease cognitive load, often at the cost of accuracy. Modern AI uses similar trade-offs.", category: "Decision Theory" }
        ];

        let currentInsight = 0;
        
        const updateInsight = () => {
            const insight = insights[currentInsight];
            
            // Fade out
            insightText.style.opacity = 0;
            insightMeta.style.opacity = 0;
            
            setTimeout(() => {
                insightText.textContent = `"${insight.text}"`;
                insightMeta.textContent = `Theoretical Focus: ${insight.category}`;
                
                // Fade in
                insightText.style.opacity = 1;
                insightMeta.style.opacity = 1;
                
                currentInsight = (currentInsight + 1) % insights.length;
            }, 500);
        };

        // Initialize display styles for transitions
        insightText.style.transition = 'opacity 0.5s ease-in-out';
        insightMeta.style.transition = 'opacity 0.5s ease-in-out';
        
        // Initial update with delay for effect
        setTimeout(updateInsight, 1000);
        
        // Cycle every 8 seconds
        setInterval(updateInsight, 8000);
    }

    // --- Interactive Globe ---
    const globeCanvas = document.getElementById('globe-canvas');
    if (globeCanvas) {
        const parent = document.getElementById('globe-parent');
        const context = globeCanvas.getContext('2d');
        let width = parent.offsetWidth;
        let height = parent.offsetHeight;
        const dpr = window.devicePixelRatio || 1;
        
        let world;
        let isDragging = false;
        let rotation = [0, -20];
        let velocity = [0.015, 0];
        let lastTime = Date.now();

        const projection = d3.geoOrthographic()
            .precision(0.1);
            
        const path = d3.geoPath(projection, context);

        function updateDimensions() {
            width = parent.offsetWidth;
            height = parent.offsetHeight;
            globeCanvas.width = width * dpr;
            globeCanvas.height = height * dpr;
            globeCanvas.style.width = width + 'px';
            globeCanvas.style.height = height + 'px';
            context.scale(dpr, dpr);
            
            projection
                .scale((Math.min(width, height) / 2) - 10)
                .translate([width / 2, height / 2]);
        }

        updateDimensions();

        // Load data
        d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(data => {
            world = topojson.feature(data, data.objects.countries);
            startAnimation();
        }).catch(err => {
            console.error("Globe data failed to load:", err);
            // Fallback: render empty sphere
            world = { type: "FeatureCollection", features: [] };
            startAnimation();
        });

        function startAnimation() {
            function render() {
                const now = Date.now();
                const dt = now - lastTime;
                lastTime = now;

                if (!isDragging) {
                    rotation[0] += velocity[0] * dt * 0.05;
                }
                projection.rotate(rotation);

                context.clearRect(0, 0, width, height);
                
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                
                // Set colors based on theme
                const colors = isDark ? {
                    sea: '#000000',
                    land: '#2D5A27',
                    stroke: 'rgba(76, 175, 80, 0.3)',
                    outline: '#4CAF50'
                } : {
                    sea: '#f8f8f8',
                    land: '#4CAF50',
                    stroke: 'rgba(45, 90, 39, 0.2)',
                    outline: '#2D5A27'
                };

                // Sphere background
                context.beginPath();
                path({type: 'Sphere'});
                context.fillStyle = colors.sea;
                context.fill();

                // Land
                if (world) {
                    context.beginPath();
                    path(world);
                    context.fillStyle = colors.land;
                    context.fill();
                    context.strokeStyle = colors.stroke;
                    context.lineWidth = 0.5;
                    context.stroke();
                }

                // Globe Outline
                context.beginPath();
                path({type: 'Sphere'});
                context.strokeStyle = colors.outline;
                context.lineWidth = 1.5;
                context.stroke();

                requestAnimationFrame(render);
            }
            render();
        }

        // Drag Interactivity
        d3.select(globeCanvas).call(d3.drag()
            .on('start', () => {
                isDragging = true;
                parent.style.cursor = 'grabbing';
            })
            .on('drag', (event) => {
                const r = projection.rotate();
                const k = 75 / projection.scale();
                rotation = [r[0] + event.dx * k, r[1] - event.dy * k];
                projection.rotate(rotation);
            })
            .on('end', () => {
                isDragging = false;
                parent.style.cursor = 'grab';
                lastTime = Date.now();
            })
        );

        window.addEventListener('resize', updateDimensions);
    }
});
