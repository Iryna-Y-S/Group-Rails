class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.integer :number_of_student

      t.timestamps
    end
  end
end
