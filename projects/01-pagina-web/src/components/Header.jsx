export function Header() {
    return (
        <header className="bg-white shadow">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <div className="text-blue-800 font-bold text-xl">WONDER.LEGAL</div>
                <nav className="space-x-6 text-gray-700">
                    <a href="#">INICIO</a>
                    <a href="#">DOCUMENTOS</a>
                    <a href="#">FAQ</a>
                    <a href="#">MI CUENTA</a>
                </nav>
            </div>
        </header>
    )
}
