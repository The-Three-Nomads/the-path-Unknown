# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create email: "testingemail@example.com", password: "testingpassword",password_confirmation: "testingpassword"

user2 = User.create email: "2testingemail@example.com", password: "testingpassword",encrypted_password: "testingpassword"

locations = [
    {
        name: "Oceanside",
        street: "Oceanside Blvd",
        city: "Oceanside",
        state: "California",
        description: "a fun place",
        fee: "None",
        latitude: 33.456,
        longitude: -117.789,
        image: "https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg",
        link: "https",
        review: "this place is great",
        user_id: 1
    },
    {
        name: "Elfin Forest",
        street: "8833 Harmony Grove Rd",
        city: "Escondido",
        state: "California",
        description: "a fun place",
        fee: "None",
        latitude: 33.084,
        longitude: -117.140,
        image: "https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg",
        link: "https",
        review: "this place is great",
        user_id: 2
    },
    {
        name: "Julian",
        street: "2116 Main Street",
        city: "Julian",
        state: "California",
        description: "a fun place",
        fee: "$25.00",
        latitude: 33.087,
        longitude: -116.602,
        image: "https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg",
        link: "https",
        review: "this place is great",
        user_id: 1
    }
]

locations.each do |each_location|
    Location.create each_location
    puts "creating location #{each_location}"
end

user.each do |each_user|
    User.create each_user
    puts "creating user #{each_user}"
end

