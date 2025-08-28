export function Breadcrumbs() {
    const items = [
        { label: "Inicio", href: "#" },
        { label: "Documentos", href: "#" },
        { label: "Particulares", href: "#" },
        { label: "Alojamiento, inmobiliario", href: "#" },
        { label: "Contrato de arrendamiento de vivienda habitual" }
    ];
    return (
        <nav className="bg-gray-50 py-2 text-sm text-gray-600">
            <div className="max-w-6xl mx-auto px-4">
                <ol className="flex flex-wrap items-center gap-1">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="hover:underline text-blue-700"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span className="text-gray-800 font-medium">{item.label}</span>
                            )}
                            {index < items.length - 1 && (
                                <span className="mx-2 text-gray-400">›</span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    )
}
