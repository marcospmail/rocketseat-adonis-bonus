'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Invite extends Model {
    use () {
        return this.belongsTo('App/Models/User')
    }

    team () {
        return this.belongsTo('App/Models/Team')
    }

}

module.exports = Invite
