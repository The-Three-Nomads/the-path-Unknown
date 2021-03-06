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

    def update
        location = Location.find(params[:id])
        location.update(location_params)
        if location.valid?
            render json: location
        else
            render json: location.errors, status: 422
        end
    end

    def destroy
        location = Location.find(params[:id])
        locations = Location.all
        if location.destroy
            render json: locations
        else
            render json: locations.errors
        end
    end

    private
    def location_params
        params.require(:location).permit(:name, :street, :city, :state, :description, :fee, :latitude, :longitude, :image, :link, :review, :user_id)
    end
end
