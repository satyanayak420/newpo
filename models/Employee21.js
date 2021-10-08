db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["employeeId", "firstName", "lastName"],
      properties: {
        employeeId: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        firstName: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        lastName: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        emailId: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        dateOfBirth: { bsonType: "date" },
        dateOfJoining: { bsonType: "date" },
        role: {
          bsonType: "array",
          description: "must be an array and is required",
          items: {
            bsonType: "object",
            required: ["roleName", "roleId"],
            properties: {
              roleName: {
                bsonType: "string",
                description: "must be a string and is required",
              },
              roleId: {
                bsonType: "string",
                description: "must be a string and is required",
              },
            },
          },
        },
        // reportsTo: {
        //   bsonType: "object",
        //   description: "must be a object and is required",
        //   required: ["managerId", "empobjectId"],
        //   properties: {
        //     managerId: {
        //       bsonType: "string",
        //       description: "must be a string and is required",
        //     },
        //     empobjectId: {
        //       bsonType: "objectId",
        //       description: "must be a objectid and is required",
        //     },
        // },
        // },
        is_reporter: { bsonType: "bool" },
        organisationUnitCode: { bsonType: "int" },
        organisationUnitName: { bsonType: "string" },
        bHR: { bsonType: "objectId" },
        position: { bsonType: "string" },
        domain: {
          bsonType: "object",
          properties: {
            domainName: { bsonType: "string" },
            domainCode: { bsonType: "int" },
          },
        },
        company: {
          bsonType: "object",
          properties: {
            companyName: { bsonType: "string" },
            companyCode: { bsonType: "int" },
          },
        },
        sector: {
          bsonType: "object",
          properties: {
            sectorName: { bsonType: "string" },
            sectorCode: { bsonType: "int" },
          },
        },
        businessUnit: {
          bsonType: "object",
          properties: {
            businessUnitName: { bsonType: "string" },
            businessUnitCode: { bsonType: "int" },
          },
        },
        division: {
          bsonType: "object",
          properties: {
            divisionName: { bsonType: "string" },
            divisionCode: { bsonType: "int" },
            subdivision: { bsonType: "string" },
          },
        },
        department: {
          bsonType: "object",
          properties: {
            departmentName: { bsonType: "string" },
            departmentCode: { bsonType: "int" },
            subdepartment: { bsonType: "string" },
          },
        },
      },
    },
  },
});
