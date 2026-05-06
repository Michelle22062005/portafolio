"use client";
import Link from "next/link";

export default function TypeScriptPage() {
    return(
        <div className="w-full max-w-4xl mx-auto p-6 min-h-screen">
            <header className="page-header">
                <h1>TypeScript</h1>
                <Link href="/" className="btn-return">Return</Link>
            </header>
            
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th>Link</th>
                            <th>Module</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sistema de Cajero Automático</td>
                            <td><a href="https://github.com/Michelle22062005/ejercicio-Sistema-de-Cajero-Autom-tico" target="_blank">enlace del repositorio</a></td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}