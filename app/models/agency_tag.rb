class AgencyTag < ActiveRecord::Base

  belongs_to :agency
  belongs_to :tag

end
