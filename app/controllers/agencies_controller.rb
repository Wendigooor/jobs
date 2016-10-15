class AgenciesController < ApplicationController

  def index
    agencies = Agency.includes(:tags).all
    render json: { agencies: agencies.to_json( include: [:tags]) , grades: Agency.grades }
  end

  def create
    agency = Agency.create(agency_params)
    if (params[:tags].present?)
      params[:tags].split(',').each do |tag_name|
        agency.tags << Tag.find_or_create_by(name: tag_name)
      end
    end

    render json: { agency: agency.to_json( include: [:tags]) }
  end


private

  def agency_params
    params[:agency][:grade] = params[:agency][:grade].to_i
    params.require(:agency).permit(
      :name,
      :description,
      :grade
    )
  end

end
