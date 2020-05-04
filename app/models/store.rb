class Store < ApplicationRecord
  serialize :contact_phones, Array

  # Scopes
  scope :published, -> { where(active: true) }

end
