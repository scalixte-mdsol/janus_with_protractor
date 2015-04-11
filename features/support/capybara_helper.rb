require 'capybara/cucumber'

begin
  Capybara.default_driver = :selenium
  Capybara.default_selector = :css
  Capybara.default_wait_time = (ENV['CAPYBARA_WAIT_TIME'] || 10).to_i
  Capybara.run_server = false
  # Capybara.host = 'https://login-validation.imedidata.net/login'
end
