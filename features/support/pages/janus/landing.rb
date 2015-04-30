require_relative File.join(Rails.root, 'features', 'support', 'page.rb').to_s

module JanusHelper
  class Landing < Page
    def self.visit
      page.visit JanusNavigation::CONFIG_MAPPING['apps']['landing page']
      new
    end
  end
end
World(JanusHelper)
