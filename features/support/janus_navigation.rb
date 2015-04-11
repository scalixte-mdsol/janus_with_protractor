module JanusNavigation
  SELECTOR_MAPPING={}
  Dir[File.join(Rails.root, 'features', 'support', 'locators', '*.yml')].each { |file| SELECTOR_MAPPING.merge!(YAML.load(File.open(file))) }
  CONFIG_MAPPING = YAML.load(File.open(File.join(Rails.root, 'features', 'support', 'config.yml')))

end
World(JanusNavigation)
