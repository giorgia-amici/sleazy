def sign_up
	visit '/'
  click_link 'up'
  fill_in 'Email', with: 'test@example.com'
  fill_in 'Password', with: 'testtest'
  fill_in 'Password confirmation', with:'testtest'
end



