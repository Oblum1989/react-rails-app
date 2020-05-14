class AddColumnToStores < ActiveRecord::Migration[5.2]
  def change
    add_reference :stores, :category, foreign_key: true
  end
end
