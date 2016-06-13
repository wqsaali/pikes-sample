require File.expand_path('../boot', __FILE__)

require 'rails/all'
Bundler.require(*Rails.groups)


module ReactRails
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true
    config.to_prepare do
      DeviseController.respond_to :html, :json
    end
  end
end
