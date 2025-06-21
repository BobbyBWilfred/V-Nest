import React from 'react';
import { ArrowRightIcon, ChevronDownIcon } from './Icons';
import { AnimatedSection } from './ReusableComponents';

const Hero = () => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        class Particle {
            constructor(x, y, dirX, dirY, size, color) {
                Object.assign(this, { x, y, dirX, dirY, size, color });
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) this.dirX = -this.dirX;
                if (this.y > canvas.height || this.y < 0) this.dirY = -this.dirY;
                this.x += this.dirX; this.y += this.dirY;
                this.draw();
            }
        }

        function init() {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = Math.random() * (innerWidth - size * 2) + size * 2;
                let y = Math.random() * (innerHeight - size * 2) + size * 2;
                let dirX = (Math.random() * .4) - .2;
                let dirY = (Math.random() * .4) - .2;
                let color = 'rgba(168, 85, 247, 0.6)'; // More prominent purple for particles
                particles.push(new Particle(x, y, dirX, dirY, size, color));
            }
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) ** 2) + ((particles[a].y - particles[b].y) ** 2);
                    if (distance < (canvas.width/7) * (canvas.height/7)) {
                        opacityValue = 1 - (distance/20000);
                        ctx.strokeStyle = `rgba(192, 132, 252, ${opacityValue})`; // Lighter purple for connections
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            particles.forEach(p => p.update());
            connect();
            animationFrameId = requestAnimationFrame(animate);
        }
        
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', handleResize);
        init();
        animate();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <AnimatedSection id="home" className="relative bg-gradient-to-br from-black to-purple-950 text-white min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-grid-purple"></div>
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-10"></canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-20"></div>
            <div className="container mx-auto px-6 z-30 text-center relative">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight animate-fade-in-down bg-clip-text text-transparent bg-gradient-to-br from-white via-purple-300 to-purple-500 drop-shadow-lg hero-title">
                    Incubating The Future
                </h1>
                <p className="text-lg md:text-xl text-purple-100 mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-300 hero-subtitle">
                    V-NEST is the launchpad where visionary founders and disruptive technology converge to create tomorrow's <span className="font-bold text-white">unicorns.</span>
                </p>
                <div className="animate-fade-in-up animation-delay-600">
                    <a href="#about" className="cta-button-large group">
                        <span>Discover Our Mission</span>
                        <ArrowRightIcon className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-purple-300 animate-bounce">
                    <ChevronDownIcon className="w-8 h-8" />
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Hero;
