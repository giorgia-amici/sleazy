require 'rails_helper'

feature 'tracks' do
  context 'no tunes have been added' do
    scenario 'should ask what track you want' do
      visit '/tracks'
      expect(page).to have_content 'Sign in Sign up'
      expect(page).not_to have_link 'track'
    end
  end

  context 'testing database creates tracks' do
    scenario 'viewing tracks that been added' do
      @track = Track.create()
      visit '/tracks'
      expect(page).to have_content{@track.id}
    end

  	# scenario 'liking a track' do
  	# 	visit '/tracks'
  	# 	expect(page).to have_content 'track'
  	# 	click_link 'like'
  	# 	expect(page).to have_content 'liked'
  	# end
  end
end