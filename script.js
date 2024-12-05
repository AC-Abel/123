document.querySelector('.cup').addEventListener('mousemove', (e) => {
  const cup = e.currentTarget;
  const rect = cup.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = (y - centerY) / 20;
  const rotateY = (centerX - x) / 20;
  
  cup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
});

document.querySelector('.cup').addEventListener('mouseleave', (e) => {
  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
});