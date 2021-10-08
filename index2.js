
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const moment = require("moment");
const morgan = require("morgan");
var methodOverride = require("method-override");
var database = require("./config/database");
const Employee = require("./models/Employee2.js");
const Company = require("./models/Company.js");
const Notification = require("./models/Notification2.js");
const PersonnelArea = require("./models/PersonnelArea.js");
// const CompanyPaLocation = require("./models/CompanyPaLocation.js");
const CompanySector = require("./models/CompanySector.js");
const Banner = require("./models/bannermessage");

dotenv.config();
const app = express();

mongoose.connect(
  database.cosmosdbUrl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  async () => {
    console.log("db connected");
    // db.employees.findOne({ firstName: "Satya" });
    // var value = await Notification.findById("6140544203f05695d33e7114");
    // var moments = moment(value.read_at).format("MM/DD/YYYY, HH:MM:SS");
    // console.log(moments);
    // console.log(value.read_at);

    // const manager = await Employee.findOne(
    //   { firstName: "Mangesh" },
    //   (err, employee) => {
    //     if (err) console.log(err);
    //   }
    // );
    // console.log(manager.roleName[0].roleId);
    // await Employee.create(
    //   {
    //     employeeId: "123456",
    //     firstName: "Atul",
    //     lastName: "kasbekar",
    //     employeeStatus: "ACTIVE",
    //     emailId: "atul1234@gmail.com",
    //     dateOfBirth: "1990-08-09",
    //     dateOfJoining: "2018-08-10",
    //     dateOfSeparation: "0000-00-00",
    //     title: "Developer",
    //     gender: "Male",
    //     martial_status: "single",
    //     employee_pa: "10063",
    //     employee_pa_name: "ucdcutyo",
    //     employee_psa: "1214",
    //     employee_psa_name: "dcdcdd",
    //     employeeType: "Permanent",
    //     employeeTypecode: "1",
    //     employeeGrade: "L5-Department Developer",
    //     employeeGradecode: "A6",
    //     is_sf: true,
    //     is_pf_user: false,
    //     is_mesop_user: false,
    //     is_cs_user: true,
    //     is_sa_user: true,
    //     is_bhr: false,
    //     is_manager: false,
    //     company: "1001",
    //     companyName: "Mahindra & Mahindra Ltd",
    //     sector: "50071900",
    //     sectorName: "GROUP CORPORATE OFFICE",
    //     businessUnit: "50071333",
    //     businessUnitName: "EXECUTIVE CHAIRMAN's OFFICE",
    //     division: "50071294",
    //     divisionName: "OFF. OF GRP CFO & GRP CIO",
    //     sdivision: "50071325",
    //     sdivisionName: "CORPORATE INFORMATION TECHNOLOGY",
    //     department: "50015956",
    //     departmentName: "BUSINESS SOLUTIONS",
    //     sdepartment: "00000000",
    //     sdepartmentName: "",
    //     org_unit: "50015956",
    //     org_unitName: "BUSINESS SOLUTIONS",
    //     reportees_count: "5",
    //     businessFunction: "5243433",
    //     business_function_name: "Human Resource",
    //     domain: "6954543",
    //     domainName: "Others",
    //     position: "763432322",
    //     designation: "Senior GM",
    //     manager_id: "34455",
    //     bhr_id: "210612",
    //     mobile_no: "9438345677",
    //   },
    //   //   {
    // employeeId: "CCRP1234dju",
    //     firstName: "Satya",
    //     lastName: "Nayak",
    //     emailId: "satya.nayak@mahindra.com",
    //     dateOfBirth: new Date("2000-06-02"),
    //     dateOfJoining: "2019-08-07",
    //     organisationUnitCode: 2051,
    //     organisationUnitName: "Springbot",
    //     // bHR: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    //     position: "Mongo Developer",
    //     role: [
    //       {
    //         roleId: "CCRP1080",
    //         roleName: "Developer",
    //       },
    //     ],
    //     is_reporter: false,
    //     reportsTo: {
    //       managerId: "CCRP1230dju",
    //       empobjectId: "611cc69260fdc48e34dccb1c",
    //     },

    //     domain: {
    //       domainName: "Portal/IT",
    //       domainCode: 578,
    //     },
    //     company: {
    //       companyName: "Mahindra & Mahindra ltd",
    //       companyCode: 1001,
    //     },
    //     sector: {
    //       sectorName: "ITFS(AI)",
    //       sectorCode: 2056798,
    //     },
    //     businessUnit: {
    //       businessUnitName: "AFS",
    //       businessUnitcode: 12008,
    //     },
    //     division: {
    //       divisionName: "ADFS",
    //       divisionId: 12345,
    //       subdivision: "Agri",
    //     },
    //     department: {
    //       departmentName: "Automotive",
    //       departmentCode: 9468,
    //       subdepartmentName: "Drillingautos",
    //     },
    // employee_PA: {
    //   personnelAreaName: String,
    //   personnelAreaDescription: String,
    //   businessFunctionId: Number,
    //   businessFunctionName: String,
    //   required: true,
    // },
    // employeeType: { type: String, required: true },
    // employeeTypeCode: { type: Number, required: true },
    // employeeGrade: { type: String, required: true },
    // employeeGradeCode: { type: Number, required: true },
    // employeeStatus: { type: Boolean, required: true },
    // employeeStatusCode: { type: Number, required: true },
    // employeeLocation: {
    //   locationName: { type: String },
    //   locationCode: { type: Number },
    // },
    // organisationUnitCode: Number,
    // organisationUnitName: { type: String },
    // isPF_User: { type: Boolean, required: true },
    // isMesopUser: { type: Boolean, required: true },
    // isCS_User: { type: Boolean, required: true },
    // isSA_User: { type: Boolean, required: true },
    // bHR: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    // position: { type: String, required: true },
    // separationDate: { type: String, required: true },
    // gender: { type: String, required: true },
    // psa: { type: Number, required: true },
    // roleName: [{ type: String, required: true }],
    // is_Manager: { type: Boolean, required: true },
    // managerId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Employee",
    // },
    // is_BHR: { type: Boolean },
    // domain: [domainSchema],
    // company: "611cb4ca1ee3de79519bc818",
    // sector: {
    //   type: mongoose.Schema.Types.ObjectId,
    // },
    // businessUnit: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   },
    //   division: {
    //     type: mongoose.Schema.Types.ObjectId,
    //   },
    //   department: {
    //     type: mongoose.Schema.Types.ObjectId,
    //   },
    // },
    // await CompanySector.create(
    //   [
    //     {
    //       companyCode: ["1001", "1039"],
    //       sectorCode: "50000130",
    //       sectorName: "Systech Sector",
    //     },
    //     {
    //       companyCode: ["1001", "1068"],
    //       sectorCode: "50005068",
    //       sectorName: "Mahindra Partners Sector",
    //     },
    //     {
    //       companyCode: ["1001"],
    //       sectorCode: "50019947",
    //       sectorName: "Managing Director & CEO",
    //     },
    //     {
    //       companyCode: ["1001"],
    //       sectorCode: "50063300",
    //       sectorName: "Aero,Defence and Steel Sector",
    //     },
    //     {
    //       companyCode: ["1001", "1020", "1036", "1039", "1065", "9026"],
    //       sectorCode: "50067676",
    //       sectorName: "Farm Equipment Sector",
    //     },
    //     {
    //       companyCode: ["1001", "1049", "1054", "1055", "1063", "1070"],
    //       sectorCode: "50067677",
    //       sectorName: "Agriculture Sector",
    //     },
    //     {
    //       companyCode: ["1001", "1019", "1020", "1021", "1037", "1039"],
    //       sectorCode: "50067878",
    //       sectorName: "Automotive Sector",
    //     },
    //     {
    //       companyCode: ["1001", "1019", "1020", "1021", "1024", "1037", "1039"],
    //       sectorCode: "50067879",
    //       sectorName: "Common Services",
    //     },
    //     {
    //       companyCode: [
    //         "1001",
    //         "1020",
    //         "1024",
    //         "1039",
    //         "1058",
    //         "1065",
    //         "1068",
    //         "9025",
    //       ],
    //       sectorCode: "50068201",
    //       sectorName: "Other Business",
    //     },
    //     {
    //       companyCode: ["1001", "1066", "1071", "9005"],
    //       sectorCode: "50071900",
    //       sectorName: "GROUP CORPORATE OFFICE",
    //     },
    //     {
    //       companyCode: ["1001"],
    //       sectorCode: "52302856",
    //       sectorName: "Executive Director",
    //     },
    //     {
    //       companyCode: ["1001"],
    //       sectorCode: "52302861",
    //       sectorName: "Mobility Services Sector",
    //     },
    //   ],
    //     sectors: [
    //       {
    //         sectorName: "ITFS(AI)",
    //         sectorCode: 2056798,
    //         businessgroups: [
    //           {
    //             businessUnitName: "AFS",
    //             businessUnitCode: 12008,
    //             divisions: [
    //               {
    //                 divisionName: "ADFS",
    //                 divisionId: 12345,
    //                 subdivision: "Agri",
    //                 departments: [
    //                   {
    //                     departmentName: "Automotive",
    //                     departmentCode: 9468,
    //                     subdepartmentName: "Drillingautos",
    //                     personnelArea: [
    //                       {
    //                         personnelAreaName: "CCRP",
    //                         personnelAreaDescription: "Corporate Response Plan",
    //                         businessFunctionId: 1008,
    //                         businessFunctionName: "Corporate/TFS",
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    await Banner.create(
      [
        {
          messageId: "3",
          messageText: "Congratulations on being part of the team! The whole company welcomes you, and we look forward to a successful journey with you! Welcome aboard!",
          isShown: false,
          startDate: new Date("2021-10-16"),
          endDate: new Date("2021-10-22"),
        },
        {
          messageId: "4",
          messageText: "We love to form a team, work with enthusiastic, creative people, and have a great learning attitude. And hear that you fit the bill perfectly. It's great to have you with us. Warmest welcome!",
          isShown: false,
          startDate: new Date("2021-10-22"),
          endDate: new Date("2021-10-28"),
        },
        {
          messageId: "5",
          messageText: "congratulation on being a part of mahindra prasar bharti mission",
          isShown: false,
          startDate: new Date("2021-10-28"),
          endDate: new Date("2021-11-03"),
        },

        {
          messageId: "6",
          messageText: "big congratulations on your new role! ",
          isShown: false,
          startDate: new Date("2021-11-03"),
          endDate: new Date("2021-11-09"),
        },

        {
          messageId: "7",
          messageText: "big congratulations on your new role! ",
          isShown: false,
          startDate: new Date("2021-11-09"),
          endDate: new Date("2021-11-15"),
        },

        {
          messageId: "8",
          messageText: "big congratulations on your new role! ",
          isShown: false,
          startDate: new Date("2021-11-15"),
          endDate: new Date("2021-11-21"),
        },

        {
          messageId: "9",
          messageText: "big congratulations on your new role! ",
          isShown: false,
          startDate: new Date("2021-11-21"),
          endDate: new Date("2021-11-27"),
        },

        {
          messageId: "10",
          messageText: "big congratulations on your new role! ",
          isShown: false,
          startDate: new Date("2021-11-27"),
          endDate: new Date("2021-12-03"),
        },

       


        //     {
        //       employeeId: "123456",
        //       pernr: "123456",
        //       activityType: "TASK_CENTER",
        //       activity: "Income Tax Declaration",
        //       identifier: "23061013",
        //       status: "PENDING",
        //       viewUrl:
        //         "https://emss.mahindra.com/sap/bc/webdynpro/sap/zwdhr_c_tax_declaration_2?sap-accessibility=X&sap-accessibilitymode=CLASSIC",
        //       message: "Income Tax Declaration",
        //       dueDate: "2022-03-31",
        //       date: "2021-09-14",
        //       time: "10:26:00",
        //     },
        //     {
        //       employeeId: "207624",
        //       activityType: "NOTIFICATION",
        //       activity: "Purchase Order Approval",
        //       identifier: "3100039891",
        //       workflowId: "000023471186",
        //       status: "PENDING",
        //       viewUrl:
        //         "http://mcvladsf1.corp.mahindra.com:8000/sap/bc/ui5_ui5/ui2/ushell/shells/abap/fiorilaunchpad.html?sap-client=100&sap-language=EN#ZMY_INBOX-display?listSize=9999&showAdditionalAttributes=true&taskDefinitions=TS90000595_WS90000271_0000000002&/detail/RP2CLNT500_PGW/000023471186/TaskCollection(SAP__Origin='RP2CLNT500_PGW',InstanceID='000023471186')",
        //       message:
        //         "Purchase Order 3100039891 is pending for Your Approval of Value : 12000000 INR ; Vendor : DS063F - SHARDA MOTOR INDUSTRIES LTD. ; Plant : ME01 ; Buyer : CX1 ( MTC Dir. Material )",
        //       dueDate: "--",
        //       date: "2021-09-14",
        //       time: "14:52:18",
        //     },

        //     {
        //       employeeId: "23076757",
        //       activityType: "NOTIFICATION",
        //       activity: "Travel Leave approval",
        //       identifier: "9000008083",
        //       workflowId: "000023471216",
        //       status: "Approved",
        //       viewUrl:
        //         "http://mcvladed2.corp.mahindra.com:50000/fiori?j_user=JLwCzTG%2Bdf7I4fF5twJsVw%3D%3D&&to=mcvladsf1.corp.mahindra.com:8000/sap/bc/ui5_ui5/ui2/ushell/shells/abap/fiorilaunchpad.html?sap-client=100&sap-language=EN#zdom_trvl_appr-display&/Detail/9000008085/23070643/000023471216/V",
        //       approveUrl:
        //         "http://mcvladed2.corp.mahindra.com:50000/fiori?j_user=JLwCzTG%2Bdf7I4fF5twJsVw%3D%3D&&to=mcvladsf1.corp.mahindra.com:8000/sap/bc/ui5_ui5/ui2/ushell/shells/abap/fiorilaunchpad.html?sap-client=100&sap-language=EN#zdom_trvl_appr-display&/Detail/9000008085/23070643/000023471216/A",
        //       rejectUrl:
        //         "http://mcvladed2.corp.mahindra.com:50000/fiori?j_user=JLwCzTG%2Bdf7I4fF5twJsVw%3D%3D&&to=mcvladsf1.corp.mahindra.com:8000/sap/bc/ui5_ui5/ui2/ushell/shells/abap/fiorilaunchpad.html?sap-client=100&sap-language=EN#zdom_trvl_appr-display&/Detail/9000008085/23070643/000023471216/R",
        //       message: "Travel Request for Approval",
        //       dueDate: "--",
        //       isactionable: "X",
        //       date: "2021-19-17",
        //       time: "18:03:45",
        //     },
      ],

      function (err, notification) {
        if (err) console.log(err);

        // get and return all the todos after you create another
        console.log("created");
      }
    );
  }
);

app.use(morgan("dev")); // log every request to the console
app.use(express.urlencoded({ extended: "true" })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json
app.use(express.json({ type: "application/vnd.api+json" })); // parse application/vnd.api+json as json
app.use(methodOverride("X-HTTP-Method-Override")); // override with the X-HTTP-Method-Override header in the request

app.get("/", (req, res) => {
  res.send("Welcome to my app!!");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App started on port ${PORT}`));















