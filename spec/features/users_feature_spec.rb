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

		scenario 'should see sign out link', :js => true do
			sign_up
		  keypress = "document.getElementById('new_user').submit();"
		  page.driver.browser.execute_script(keypress)
			expect(current_path).to eq '/'
			expect(page).to have_content 'out'
		end

		scenario 'should not see a sign in and sign up link', :js => true do
			sign_up
		  keypress = "document.getElementById('new_user').submit();"
		  page.driver.browser.execute_script(keypress)
			expect(page).not_to have_link 'in'
			expect(page).not_to have_link 'up'  
		end
	end
end








