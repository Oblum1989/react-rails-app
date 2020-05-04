class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :link, :address, :contact_phones, :email, :is_destroyed, :active
end
