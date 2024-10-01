import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
};

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const portalRoot = document.getElementById("portal-root");
    setPortalElement(portalRoot);
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!mounted || !portalElement) {
    return null;
  }

  return createPortal(children, portalElement);
};

export default Portal;
