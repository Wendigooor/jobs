class Tag < ActiveRecord::Base

  has_many :agency_tags
  has_many :agencies, through: :agency_tags

end
