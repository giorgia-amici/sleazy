class TracksController < ApplicationController

	def index
		@tracks = Track.all
	end

  def new
    @track = Track.create(user_id: params["format"])
    redirect_to '/tracks'
  end

end
