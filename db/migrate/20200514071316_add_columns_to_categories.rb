class AddColumnsToCategories < ActiveRecord::Migration[5.2]
  def change
    change_column :categories, :active, :boolean, default: true
    change_column :stores, :active, :boolean, default: true
    change_column :tags, :is_destroyed, :boolean, default: false
    change_column :stores, :is_destroyed, :boolean, default: false
    change_column :categories, :is_destroyed, :boolean, default: false
  end
end
