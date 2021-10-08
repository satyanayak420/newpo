db.createCollection("companies", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "companyName",
        "sectors",
        "companyCode",
        "locationDescription",
        "locationId",
      ],
      properties: {
        companyName: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        companyCode: {
          bsonType: "int",
          description: "must be a number and is required",
        },
        locationId: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        locationDescription: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        sectors: {
          bsonType: "array",
          description: "must be an array and is required",
          items: {
            bsonType: "object",
            required: ["sectorName", "sectorCode", "businessgroups"],
            properties: {
              sectorName: {
                bsonType: "string",
                description: "must be a string and is required",
              },
              sectorCode: {
                bsonType: "int",
                description: "must be a number and is required",
              },
              businessgroups: {
                bsonType: "array",
                description: "must be an array and is required",
                items: {
                  bsonType: "object",
                  required: [
                    "businessUnitName",
                    "businessUnitCode",
                    "divisions",
                  ],
                  properties: {
                    businessUnitName: {
                      bsonType: "string",
                      description: "must be a string and is required",
                    },
                    businessUnitCode: {
                      bsonType: "int",
                      description: "must be a number and is required",
                    },
                    divisions: {
                      bsonType: "array",
                      description: "must be an array and is required",
                      items: {
                        bsonType: "object",
                        required: ["divisionName", "divisionId", "departments"],
                        properties: {
                          divisionName: {
                            bsonType: "string",
                            description: "must be a string and is required",
                          },
                          divisionId: {
                            bsonType: "int",
                            description: "must be a number and is required",
                          },
                          subdivision: {
                            bsonType: "string",
                            description: "must be a string",
                          },
                          departments: {
                            bsonType: "array",
                            description: "must be an array and is required",
                            items: {
                              bsonType: "object",
                              required: [
                                "departmentName",
                                "departmentCode",
                                "personnelArea",
                              ],
                              properties: {
                                departmentName: {
                                  bsonType: "string",
                                  description:
                                    "must be a string and is required",
                                },
                                departmentCode: {
                                  bsonType: "int",
                                  description:
                                    "must be a number and is required",
                                },
                                subDepartmentName: {
                                  bsonType: "string",
                                  description: "must be a string",
                                },
                                personnelArea: {
                                  bsonType: "array",
                                  description:
                                    "must be an array and is required",
                                  items: {
                                    bsonType: "object",
                                    required: [
                                      "personnelAreaName",
                                      "personnelAreaDescription",
                                      "businessFunctionId",
                                      "businessFunctionName",
                                    ],
                                    properties: {
                                      personnelAreaName: {
                                        bsonType: "string",
                                        description:
                                          "must be a string and is required",
                                      },
                                      personnelAreaDescription: {
                                        bsonType: "string",
                                        description:
                                          "must be a string and is required",
                                      },
                                      businessFunctionId: {
                                        bsonType: "int",
                                        description:
                                          "must be a number and is required",
                                      },
                                      businessFunctionName: {
                                        bsonType: "string",
                                        description:
                                          "must be a string and is required",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});
