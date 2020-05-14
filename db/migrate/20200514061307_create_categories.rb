class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name
      t.boolean :active
      t.boolean :is_destroyed

      t.timestamps
    end
  end
end
