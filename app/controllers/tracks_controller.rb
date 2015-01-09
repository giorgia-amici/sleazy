class TracksController < ApplicationController

	skip_before_filter  :verify_authenticity_token

  def permit_params
  	params.require(:track).permit(:object)
  end

  def index
    @tracks = Track.all
  end

  def create
    @track = Track.create(permit_params)
    @track.user_id = current_user.id
    @track.save
    redirect_to '/tracks'
  end

end
