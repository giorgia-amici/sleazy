require 'rails_helper'

feature 'tracks' do
  context 'no tunes have been added' do
    scenario 'should ask what track you want' do
      visit '/tracks'
      expect(page).to have_content 'in up'
      expect(page).not_to have_link 'track'
    end
  end

  context 'testing database creates tracks' do

    before do
      @track = Track.create(jsonObject: '{"kind":"track","id":13158665,"created_at":"2011/04/06 15:37:43 +0000","user_id":3699101,"duration":18109,"commentable":true,"state":"finished","original_content_size":201483,"last_modified":"2013/02/18 19:18:11 +0000","sharing":"public","tag_list":"soundcloud:source=iphone-record","permalink":"munching-at-tiannas-house","streamable":true,"embeddable_by":"all","downloadable":false,"purchase_url":null,"label_id":null,"purchase_title":null,"genre":null,"title":"Munching at Tiannas house","description":null,"label_name":null,"release":null,"track_type":"recording","key_signature":null,"isrc":null,"video_url":null,"bpm":null,"release_year":null,"release_month":null,"release_day":null,"original_format":"m4a","license":"all-rights-reserved","uri":"https://api.soundcloud.com/tracks/13158665","user":{"id":3699101,"kind":"user","permalink":"alex-stevenson","username":"Alex Stevenson","last_modified":"2011/06/13 23:58:44 +0000","uri":"https://api.soundcloud.com/users/3699101","permalink_url":"http://soundcloud.com/alex-stevenson","avatar_url":"https://i1.sndcdn.com/avatars-000004193858-jnf2pd-large.jpg"},"created_with":{"id":124,"kind":"app","name":"SoundCloud iOS","uri":"https://api.soundcloud.com/apps/124","permalink_url":"http://soundcloud.com/apps/iphone","external_url":"http://itunes.com/app/soundcloud"},"permalink_url":"http://soundcloud.com/alex-stevenson/munching-at-tiannas-house","artwork_url":null,"waveform_url":"https://w1.sndcdn.com/fxguEjG4ax6B_m.png","stream_url":"https://api.soundcloud.com/tracks/13158665/stream","playback_count":5315,"download_count":134,"favoritings_count":2,"comment_count":3,"attachments_uri":"https://api.soundcloud.com/tracks/13158665/attachments","policy":"ALLOW"}')
    end

    scenario 'viewing tracks that been added' do
      visit '/tracks'
      expect(page).to have_content{@track.jsonObject}
      puts @track.jsonObject['title']
    end

    # scenario 'adding track to database' do
    #   visit '/tracks'
    #   sign_up
      
    #   expect(page).to have_link '+'
    #   click_link '+'
    #   expect(page).to have_content 'Added'
    #   expect(current_path).to eq('/tracks')
    # end
  end
end