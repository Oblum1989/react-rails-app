class AddColumnToTags < ActiveRecord::Migration[5.2]
  def change
    change_column :tags, :active, :boolean, default: true
  end
end
