import { useState } from 'react';
import { ProgressBar } from "../components/ProgressBar"
import { FormSteps } from "../components/FormSteps"
import { PreviewPane } from "../components/PreviewPane";
import { Header } from '../components/Header';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function RellenarModelo() {
    const [formData, setFormData] = useState({
        nombreArrendador: "",
        nombreArrendatario: "",
        direccion: "",
        fechaInicio: "",
        pedidoResumen: "",
    });
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(Boolean).length;
    const progress = Math.round((filledFields / totalFields) * 100);
    return (
        <>
            <div className='min-h-screen flex flex-col bg-gray-50'>
                <Header />
                <Breadcrumbs />
                <ProgressBar progress={progress} />
                <main className='max-w-6xl mx-auto p-4 md:p-6 flex-1 space-y-6'>
                    <div className='grid md:grid-cols-3 gap-6 items-start'>
                        <div className='space-y-6 md:col-span-1'>
                            <FormSteps formData={formData} setFormData={setFormData} />
                        </div>

                        <div className='space-y-6 md:col-span-2'>
                            <PreviewPane formData={formData} />
                        </div>
                    </div>


                </main>
            </div>
        </>

    )
}

