class Task < ApplicationRecord

  belongs_to :project
  acts_as_list scope: :project

  validates :name, presence: true
  validates :name, length: { maximum: 250 }
  validates :completed, inclusion: { in: [true, false] }

end
