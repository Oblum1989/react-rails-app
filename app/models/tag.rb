class Tag < ApplicationRecord
  # Asociations
  has_and_belongs_to_many :stores
end
