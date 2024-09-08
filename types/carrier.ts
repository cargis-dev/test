export type TaxSystem = "С НДС" | "Без НДС" | "С ндс и без НДС";

export interface CarrierPersonal {
    carrierName: string;
    carrierInn?: string;
    carrierCodeATI?: string;
    carrierAddress: string;
    phone: string;
    contact?: string;
    email?: string;
    taxSystem: TaxSystem;
}

export type CarrierAdditional = {
    carrierStatus: 0 | 1;
    loadRegions: string;
    loadCities?: string;
    carrierUnloadRegions: string;
    unloadCities?: string;
    carrierAdditional?: string;
};

export type CarrierService = {
    id: number;
};

export type CarrierAttributes = CarrierService &
    CarrierPersonal &
    CarrierAdditional;