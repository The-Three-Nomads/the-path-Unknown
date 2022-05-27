class Location < ApplicationRecord
    belongs_to :user
    validates :street, :city, :state, :description, :fee, :coordinates, :image, :link, :review, presence: true
end
