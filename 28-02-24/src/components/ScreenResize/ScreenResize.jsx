import { useEffect, useState } from "react";

function ScreenResize() {

  const [screen, setScreen] = useState('');
  
  useEffect(() => {

    const handleResize = () => {
        if(window.innerWidth < 1024 && window.innerWidth > 768) {
            setScreen('tablet');
        } else if (window.innerWidth < 767) {
            setScreen('mobile');
        } else if(window.innerWidth > 1024) {
            setScreen('desktop');
        }
    }

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      {screen === 'desktop' && <p>This is displayed only on desktop.</p>}
      {screen === 'tablet' && <p>This is displayed only on tablet.</p>}
      {screen === 'mobile' && <p>This is displayed only on mobile.</p>}
    </div>
  );
}

export default ScreenResize;