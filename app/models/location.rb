class Location < ApplicationRecord
    belongs_to :user
    validates :name, :street, :city, :state, :description, :fee, :latitude, :longitude, :image, :link, :review, presence: true
end
