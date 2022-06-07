require 'rails_helper'

RSpec.describe Location, type: :model do
  describe "Create location validations" do   
    it "must contain a name" do
        location = Location.create street: 'Constance ST', city: 'San Francisco', state: 'California', description: 'a fun place', fee: 'None', latitude: 33.33, longitude: 33.33, image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg', link: 'https', review: 'this place is great'
        expect(location.errors[:name]).to_not be_empty 
    end  
    it "must contain a street" do
        location = Location.create name: 'Place A', city: 'San Francisco', state: 'California', description: 'a fun place', fee: 'None', latitude: 33.33, longitude: 33.33, image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg', link: 'https', review: 'this place is great'
        expect(location.errors[:street]).to_not be_empty 
    end  
    it "must contain a city" do
        location = Location.create name: 'Place A', street: 'Constance ST', state: 'California', description: 'a fun place', fee: 'None', latitude: 33.33, longitude: 33.33, image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg', link: 'https', review: 'this place is great'
        expect(location.errors[:city]).to_not be_empty 
    end 
    it "must contain a state" do
        location = Location.create name: 'Place A', street: 'Constance ST', city: 'San Francisco', description: 'a fun place', fee: 'None', latitude: 33.33, longitude: 33.33, image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg', link: 'https', review: 'this place is great'
        expect(location.errors[:state]).to_not be_empty 
    end 
    it "must contain a description" do
        location = Location.create name: 'Place A', street: 'Constance ST', city: 'San Francisco', state: 'California', fee: 'None', latitude: 33.33, longitude: 33.33, image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg', link: 'https', review: 'this place is great'
        expect(location.errors[:description]).to_not be_empty 
    end 
    it "must contain a fee" do
        location = Location.create name: 'Place A', street: 'Constance ST', city: 'San Francisco', state: 'California', description: 'a fun place', latitude: 33.33, longitude: 33.33, image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg', link: 'https', review: 'this place is great'
        expect(location.errors[:fee]).to_not be_empty 
    end 
    it "must contain a latitude" do
        location = Location.create name: 'Place A', street: 'Constance ST', city: 'San Francisco', state: 'California', description: 'a fun place', fee: 'None', longitude: 33.33, image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg', link: 'https', review: 'this place is great'
    end 
    it "must contain a longitude" do
        location = Location.create name: 'Place A', street: 'Constance ST', city: 'San Francisco', state: 'California', description: 'a fun place', fee: 'None', latitude: 33.33, image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg', link: 'https', review: 'this place is great'
        expect(location.errors[:longitude]).to_not be_empty 
    end 
    it "must contain a image" do
        location = Location.create name: 'Place A', street: 'Constance ST', city: 'San Francisco', state: 'California', description: 'a fun place', fee: 'None', latitude: 33.33, longitude: 33.33, link: 'https', review: 'this place is great'
        expect(location.errors[:image]).to_not be_empty 
    end 
    it "must contain a link" do
        location = Location.create name: 'Place A', street: 'Constance ST', city: 'San Francisco', state: 'California', description: 'a fun place', fee: 'None', latitude: 33.33, longitude: 33.33, image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg', review: 'this place is great'
        expect(location.errors[:link]).to_not be_empty 
    end 
    it "must contain a review" do
        location = Location.create name: 'Place A', street: 'Constance ST', city: 'San Francisco', state: 'California', description: 'a fun place', fee: 'None', latitude: 33.33, longitude: 33.33, image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg', link: 'https'
        expect(location.errors[:review]).to_not be_empty 
    end 
  end
end