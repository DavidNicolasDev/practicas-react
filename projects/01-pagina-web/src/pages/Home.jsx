import { Header } from '../components/Header.jsx'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { HowItWorks } from '../components/HowItWorks'
import { DocumentInfo } from '../components/DocumentInfo.jsx'
import { Description } from '../components/Description.jsx'
import { Guia } from '../components/Guia.jsx'
import { Footer } from '../components/Footer.jsx'

export function Home() {

    return (
        <div className='min-h-screen flex flex-col bg-gray-50'>
            <Header />
            <Breadcrumbs />
            <main className='max-w-6xl mx-auto p-4 md:p-6 flex-1 space-y-6'>
                <div className='grid md:grid-cols-3 gap-6 items-start'>
                    <div className='space-y-6 md:col-span-1'>
                        <div className='bg-white border rounded-2xl shadow-sm overflow-hidden'>
                            <img
                                src="https://via.placeholder.com/400x500?text=Contrato+Preview"
                                alt="Vista previa contrato"
                                className="w-full"
                            />
                        </div>
                        <HowItWorks />
                    </div>

                    <div className='space-y-6 md:col-span-2'>
                        <DocumentInfo />
                        <Description />
                        <Guia />
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}
