require_relative File.join(Rails.root, 'features', 'support', 'page.rb').to_s
require 'memoize'

module JanusHelper
  class Imedidata < Page
    # include Memoize
    def self.visit
      page.visit JanusNavigation::CONFIG_MAPPING['apps']['login']
      new
      # self.memoize(:mapper)
    end

    def login
      selector, config = mapper
      selector = selector['Sign In']

      fill_in selector['username']['label'], with: config['username']
      fill_in selector['password']['label'], with: config['password']
      click_button selector['submit']['text']
    end

    def logout
      selector, config = mapper
      selector = selector['Header']

      within selector['section']['panel'] do
        click_link config['username']
        page.find(selector['logout']['link'],visible: true).click
      end
    end

    private

    def mapper
      @selector ||= JanusNavigation::SELECTOR_MAPPING['Imedidata']
      @config ||= JanusNavigation::CONFIG_MAPPING['apps']
      return @selector, @config
    end
  end
end
World(JanusHelper)
