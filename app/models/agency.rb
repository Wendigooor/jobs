class Agency < ActiveRecord::Base

  has_many :agency_tags, dependent: :destroy
  has_many :tags, through: :agency_tags

  enum grade: [:padawan, :jedi, :master]

end
