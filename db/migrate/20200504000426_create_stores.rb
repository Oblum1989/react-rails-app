class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :description
      t.string :link
      t.string :address
      t.text :contact_phones
      t.string :email
      t.boolean :is_destroyed
      t.boolean :active

      t.timestamps
    end
  end
end
