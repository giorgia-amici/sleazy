class AddTitleToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :title, :text
  end
end
