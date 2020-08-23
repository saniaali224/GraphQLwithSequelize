const db = require("../models");
const sha256 = require('js-sha256');

const utils = require("../utils/fucntions");
const moment = require('moment');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;




const AdminController = {
  
  
    create: async (args) => {
        try {
            let {
                Email,
                Password,
                RoleId,
                Name,
                CreatedDate,
                CreatedBy,

            } = args;
            return await db.admin.findOne({ where: { Email: Email } })
                .then(async (value) => {
                    if (!value) {
                        let d = await new Date();
                        d = await d.toISOString();
                        let salt = await utils.createSalt();
                        let password = await sha256((salt + sha256(Password)));
                        return await db.admin.create({
                            Name,
                            Password: password,
                            Email,
                            Salt: salt,
                            RoleId,
                            CreatedDate: d,
                            CreatedBy: CreatedBy ? CreatedBy : 1,

                        });
                    } else {
                        return { error: "email already exists" }
                    }
                })
                .catch((err) => {
                    return { error: JSON.stringify(err) }
                })
        } catch (err) {
            return { error: JSON.stringify(err) }
        }
    },
    getOneById(args) {
        const Singleadmin = db.admin.findOne({
            where: { Id: args["Id"] }
        });
        return Singleadmin;

    },
    update: async (args) => {
        try {
            let {

                Id,
                Password,
                RoleId,
                Name,

            } = args;
            let obj = {
                Id,
                RoleId,
                Name,
            }
            if (Password) {
                let salt = await utils.createSalt();
                let password = await sha256((salt + sha256(Password)));
                obj.Password = password
                obj.Salt = salt
            }

            return await db.admin.update(obj, {
                where: { Id: args.Id }
            })
        } catch
        (err) {
            return { Error: JSON.stringify(err) }
        }
    },
    Deleteadmin: async (args) => {

        try {
            const Deleteadmin = db.admin.destroy({ where: { Id: args.Id } }).then(function (admin) {
                if (admin) {
                    console.log("admin is deleted", admin)
                    return "admin is deleted"


                }
            })
                .catch(function (err) {
                    console.log("error in query", err);
                });



        } catch (error) {
            return { error: JSON.stringify(error) }
        }
    },
    
    


    getAllpagination: async (args) => {

        try {
            let { page, limit, Status } = args;
            page = page ? parseInt(page) : 1;         //pagination
            limit = limit ? parseInt(limit) : 10;
            let obj = {
                // order: [['Id', 'DESC']], // sorting fields by ascending and descending order
                offset: (page - 1) * limit, //declaring offset
                limit: limit
            };
            if (Status) {

                obj.where = { Status: Status }


            }
            return await db.admin.findAndCountAll(obj).then(result => {
                return {
                    admins: result.rows,
                    totaladmins: result.count,
                    totalPages: (parseInt((result.count / limit)) + 1),    //no of total pages
                    currentPage: page

                };


            }).catch(err => {
                return { error: JSON.stringify(err) }
            })
        } catch (err) {
            return { Error: JSON.stringify(err) }
        }
    },
   
   
    
  
   

};
module.exports = AdminController;
