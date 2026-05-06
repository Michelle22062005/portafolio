"use client";
import Link from "next/link";

export default function DatabasePage() {
    return(
        <div className="w-full max-w-4xl mx-auto p-6 min-h-screen">
            <header className="page-header">
                <h1>Databases</h1>
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
                            <td>Historia de usuario - Módulo 4 - Semana 1</td>
                            <td><a href="https://github.com/Michelle22062005/m4s1" target="_blank">enlace del repositorio</a></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Crudzaso – InspectaPro (Hybrid Data Architecture)</td>
                            <td><a href="https://github.com/HeroLeni/InspectaPro" target="_blank">enlace del repositorio</a></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Historia de usuario - Módulo 4 - Semana 2</td>
                            <td><a href="https://github.com/Michelle22062005/m4s2" target="_blank">enlace del repositorio</a></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>CrudActivity — SQL: Delivery Ops</td>
                            <td><a href="https://github.com/Michelle22062005/sql_task" target="_blank">enlace del repositorio</a></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>CrudActivity — NoSQL: Delivery Ops (MongoDB)</td>
                            <td><a href="https://github.com/Michelle22062005/NoSQL_Delivery_Ops" target="_blank">enlace del repositorio</a></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>SupCrud by Crudzaso</td>
                            <td><a href="https://github.com/Michelle22062005/SupCrud_by_Crudzaso" target="_blank">enlace del repositorio</a></td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}