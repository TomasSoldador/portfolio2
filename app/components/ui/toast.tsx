// components/ui/toast.tsx

import * as React from "react";

// Definindo os tipos do toast
export type ToastActionElement = React.ReactNode;

export interface ToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
}

export function Toast({ title, description, action }: ToastProps) {
  return (
    <div className="toast">
      <div className="toast-content">
        {title && <div className="toast-title">{title}</div>}
        {description && <div className="toast-description">{description}</div>}
      </div>
      {action && <div className="toast-action">{action}</div>}
    </div>
  );
}
