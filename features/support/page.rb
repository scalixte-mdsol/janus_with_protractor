require 'rspec/expectations'
require 'capybara/cucumber'
module JanusHelper
  class Page
    extend Capybara::DSL
    include Capybara::DSL

    def refresh
      page.visit page.current_path
    end
  end
end
World(JanusHelper)
