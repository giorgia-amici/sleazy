require 'rails_helper'

feature 'tracks' do
  context 'no tunes have been added' do
    scenario 'should say no tunes' do
      visit '/tracks'
      expect(page).to have_content 'hello world'
    end
  end
end