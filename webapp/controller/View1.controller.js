sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.supplierregistrationrequest.controller.View1", {
            onInit: function () {
                let DrTableData = [
                    {
                        "requestno": "ITT0001001",
                        "suppliername": "US Trade",
                        "countryorigin": "United Kingdom",
                        "vatnumber": "VAT1001",
                        "contactemail": "abc@outlook.com",
                        "phone": "+44 7700 900077",
                        "status": "Draft",
                    },
                    {
                        "requestno": "ITT0001002",
                        "suppliername": "UAE trade enterprises",
                        "countryorigin": "UAE",
                        "vatnumber": "VAT1002",
                        "contactemail": "bcd@outlook.com ",
                        "phone": "+971 76892309",
                        "status": "Draft",

                    },
                    {
                        "requestno": "ITT0001003",
                        "suppliername": "Sweden Trade Co.",
                        "countryorigin": "Sweden",
                        "vatnumber": "VAT1003",
                        "contactemail": "xsa@gmail.com",
                        "phone": "+46 76892309",
                        "status": "Draft",

                    },
                    {
                        "requestno": "ITT0001004",
                        "suppliername": "German Enterprises",
                        "countryorigin": "Germany",
                        "vatnumber": "VAT1004",
                        "contactemail": "dhd@gmail.com",
                        "phone": "+49 5437 897654",
                        "status": "Draft",

                    },
                    {
                        "requestno": "ITT0001005",
                        "suppliername": "C & P IT Project",
                        "countryorigin": "United States	",
                        "vatnumber": "VAT1008",
                        "contactemail": "us@outlook.com",
                        "phone": "+1 34-1234-5678",
                        "status": "Draft",

                    },
                    {
                        "requestno": "ITT0001006",
                        "suppliername": "Asia-Pacific Traders",
                        "countryorigin": "Singapore",
                        "vatnumber": "VAT1008",
                        "contactemail": "hju@gmail.com",
                        "phone": "+65 1234-5678",
                        "status": "Draft",

                    },
                    {
                        "requestno": "ITT0001007",
                        "suppliername": "Oceania Enterprises",
                        "countryorigin": "Australia",
                        "vatnumber": "VAT1007",
                        "contactemail": "aus@gmail.com",
                        "phone": "+61 7 7010 1111",
                        "status": "Draft",

                    },
                    {
                        "requestno": "ITT0001008",
                        "suppliername": "Russian Trading Co.",
                        "countryorigin": "Russia",
                        "vatnumber": "RUVAT345",
                        "contactemail": "xyz@outlook.com",
                        "phone": "+7 202 555 0156",
                        "status": "Draft",

                    },
                    {
                        "requestno": "ITT0001009",
                        "suppliername": "Global Enterprises Inc.",
                        "countryorigin": "Brazil",
                        "vatnumber": "VAT1009",
                        "contactemail": "br@gmail.com",
                        "phone": "+55 98 1354 9783",
                        "status": "Draft",

                    },
                    {
                        "requestno": "ITT0001010",
                        "suppliername": "African Trade Co.",
                        "countryorigin": "South Africa",
                        "vatnumber": "VAT1010",
                        "contactemail": "sa@outlook.com",
                        "phone": "+27 81 163 1601",
                        "status": "Draft",

                    },


                ];
                let aTableData = [
                    {
                        "requestno": "REQ2001",
                        "suppliername": "Saudi Trade",
                        "countryorigin": "Saudi Arabia",
                        "vatnumber": "VAT1001",
                        "contactemail": "st@outlook.com",
                        "phone": "+44 7700 900077",
                        "status": " Approved",
                    },
                    {
                        "requestno": "REQ2002",
                        "suppliername": "Italy trade enterprises",
                        "countryorigin": "Italy ",
                        "vatnumber": "VAT1002",
                        "contactemail": "ite@outlook.com ",
                        "phone": "+971 76892309",
                        "status": "Approved",

                    },
                    {
                        "requestno": "REQ2003",
                        "suppliername": "France Trade Co.",
                        "countryorigin": "France",
                        "vatnumber": "VAT1003",
                        "contactemail": "ftc@gmail.com",
                        "phone": "+46 76892309",
                        "status": "Approved",

                    },
                    {
                        "requestno": "REQ2004",
                        "suppliername": "Argentina Enterprises",
                        "countryorigin": "Argentina",
                        "vatnumber": "VAT1004",
                        "contactemail": "ae@gmail.com",
                        "phone": "+49 5437 897654",
                        "status": "Approved",

                    },
                    {
                        "requestno": "REQ2005",
                        "suppliername": "Armenia Imports",
                        "countryorigin": "Armenia	",
                        "vatnumber": "VAT1008",
                        "contactemail": "ai@outlook.com",
                        "phone": "+1 34-1234-5678",
                        "status": "Approved",

                    },
                    {
                        "requestno": "REQ2006",
                        "suppliername": "Bahrain Solutions Ltd.",
                        "countryorigin": "Bahrain",
                        "vatnumber": "VAT1008",
                        "contactemail": "bsl@gmail.com",
                        "phone": "+973",
                        "status": "Approved",

                    },
                    {
                        "requestno": "REQ2007",
                        "suppliername": "Belgium Enterprises",
                        "countryorigin": "Belgium",
                        "vatnumber": "VAT1007",
                        "contactemail": "be@gmail.com",
                        "phone": "+32 7 7010 1111",
                        "status": "Approved",

                    },
                    {
                        "requestno": "REQ2008",
                        "suppliername": "African Trading Co.",
                        "countryorigin": "Central African Republic",
                        "vatnumber": "RUVAT345",
                        "contactemail": "atc@outlook.com",
                        "phone": "+236 2 555 0156",
                        "status": "Approved",

                    },
                    {
                        "requestno": "REQ2009",
                        "suppliername": "Global Enterprises Inc.",
                        "countryorigin": "Costa Rica",
                        "vatnumber": "VAT1009",
                        "contactemail": "gei@gmail.com",
                        "phone": "+55 98 1354 9783",
                        "status": "Approved",

                    },
                    {
                        "requestno": "REQ2010",
                        "suppliername": "Croatia Trade Co.",
                        "countryorigin": "Croatia",
                        "vatnumber": "VAT1010",
                        "contactemail": "ctc@outlook.com",
                        "phone": "+27 81 163 1601",
                        "status": "Approved",

                    },


                ];
                let rTableData = [
                    {
                        "requestno": "SUP1001",
                        "suppliername": "Cuba Trade Ltd.",
                        "countryorigin": "Cuba",
                        "vatnumber": "VAT3001",
                        "contactemail": "c@outlook.com",
                        "phone": "+53 7700 900077",
                        "status": "Pending Approval",
                    },
                    {
                        "requestno": "SUP1001",
                        "suppliername": "Czech trade enterprises",
                        "countryorigin": "Czech Republic",
                        "vatnumber": "VAT3002",
                        "contactemail": "cr@outlook.com ",
                        "phone": "+420 76892309",
                        "status": "Pending Approval",

                    },
                    {
                        "requestno": "SUP1001",
                        "suppliername": "Denmark Trade Co.",
                        "countryorigin": "Denmark",
                        "vatnumber": "VAT3003",
                        "contactemail": "dtc@gmail.com",
                        "phone": "+45 76892309",
                        "status": "Pending Approval",

                    },
                    {
                        "requestno": "SUP1001",
                        "suppliername": "Ecuador Enterprises",
                        "countryorigin": "Ecuador",
                        "vatnumber": "VAT3004",
                        "contactemail": "ee@gmail.com",
                        "phone": "+593 5437 897654",
                        "status": "Pending Approval",

                    },
                    {
                        "requestno": "SUP1001",
                        "suppliername": "Egypt IT Project",
                        "countryorigin": "Egypt",
                        "vatnumber": "VAT3008",
                        "contactemail": "eip@outlook.com",
                        "phone": "+20 34-1234-5678",
                        "status": "Pending Approval",

                    },
                    {
                        "requestno": "SUP1001",
                        "suppliername": "El Salvador Traders",
                        "countryorigin": "El Salvador  ",
                        "vatnumber": "VAT3005",
                        "contactemail": "elsalvadortraders@gmail.com",
                        "phone": "+503 1234-5678",
                        "status": "Pending Approval",

                    },
                    {
                        "requestno": "SUP1001",
                        "suppliername": "Indonesia Enterprises",
                        "countryorigin": "Indonesia",
                        "vatnumber": "VAT3007",
                        "contactemail": "ie@gmail.com",
                        "phone": "+62 7 7010 1111",
                        "status": "Pending Approval",

                    },
                    {
                        "requestno": "SUP1001",
                        "suppliername": "Hungary Trading Co.",
                        "countryorigin": "Hungary",
                        "vatnumber": "VAT3006",
                        "contactemail": "hungarytrade@outlook.com",
                        "phone": "+36 202 555 0156",
                        "status": "Pending Approval",

                    },
                    {
                        "requestno": "SUP1001",
                        "suppliername": "Jersey Enterprises Inc.",
                        "countryorigin": "Jersey",
                        "vatnumber": "VAT3009",
                        "contactemail": "jerseyinc@gmail.com",
                        "phone": "+44-1534-9873",
                        "status": "Pending Approval",

                    },
                    {
                        "requestno": "SUP1001",
                        "suppliername": "Kazakhstan Trade Co.",
                        "countryorigin": "Kazakhstan",
                        "vatnumber": "VAT3010",
                        "contactemail": "kz@outlook.com",
                        "phone": "+7 81 163 1601",
                        "status": "Pending Approval",

                    },


                ];
                let aTableModel = new JSONModel(aTableData);
                this.getView().setModel(aTableModel, "aModel")
                let DrTableModel = new JSONModel(DrTableData);
                this.getView().setModel(DrTableModel, "ddrModel")
                let rTableModel = new JSONModel(rTableData);
                this.getView().setModel(rTableModel, "raModel")

            }
        });
    });
