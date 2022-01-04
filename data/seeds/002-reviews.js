const data = [
    {
        user_id: 1,
        review: "This place is pretty cool",
        rating: 10,
        helpful: 10,
    },
];

exports.seed = function (knex) {
    return knex("reviews")
        .del()
        .then(() => {
            return knex("reviews").insert(data);
        });
};
