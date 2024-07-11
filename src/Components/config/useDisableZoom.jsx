import { useEffect } from 'react';

const useDisableZoom = () => {
  useEffect(() => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    const previousContent = metaViewport.getAttribute('content');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no');

    return () => {
      metaViewport.setAttribute('content', previousContent);
    };
  }, []);
};

export default useDisableZoom;
