export function PreviewPane({ formData }) {
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Vista Previa del Documento</h2>
            <p className="text-gray-700">Aquí se mostrará una vista previa del documento que estás creando.</p>
            <div className="mt-4">
                {/* Aquí podrías incluir un componente de vista previa real */}
                <div className="border border-gray-300 p-4 rounded-lg">
                    <p>Contenido del documento...</p>
                    <p><strong>Arrendador:</strong> {formData.nombreArrendador || "—"}</p>
                    <p><strong>Arrendatario:</strong> {formData.nombreArrendatario || "—"}</p>
                    <p><strong>Dirección:</strong> {formData.direccion || "—"}</p>
                    <p><strong>Fecha de inicio:</strong> {formData.fechaInicio || "—"}</p>
                    <p><strong>Resumen del pedido:</strong> {formData.resumenPedido || "—"}</p>
                </div>
            </div>
        </div>
    )
}