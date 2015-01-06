require 'rails_helper'

feature 'user' do 

	context 'user not signed in and on the home page' do

		scenario 'should see sign in and sign up link' do
			visit '/'
			expect(page).to have_link 'Sign up'
			expect(page).to have_link 'Sign in'
		end

		scenario 'should not see sign out link' do
			visit '/'
			expect(page).not_to have_link 'Sign out'
		end
	end

	context 'user signed in on the homepage' do

		before do
			visit '/'
			click_link 'Sign up'
			fill_in 'Email', with: 'test@example.com'
			fill_in 'Password', with: 'testtest'
			fill_in 'Password confirmation', with:'testtest'
			click_button 'Sign up'
		end

		scenario 'should see sign out link' do
			visit '/'
			expect(page).to have_link 'Sign out'
		end

		scenario 'should not see a sign in and sign up link' do
			visit '/'
			expect(page).not_to have_link 'Sign in'
			expect(page).not_to have_link 'Sign up'
		end

	end
	
end