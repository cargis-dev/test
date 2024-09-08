export type TaxSystem = "С НДС" | "Без НДС" | "С ндс и без НДС";

export interface CarrierPersonal {
    userName: string;
    userInn?: string;
    codeATI?: string;
    userAddress: string;
    phone: string;
    userContact?: string;
    email?: string;
    taxSystem: TaxSystem;
}

export type CarrierAdditional = {
    userStatus: 0 | 1;
    loadRegions: string;
    loadCities?: string;
    unloadRegions: string;
    unloadCities?: string;
    userAdditional?: string;
};

export type CarrierService = {
    id: number;
};

export type CarrierAttributes = CarrierService &
    CarrierPersonal &
    CarrierAdditional;