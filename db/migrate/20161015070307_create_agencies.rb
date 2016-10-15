class CreateAgencies < ActiveRecord::Migration
  def change
    create_table :agencies do |t|
      t.string :name
      t.string :description
      t.integer :grade

      t.timestamps null: false
    end
  end
end
