class AgenciesController < ApplicationController

  def index
    agencies = Agency.all
    render json: { agencies: agencies, grades: Agency.grades }
  end

  def create
    agency = Agency.create(agency_params)
    render json: { agency: agency }
  end


private

  def agency_params
    params[:agency][:grade] = params[:agency][:grade].to_i
    params.require(:agency).permit(
      :name,
      :description,
      :tags,
      :grade
    )
  end

end
