"use client";
import Link from "next/link";

export default function TypeScriptPage() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 min-h-screen">
      <header className="page-header">
        <h1>TypeScript</h1>
        <Link href="/" className="btn-return">
          Volver
        </Link>
      </header>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Enlace</th>
              <th>Módulo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sistema de Cajero Automático</td>
              <td>
                <a
                  href="https://github.com/Michelle22062005/ejercicio-Sistema-de-Cajero-Autom-tico"
                  target="_blank"
                >
                  enlace del repositorio
                </a>
              </td>
              <td>5</td>
            </tr>
            <tr>
              <td>Lista de tareas</td>
              <td>
                <a href="https://todo-list-plum-eta.vercel.app/">
                  enlace del repositorio
                </a>
              </td>
              <td>5</td>
            </tr>

            <tr>
              <td>Receta de cocina</td>
              <td>
                <a
                  href="https://github.com/Michelle22062005/prueba-typescript-cooking-recipe"
                  target="_blank"
                >
                  enlace del repositorio
                </a>
              </td>
              <td>5</td>
            </tr>

            <tr>
              <td>Comercio electrónico</td>
              <td>
                <a
                  href="https://github.com/Michelle22062005/e-commerce"
                  target="_blank"
                >
                  enlace del repositorio
                </a>
              </td>
              <td>5</td>
            </tr>
            <tr>
              <td>Vectores de embeddings con Next.js</td>
              <td>
                <a
                  href="https://github.com/Michelle22062005/ejercicio-Embeddings-Vector-Next.js"
                  target="_blank"
                >
                  enlace del repositorio
                </a>
              </td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
