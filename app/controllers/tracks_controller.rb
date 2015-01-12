class TracksController < ApplicationController
	skip_before_filter  :verify_authenticity_token

	def permit_params
		params.require(:track).permit(:object, :title)
	end

	def index
		@tracks = Track.all
	end

	def create
		@tracks = Track.where(:user_id => current_user.id)
		if @tracks.count >= 10
		redirect_to '/tracks'
		flash[:alert] = '10 tracks max in your playlist, please delete 1 to add 1'
		else
		@track = Track.create(permit_params)
		@track.user_id = current_user.id
		@track.save
		render_to tracks_path
		end
	end

	def destroy
		@track = Track.find(params[:id])
		@track.destroy
		flash[:notice] = 'Track removed'
		redirect_to '/tracks'
	end
	
end
