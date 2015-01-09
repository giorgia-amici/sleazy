class ProfileController < ApplicationController

  def show
    @user = User.find(params[:id])
    @tracks = Track.where(:user_id => @user.id)
  end

end
