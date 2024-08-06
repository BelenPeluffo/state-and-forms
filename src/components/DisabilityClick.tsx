import { Box, Modal } from "@mui/material";
import { ReactElement, cloneElement, useCallback, useState } from "react";

/**
 * Componente wrapper que ejecuta una funcionalidad cuando el campo hijo está deshabilitado.
 * @param disabled Estado de deshabilitación del campo hijo.
 * @param child Elemento hijo a modificar y renderizar.
 * @returns Elemento hijo modificado según la condición.
 */
const DisabilityClick = ({
  disabled,
  child,
}: {
  disabled: boolean;
  child: ReactElement;
}) => {
  const [isOpen, setOpen] = useState(false);
  const modifiedChild = useCallback(() => {
    /**
     * Elemento original para tener de referencia.
     */
    const originalChild = cloneElement(child);
    return disabled
      ? cloneElement(child, {
          disabled: true,
          sx: { ...originalChild.props.sx, zIndex: -1 },
        })
      : null;
  }, [disabled]);

  const handleFieldClick = () => {
    console.log("Ejecutando handleFieldClick");
    setOpen(!isOpen);
  };
  return disabled ? (
    <div onClick={handleFieldClick} style={{ zIndex: 0 }}>
      {modifiedChild()}
      <Modal open={isOpen} onClose={handleFieldClick}>
        <Box>Yeah</Box>
      </Modal>
    </div>
  ) : (
    child
  );
};

export default DisabilityClick;
