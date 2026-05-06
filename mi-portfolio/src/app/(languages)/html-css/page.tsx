"use client";
import Link from "next/link";

export default function HtmlCssPage() {
    return (
        <div className="w-full max-w-4xl mx-auto p-6 min-h-screen">
            <header className="page-header">
                <h1>HTML & CSS Projects</h1>
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
                            <td>Actividad grupal 3: WorldHub — Crisis en el Atlas de Crudzaso</td>
                            <td>
                                <a href="https://github.com/JoseRivera-07/Arthur-s-Kingdom" target="_blank">enlace del repositorio</a><br/>
                                <a href="https://joserivera-07.github.io/Arthur-s-Kingdom/" target="_blank">enlace del sitio publicado</a>
                            </td>
                            <td>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>The Humans of Camelot</li>
                                    <li>Aporte en the sword in the stone</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Historia de usuario - Módulo 2 - Semana 1</td>
                            <td><a href="https://github.com/Michelle22062005/M-dulo-2---Semana-1-html" target="_blank">enlace del repositorio</a></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>CRUDScope – HTML MediaPanel</td>
                            <td><a href="https://github.com/Michelle22062005/crudscope-html-mediapanel" target="_blank">enlace del repositorio</a></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>CrudActivity - Mini OS: Tu escritorio en una sola página</td>
                            <td><a href="https://github.com/FaiberCamachoDev/Mini-OS-Ubuntu" target="_blank">enlace del repositorio</a></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>CRUDactivity — StoreCrud</td>
                            <td><a href="https://github.com/Michelle22062005/StoreCrud" target="_blank">enlace del repositorio</a></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Historia de usuario - Módulo 2 - Semana 2</td>
                            <td><a href="https://github.com/Michelle22062005/M-dulo-2---Semana-1-html/tree/main" target="_blank">enlace del repositorio</a></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Historia de usuario - Módulo 2 - Semana 3</td>
                            <td><a href="https://github.com/Michelle22062005/M-dulo-2---Semana-1-html/tree/main" target="_blank">enlace del repositorio</a></td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
