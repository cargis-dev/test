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
        name!: string;
        inn!: string;
        codeATI!: string;
        address!: string;
        phone!: string;
        contact!: string;
        email!: string;
        taxSystem!: TaxSystem;
        status!: 0 | 1;
        loadRegions!: string;
        loadCities!: string;
        unloadRegions!: string;
        unloadCities!: string;
        additional!: string;
        static associate(models: any) {
            models.Carrier.belongsTo(models.User, { as: "creator" });
            models.Carrier.hasMany(models.Transport);
        }
    }

    Carrier.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            inn: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            codeATI: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            address: {
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
            status: {
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
            unloadRegions: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            unloadCities: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            additional: {
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
