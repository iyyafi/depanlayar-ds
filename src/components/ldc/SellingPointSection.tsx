export interface SellingPointSectionProps {
    headline: string,
    primaryText: string,
    buttonLink: string,
    buttonText: string,
}

import { Icon } from '@iconify/react';

const usp = [
    {
        name: "STRATEGIC PLANNING",
        information: "Membuat strategi digital yang disesuaikan untuk mencapai tujuan bisnis unik Anda, menggabungkan analisis mendalam dengan wawasan berbasis data."
    },
    {
        name: "ENHANCED BRANDING",
        information: "Membantu meningkatkan branding digital dan identitas Anda melalui redesain situs web, pengelolaan konten, dan pemasaran konten yang efektif."
    },
    {
        name: "CONVERSION OPTIMIZATION",
        information: "Menyesuaikan kehadiran digital Anda untuk memaksimalkan konversi, baik itu penjualan e-commerce, generasi leads, atau indikator kinerja kunci lainnya."
    },
    {
        name: "DATA ANALYSIS & REPORTING",
        information: "Memberikan analisis data mendalam dan pelaporan secara berkala untuk membantu Anda memahami kinerja digital dan mengubah wawasan menjadi perbaikan yang dapat dilaksanakan."
    },
    {
        name: "LONG-TERM PARNERTSHIP",
        information: "Bersama dengan LDC melakukan perbaikan berkelanjutan, pembaruan, dan penyesuaian untuk memastikan kehadiran digital Anda tetap efektif dan sejalan dengan tujuan bisnis Anda yang terus berkembang."
    },
]

export const SellingPointSection =({
    headline, primaryText, buttonLink, buttonText,
}: SellingPointSectionProps) => {
    return (
        <section className="px-6">
            <div className="container flex w-full flex-col gap-8 lg:flex-row">
                <div className="flex w-full flex-col justify-center lg:w-5/12">
                    <h2
                        className="font-sans text-2xl font-bold leading-tight text-text-primary lg:text-5xl"
                    >
                        {headline}
                    </h2>
                    <p
                        className="my-4 font-display text-base leading-tight text-text-secondary lg:text-xl"
                    >
                        {primaryText}
                    </p>
                    <a href={buttonLink} target="_self">
                        <button
                        className="mt-0 self-center rounded-[50px] bg-primary px-5 py-2 text-sm font-semibold text-white lg:mt-6 lg:self-start lg:text-lg"
                        >
                        {buttonText}
                        </button>
                    </a>
                </div>

                <div className="w-full lg:w-7/12">
                {
                    usp?.length &&
                    usp.map((sp) => {
                        return (
                        <div className="mb-5 flex flex-row gap-2">
                            <Icon className="h-8 w-8 text-yellow-300" height="8" width="8" icon="ic:round-star" />
                            <div className="w-11/12">
                                <h3 className="font-display text-base font-bold leading-tight text-text-primary lg:text-2xl">
                                    {sp.name}
                                </h3>
                                <p className="font-display text-sm leading-tight text-text-secondary lg:text-base">
                                    {sp.information}
                                </p>
                            </div>
                        </div>
                        );
                    })
                }
                </div>
            </div>
        </section>
    )
}