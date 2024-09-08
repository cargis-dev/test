export type TaxSystem = "С НДС" | "Без НДС" | "С ндс и без НДС";

export interface CarrierPersonal {
    name: string;
    inn?: string;
    codeATI?: string;
    address: string;
    phone: string;
    contact?: string;
    email?: string;
    taxSystem: TaxSystem;
}

export type CarrierAdditional = {
    status: 0 | 1;
    loadRegions: string;
    loadCities?: string;
    unloadRegions: string;
    unloadCities?: string;
    additional?: string;
};

export type CarrierService = {
    id: number;
};

export type CarrierAttributes = CarrierService &
    CarrierPersonal &
    CarrierAdditional;