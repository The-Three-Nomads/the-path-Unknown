class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :street
      t.string :city
      t.string :state
      t.string :description
      t.string :fee
      t.string :coordinates
      t.text :image
      t.text :link
      t.string :review
      t.integer :user_id

      t.timestamps
    end
  end
end
