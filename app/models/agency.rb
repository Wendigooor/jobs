class Agency < ActiveRecord::Base

  has_many :agency_tags
  has_many :tags, through: :agency_tags

  enum grade: [:padawan, :jedi, :master]

end
