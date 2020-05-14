class CreateJoinTableTagsStores < ActiveRecord::Migration[5.2]
  def change
    create_join_table :tags, :stores do |t|
      t.references :tag, foreign_key: true
      t.references :store, foreign_key: true
    end
  end
end
