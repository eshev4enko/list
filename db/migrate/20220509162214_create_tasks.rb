class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :completed, default: false
      t.belongs_to :project
      t.integer :position, default: 0

      t.timestamps
    end
  end
end
