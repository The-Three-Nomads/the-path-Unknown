class LocationsController < ApplicationController
    def index 
        locations = Location.all
        render json: locations
    end

    def create
        location = Location.create(location_params)
        if location.valid?
            render json: location
        else
            render json: location.errors, status: 422
        end
    end

    private
    def location_params
        params.require(:location).permit(:street, :city, :state, :description, :fee, :coordinates, :image, :link, :review, :user_id)
    end
end
