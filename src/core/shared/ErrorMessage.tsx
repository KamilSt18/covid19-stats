import React from "react";

export function ErrorMessage({ children: error }: { children: string; }) {
  return <p className="alert alert-danger my-2">{error}</p>;
}
