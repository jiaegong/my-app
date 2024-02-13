import React, { useEffect } from 'react';

function useScrollUp() {
  const [isScrollUp, setIsScrollUp] = React.useState(false);
  const [prevScrollY, setPrevScrollY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollUp(prevScrollY > currentScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return { isScrollUp, scrollY: prevScrollY };
}

export default useScrollUp;
