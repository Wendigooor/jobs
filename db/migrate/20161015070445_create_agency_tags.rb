class CreateAgencyTags < ActiveRecord::Migration
  def change
    create_table :agency_tags do |t|
      t.references :agency
      t.references :tag

      t.timestamps null: false
    end
  end
end
