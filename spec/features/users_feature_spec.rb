require 'rails_helper'
require_relative './helper.rb'

feature 'user' do 

	context 'user not signed in and on the home page' do

		scenario 'should see sign in and sign up link' do
			visit '/'
			expect(page).to have_link 'up'
			expect(page).to have_link 'in'
		end

		scenario 'should not see sign out link' do
			visit '/'
			expect(page).not_to have_link 'out'
		end
	end

	context 'user signed in on the homepage' do

		scenario 'should see sign out link', js: true do
			sign_up
			expect(current_path).to eq '/tracks'
		end

		scenario 'should not see a sign in and sign up link' do
			visit '/'
			expect(page).not_to have_link 'in'
			expect(page).not_to have_link 'up'
		end

	end
	
end