class AddJsonObjectToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :jsonObject, :json
  end
end
