def sign_up
  visit '/'
  click_link 'up'
  fill_in 'Email', with: 'test@example.com'
  fill_in 'Password', with: 'testtest'
  fill_in 'Password confirmation', with:'testtest'
  element = find('#user_password_confirmation')
  element.native.send_keys(:Enter)
  # find('.actions>submit').native.send_keys(:return)
end