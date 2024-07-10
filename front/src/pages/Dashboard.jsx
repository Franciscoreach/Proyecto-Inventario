import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Proveedores } from '/src/components/Proveedores.jsx';
import { Footer } from '/src/components/Footer.jsx';

export function PaginaDashboard() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex">
                {/* Sidebar */}
                <div className="w-72 ">
                    <Sidebar />
                </div>
                {/* Contenido principal */}
                <div className="flex-1 ">
                    <Proveedores />
                </div>
            </div>
            {/* Footer */}
            <footer className="mt-auto text-center z-10">
                <Footer />
            </footer>
        </div>
    );
}
