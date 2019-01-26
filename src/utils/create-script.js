export default src => {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
};
