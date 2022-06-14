class Project < ApplicationRecord
  validates :title, presence: true, length: {minimum: 2}

  has_many :tasks, -> { order('position ASC, created_at ASC') }, dependent: :destroy
end
