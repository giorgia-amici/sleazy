require 'rails_helper'

feature 'tracks' do
  context 'no tunes have been added' do
    scenario 'should ask what track you want' do
      visit '/tracks'
      expect(page).to have_content 'Sign in Sign up'
      expect(page).not_to have_link 'track'
    end
  end
end