var moment = require('moment');

module.exports = function (orm, db) {
  var Message = db.define('message', {
    fullname     : { type: 'text', required: true },
    abbr      : { type: 'text', required: false },
    homeground : { type: 'text', required: true}
  },
  {
    hooks: {
      beforeValidation: function () {
        //this.createdAt = new Date();
      }
    },
    validations: {
      fullname: [
        orm.enforce.ranges.length(1, undefined, "must be atleast 1 letter long"),
        orm.enforce.ranges.length(undefined, 96, "cannot be longer than 96 letters")
      ],
      homeground: [
        orm.enforce.ranges.length(1, undefined, "must be atleast 1 letter long"),
        orm.enforce.ranges.length(undefined, 96, "cannot be longer than 96 letters")
      ]
    },
    methods: {
      serialize: function () {
        var comments;

        if (this.comments) {
          comments = this.comments.map(function (c) { return c.serialize(); });
        } else {
          comments = [];
        }

        return {
          id        : this.id,
          fullname     : this.fullname,
          abbr      : this.abbr,
          homeground : this.homeground,
          //comments  : comments
        };
      }
    }
  });
};
