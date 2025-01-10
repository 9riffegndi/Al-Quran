import React, { useEffect, useState } from "react";

export default function ThemeControl({ className = "" }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "lemonade");

    useEffect(() => {
        // Menetapkan tema pada elemen <html> setiap kali tema berubah
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); // Menyimpan tema yang dipilih ke localStorage
    }, [theme]);

    const handleThemeChange = (event) => {
        // Memperbarui tema ketika pilihan baru dipilih
        setTheme(event.target.value); 
    };

    return (
        <>
            <label htmlFor="theme-selector" className="sr-only">Select Theme</label>
            <select
                id="theme-selector"
                className={`select select-primary select-sm ${className}`}
                value={theme} // Ini memastikan tema yang dipilih dikendalikan oleh React
                onChange={handleThemeChange}
            >
                <option value="lemonade">Light</option>
                <option value="dark">Dark</option>
                <option value="night">Dark v2</option>
                <option value="business">Dark v3</option>
                <option value="dracula">Dark v4</option>
                <option value="sunset">Dark v5</option>
            </select>
        </>
    );
}
