"use client"
import Link from "next/link"

export default function Python() {
    return(
        <div className="w-full max-w-4xl mx-auto p-6 min-h-screen">
            <header className="page-header">
                <h1>Python Projects</h1>
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
                            <td>Ejercicios Python</td>
                            <td><a href="https://github.com/Michelle22062005/ejercicios-python" target="_blank">enlace del repositorio</a></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Actividad grupal: EcoRide – Simulador de alquiler de bicicletas sostenibles</td>
                            <td><a href="https://github.com/Michelle22062005/ejercicios/blob/main/bicicleta.py" target="_blank">enlace del repositorio</a></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Historia de usuario M1S1</td>
                            <td><a href="https://github.com/Michelle22062005/modulo1_semana1/blob/main/inventario1.py" target="_blank">enlace del repositorio</a></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Actividad decisiones y ciclos en python</td>
                            <td><a href="https://github.com/Michelle22062005/Actividad-deciciones-y-ciclos-en-python" target="_blank">enlace del repositorio</a></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Historia de usuario M1S3</td>
                            <td><a href="https://github.com/Michelle22062005/M-dulo-1---Semana-3" target="_blank">enlace del repositorio</a></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>CrudActivity - CrudData — Estructuras de Datos en Python</td>
                            <td><a href="https://github.com/Michelle22062005/modulo1_semana1/tree/main/Estructura_de_Datos_en_Python" target="_blank">enlace del repositorio</a></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Actividad grupal 2: Grudzaso-games</td>
                            <td><a href="https://github.com/veromarti/crudzaso-games" target="_blank">enlace del repositorio</a></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Actividad Galactic Library Keeper — Sistema de Gestión de Archivos Interplanetarios</td>
                            <td><a href="https://github.com/Michelle22062005/Galactic-Library-Keeper-Sistema-de-Gesti-n-de-Archivos-Interplanetarios" target="_blank">enlace del repositorio</a></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Actividad Galactic Library Keeper (Update)</td>
                            <td><a href="https://github.com/Michelle22062005/Galactic-Library-Keeper-Sistema-de-Gesti-n-de-Archivos-Interplanetarios" target="_blank">enlace del repositorio</a></td>
                            <td>1</td>
                        </tr>   
                    </tbody>
                </table>
            </div>
        </div>
    )
}