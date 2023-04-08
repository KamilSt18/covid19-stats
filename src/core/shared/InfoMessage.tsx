import React from "react";

export function InfoMessage({ children: error }: { children: string; }) {
  return <p className="alert alert-info my-2">{error}</p>;
}
