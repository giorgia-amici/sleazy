class TracksController < ApplicationController

	skip_before_filter  :verify_authenticity_token

	def index
		@tracks = Track.all
	end

  def create
    @track = Track.create(permit_params)
    puts 'hello'
    redirect_to '/tracks'
  end

  def permit_params
  	params.require(:track).permit(:object)
  end

end
