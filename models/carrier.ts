"use strict";
import { Model } from "sequelize";
import {
    CarrierAttributes,
    TaxSystem,
} from "../types/carrier";

module.exports = (sequelize: any, DataTypes: any) => {
    class Carrier extends Model<CarrierAttributes> implements CarrierAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id!: number;
        carrierName!: string;
        carrierInn!: string;
        carrierCodeATI!: string;
        carrierAddress!: string;
        phone!: string;
        contact!: string;
        email!: string;
        taxSystem!: TaxSystem;
        carrierStatus!: 0 | 1;
        loadRegions!: string;
        loadCities!: string;
        carrierUnloadRegions!: string;
        unloadCities!: string;
        carrierAdditional!: string;
        static associate(models: any) {
            models.Carrier.belongsTo(models.User, { as: "creator" });
            models.Carrier.hasMany(models.Transport);
        }
    }

    Carrier.init(
        {
            onlyDevelop: true,
        },
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            carrierName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            carrierInn: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            carrierCodeATI: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            carrierAddress: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            contact: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            taxSystem: {
                type: DataTypes.STRING,
                allowNull: false,
                values: ["С НДС", "Без НДС", "С ндс и без НДС"],
            },
            carrierStatus: {
                type: DataTypes.TINYINT,
                allowNull: false,
            },
            loadRegions: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            loadCities: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            carrierUnloadRegions: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            unloadCities: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            carrierAdditional: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            sequelize,
            charset: "utf8",
            collate: "utf8_general_ci",
            modelName: "Carrier",
            getterMethods: {
                loadRegions: function () {
                    return this.getDataValue("loadRegions").split(",");
                },
                unloadRegions: function () {
                    return this.getDataValue("unloadRegions").split(",");
                },
            },
            setterMethods: {
                loadRegions: function (val: string[]) {
                    return this.setDataValue("loadRegions", val.join(","));
                },
                unloadRegions: function (val: string[]) {
                    return this.setDataValue("unloadRegions", val.join(","));
                },
            },
        },
    );

    return Carrier;
};
