import { useState } from "react";

export function FormSteps({ formData, setFormData }) {
    const [step, setStep] = useState(1);
    const steps = [
        { id: 1, title: "Datos personales" },
        { id: 2, title: "Detalles del contrato" },
        { id: 3, title: "Confirmación" },
        { id: 4, title: "Detalles del pedido" },
        { id: 5, title: "Datos del solicitante - Persona Natural" },
        { id: 6, title: "Datos del solicitante - Persona Jurídica" },
        { id: 7, title: "Direccion" }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (

        <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-bold mb-4">
                Paso {step}: {steps[step - 1].title}
            </h2>

            {/* Paso 1 */}
            {step === 1 && (
                <>
                    <input
                        name="nombreArrendador"
                        placeholder="Nombre del arrendador"
                        value={formData.nombreArrendador}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    <input
                        name="nombreArrendatario"
                        placeholder="Nombre del arrendatario"
                        value={formData.nombreArrendatario}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </>
            )}

            {/* Paso 2 */}
            {step === 2 && (
                <>
                    <input
                        name="direccion"
                        placeholder="Dirección"
                        value={formData.direccion}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    <input
                        type="date"
                        name="fechaInicio"
                        value={formData.fechaInicio}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </>
            )}

            {/* Paso 3 */}
            {step === 3 && (
                <div>
                    <p>Revisa la información antes de confirmar.</p>
                </div>
            )}

            {/* Paso 4 */}
            {step === 4 && (
                <div>
                    <p>Resumen del Pedido:</p>
                    <input
                        name="pedidoResumen"
                        placeholder="Resumen del pedido"
                        value={formData.pedidoResumen}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    <p>Dependencia o Autoridad a la que se escribe:</p>
                    <input
                        name="autoridad"
                        placeholder="Dependencia o Autoridad"
                        value={formData.autoridad}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    {/*<ul>
                        <li>Nombre del arrendador: {formData.nombreArrendador}</li>
                        <li>Nombre del arrendatario: {formData.nombreArrendatario}</li>
                        <li>Dirección: {formData.direccion}</li>
                        <li>Fecha de inicio: {formData.fechaInicio}</li>
                    </ul>*/}
                </div>
            )}

            {/* Paso 5 */}
            {step === 5 && (
                <div>
                    <p>Apellido Paterno:</p>
                    <input
                        name="ApellidoPaterno"
                        placeholder="Apellido Paterno"
                        value={formData.ApellidoPaterno}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    <p>Apellido Materno:</p>
                    <input
                        name="solicitanteApellidoMaterno"
                        placeholder="Apellido Materno"
                        value={formData.solicitanteApellidoMaterno}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    <p>Nombres:</p>
                    <input
                        name="Nombres"
                        placeholder="Nombres"
                        value={formData.Nombres}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
            )}

            {/* Paso 6 */}
            {step === 6 && (
                <div>
                    <p>Razón Social:</p>
                    <input
                        name="razonSocial"
                        placeholder="Razón Social"
                        value={formData.razonSocial}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    <p>Nombre del Representante Legal:</p>
                    <input
                        name="nombreRepresentanteLegal"
                        placeholder="Nombre del Representante Legal"
                        value={formData.nombreRepresentanteLegal}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    <p>Tipo de documento:</p>
                    <select
                        name="tipoDocumento"
                        value={formData.tipoDocumento}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="">Seleccione un tipo de documento</option>
                        <option value="DNI">DNI</option>
                        <option value="RUC">RUC</option>
                        <option value="C.E">Carnet de Extranjeria</option>
                    </select>
                    <p>Numero de documento:</p>
                    <input
                        name="numeroDocumento"
                        placeholder="Numero de documento"
                        value={formData.numeroDocumento}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
            )}

            {/* Paso 7 */}
            {step === 7 && (
                <div>
                    <p>Tipo de Vía:</p>
                    <select
                        name="tipoVia"
                        value={formData.tipoVia}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="">Seleccione un tipo de vía</option>
                        <option value="Av.">Avenida</option>
                        <option value="Calle">Calle</option>
                        <option value="Pasaje">Pasaje</option>
                        <option value="Jiron">Jirón</option>
                        <option value="Carretera">Carretera</option>
                        <option value="Prolongacion">Prolongación</option>
                    </select>

                    <p>Nombre de la Via:</p>
                    <input
                        name="nombreVia"
                        placeholder="Nombre de la Via"
                        value={formData.nombreVia}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <p>Tipo de Zona:</p>
                    <select
                        name="tipoZona"
                        value={formData.tipoZona}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="">Seleccione un tipo de zona</option>
                        <option value="Urbanizacion">Urbanizacion</option>
                        <option value="PuebloJoven">Pueblo Joven</option>
                        <option value="UnidadVecinal">Unidad Vecinal</option>
                        <option value="ConjuntoHabitacional">Conjunto Habitacional</option>
                        <option value="Cooperativa">Cooperativa</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Zona Industrial">Zona Industrial</option>
                        <option value="Centro Poblado">Centro Poblado</option>
                        <option value="Asociacion">Asociación</option>
                        <option value="Grupo">Grupo</option>
                        <option value="Fundo">Fundo</option>
                        <option value="Otros">Otros</option>
                    </select>

                    <p>Nombre de la zona:</p>
                    <input
                        name="nombreZona"
                        placeholder="Nombre de la zona"
                        value={formData.nombreZona}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <p>Referencia:</p>
                    <input
                        name="referencia"
                        placeholder="Referencia"
                        value={formData.referencia}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    <p>Departamento</p>
                    <input
                        name="departamento"
                        placeholder="Departamento"
                        value={formData.departamento}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    <p>Provincia</p>
                    <input
                        name="provincia"
                        placeholder="Provincia"
                        value={formData.provincia}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                    <p>Distrito</p>
                    <input
                        name="distrito"
                        placeholder="Distrito"
                        value={formData.distrito}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
            )}

            {/* Botones de navegación */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setStep((s) => Math.max(s - 1, 1))}
                    className="bg-gray-300 px-4 py-2 rounded"
                    disabled={step === 1}
                >
                    Anterior
                </button>
                <button
                    onClick={() => setStep((s) => Math.min(s + 1, steps.length))}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    disabled={step === steps.length}
                >
                    Siguiente
                </button>
            </div>
        </div>
    )

}