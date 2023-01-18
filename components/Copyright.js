import React, { useState, useEffect } from "react";

function Copyright() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="mt-8 text-center text-base text-gray-400">
      &copy; {year} KB Développement, All rights reserved.
    </p>
  );
}

export default Copyright;