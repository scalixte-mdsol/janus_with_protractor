require_relative File.join(Rails.root, 'features', 'support', 'page.rb').to_s

module JanusHelper
  class Imedidata < Page
    def self.visit
      page.visit JanusNavigation::CONFIG_MAPPING['apps']['login']
      new
    end

    def login
      selector, config = mapper

      fill_in selector['username']['label'], with: config['username']
      fill_in selector['password']['label'], with: config['password']
      click_button selector['submit']['text']
    end

    private

    def mapper
      return JanusNavigation::SELECTOR_MAPPING['Imedidata']['Sign In'], JanusNavigation::CONFIG_MAPPING['apps']
    end
  end
end
