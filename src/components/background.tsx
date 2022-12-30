import React, { useRef, useEffect } from 'react';

const generateColors = (alpha: number) => {
  const colors: string[] = [];
  for (let i = 1; i <= 25; i++) {
    const hue = Math.floor(Math.random() * 4);
    let color = '';
    if (hue === 0) {
      // light yellow
      color = `hsla(60, 100%, 90%, ${alpha})`;
    } else if (hue === 1) {
      // light blue
      color = `hsla(240, 100%, 90%, ${alpha})`;
    } else if (hue === 2) {
      // light red
      color = `hsla(0, 100%, 90%, ${alpha})`;
    } else {
      // light green
      color = `hsla(120, 100%, 90%, ${alpha})`;
    }
    colors.push(color);
  }
  return colors;
};

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set the canvas dimensions to match the size of the parent element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create an array to hold the positions of the stars
    const stars: { x: number; y: number; radius: number; alpha: number }[] = [];

    // Generate the initial positions of the stars
    for (let i = 0; i < 500; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2 + 1;
      const alpha = Math.random();
      stars.push({ x, y, radius, alpha });
    }

    // Animate the stars by updating their positions and redrawing them on the canvas
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI, false);

        const shouldSparkle = Math.random() > 0.9999999;

        const alpha = shouldSparkle ? Math.random() : star.alpha;
        const colours = generateColors(alpha);
        const randomColor = colours[Math.floor(Math.random() * colours.length)];

        context.fillStyle = randomColor;
        context.fill();

        // Update the position of the star
        star.x += Math.random() - 0.5;
        star.y += Math.random() - 0.5;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ background: 'black', flex: 1, overflow: 'hidden' }}
    />
  );
};

export default StarField;
