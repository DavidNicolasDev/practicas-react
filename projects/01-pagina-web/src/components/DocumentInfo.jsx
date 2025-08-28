import { Star, FileText, Calendar } from "lucide-react";
import {Link} from "react-router-dom";

export function DocumentInfo() {
    return (
        <section className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow">
            {/* Vista previa */}
            <div className="border rounded-xl overflow-hidden">
                <img
                    src="https://via.placeholder.com/400x500?text=Contrato+Preview"
                    alt="Vista previa contrato"
                    className="w-full"
                />
            </div>

            {/* Información */}
            <div>
                <h1 className="text-2xl font-bold mb-4">
                    Contrato de arrendamiento de vivienda habitual
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> 24/05/2025
                    </div>
                    <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" /> Word y PDF
                    </div>
                    <div>10 a 15 páginas</div>
                </div>
                <div className="flex items-center mb-4">
                    {Array(5)
                        .fill()
                        .map((_, i) => (
                            <Star
                                key={i}
                                className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                            />
                        ))}
                    <span className="ml-2 text-gray-600">4,5 - 315 votos</span>
                </div>
                <Link to="/rellenar-modelo" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg">
                    Ir a Rellenar Modelo
                </Link>
            </div>
        </section>
    )
}
