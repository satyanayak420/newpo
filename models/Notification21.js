db.createCollection("notifications", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "creator",
        "receivers",
        "message",
        "notificationType",
        "messageType",
        "status",
        "isActionable",
      ],
      properties: {
        creator: { bsonType: "objectId" },
        receivers: {
          bsonType: "array",
          description: "must be an array and is required",
          items: { bsonType: "objectId" },
        },
        message: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        messageType: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        status: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        isActionable: {
          bsonType: "bool",
          description: "must be a boolean and is required",
        },
        notificationType: {
          bsonType: "object",
          required: ["objectType", "objectId"],
          description: "must be an object and is required",
          properties: {
            objectType: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            objectId: {
              bsonType: "int",
              description: "must be a number and is required",
            },
          },
        },
        viewUrl: { bsonType: "string" },
        rejectUrl: { bsonType: "string" },
        approveURL: { bsonType: "string" },
        deviceSpecification: { bsonType: "string" },
        read_at: { bsonType: "date" },
        created_at: { bsonType: "date" },
      },
    },
  },
});
