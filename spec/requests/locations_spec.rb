require 'rails_helper'

RSpec.describe "Locations", type: :request do
  describe "GET /index" do
    it "gets a list of locations" do

        user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

        user.locations.create(
            street: 'Constance ST',
            city: 'San Francisco',
            state: 'California',
            description: 'a fun place',
            fee: 'None',
            coordinates: '37N-45E',
            image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg',
            link: 'https',
            review: 'this place is great',
            user_id: 1
        )

        get '/locations'

        location = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(location.length).to eq 1
    end
  end

  describe "POST /create" do
    it "creates a location" do

        user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

        user.locations.create(
            street: 'Constance ST',
            city: 'San Francisco',
            state: 'California',
            description: 'a fun place',
            fee: 'None',
            coordinates: '37N-45E',
            image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg',
            link: 'https',
            review: 'this place is great',
            user_id: 1
        )

        location_params = {
            location: {
                street: 'Constance ST',
                city: 'San Francisco',
                state: 'California',
                description: 'a fun place',
                fee: 'None',
                coordinates: '37N-45E',
                image: 'https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg',
                link: 'https',
                review: 'this place is great',
                user_id: 1
            }
        }

        post '/locations', params: location_params

        #expect(response).to have_http_status(200)
        location = Location.first
        expect(location.street).to eq 'Constance ST'
        end
    end
end