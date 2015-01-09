def sign_up
  visit '/'
  click_link 'up'
  fill_in 'Email', with: 'test@example.com'
  fill_in 'Password', with: 'testtest'
  # fill_in 'Password confirmation', with:'testtest'
  # element = find('#user_password_confirmation')
  # element.native.send_keys(:return)
  # find('.actions').native.send_keys(:return)
  # input = find('#user_password_confirmation')
	input = find(:xpath,'//body[contains(@id,"user_password_confirmation") and contains(text(),"testtest")]') 
	input.set('testtest')
	keypress_on(input, :enter)
end


def keypress_on(elem, key, charCode = 0)
	keyCode = case key
	when :enter then 13
	else key.to_i
	end
	elem.base.invoke('keypress', false, false, false, false, keyCode, charCode)
end

