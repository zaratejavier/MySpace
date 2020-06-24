# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Faker::Avatar.image(slug: "my-own-slug") 

2.times do |i|
  user = User.create(email: "test#{i}@t.com", password: "12345678")

  5.times do 
    user.posts.create(
      name: Faker::Artist.name, 
      text: Faker::Lorem.sentence, 
      avatar: Faker::Avatar.image(slug: "my-own-slug")
    )
  end
end



puts "Post Seeded"





