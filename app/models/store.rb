class Store < ApplicationRecord
  serialize :contact_phones, Array

  # Asociations
  belongs_to :category
  has_and_belongs_to_many :tags

  # Scopes
  scope :published, -> { where(active: true) }

end
