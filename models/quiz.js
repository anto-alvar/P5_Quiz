module.exports = function (sequelize, DataTypes) {
    return sequelize.define('quiz',
        {
            question: {
                type: DataTypes.STRING,
                unique: {msg: "Ya existe esta pregunta"},
                validate: {notEmpty: {msg: "Question must not be empty"}}
            },
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Answer must not be empty"}}
            }
        });
};