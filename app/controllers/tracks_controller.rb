class TracksController < ApplicationController

	def index
		@tracks = Track.all
	end

  def create
    
  end

end
