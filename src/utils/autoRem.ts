const autoRem = (min: number, max: number, isResize: boolean) => {
  const htmlStyle = window.document.getElementsByTagName('html')[0].style;
  const resize = () => {
    const w = window.innerWidth;
    htmlStyle.fontSize = (((w > max && max) || (w < min && min) || w) / max) * 100 + 'px';
  };
  resize();
  if (isResize) {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }
};

export default autoRem;
