def sign_up
	visit '/'
  click_link 'up'
  fill_in 'Email', with: 'test@example.com'
  fill_in 'Password', with: 'testtest'
  fill_in 'Password confirmation', with:'testtest'
end

# keypress = "var e = $.Event('keydown', { keyCode: 13 }); $('body').trigger(e);"
# page.driver.execute_script(keypress)

# describe "Something" do
#   it "uses javascript", :js => true do
#      pending "write a test"
#   end
# end


# def keypress_on(elem, key, charCode = 0)
# 	keyCode = case key
# 	when :enter then 13
# 	else key.to_i
# 	end
# 	elem.base.invoke('keypress', false, false, false, false, keyCode, charCode)
# end


