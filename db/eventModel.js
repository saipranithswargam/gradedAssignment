const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");
class EventModel extends Model {}

EventModel.init(
    {
        "0220EventName": {
            type: DataTypes.STRING,
        },
        "0220EventCode": {
            type: DataTypes.STRING,
        },
        "0220NumberOfParticipants": {
            type: DataTypes.STRING,
        },
        "0220NameOfParticipants": {
            type: DataTypes.STRING,
        },
        "0220TypeOfEvent": {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "S20210010220",
    }
);

module.exports = EventModel;
