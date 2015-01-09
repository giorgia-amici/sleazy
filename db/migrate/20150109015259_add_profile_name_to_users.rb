class AddProfileNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_name, :text
  end
end
