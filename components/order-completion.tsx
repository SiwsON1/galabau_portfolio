import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from "lucide-react";

const OrderCompletion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center p-10"
    >
      <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500" />
      <h2 className="mt-2 text-lg font-medium text-gray-900">Bestellung erfolgreich!</h2>
      <p className="mt-1 text-sm text-gray-600">
        Vielen Dank für Ihr Vertrauen und die Auftragserteilung.
        Wir bestätigen, dass Ihre Bestellung für das Zaunsystem erfolgreich entgegengenommen wurde.
        Unsere Mitarbeiter werden sich in Kürze mit Ihnen in Verbindung setzen, um die nächsten Schritte zu besprechen.
      </p>
    </motion.div>
  );
};

export default OrderCompletion;