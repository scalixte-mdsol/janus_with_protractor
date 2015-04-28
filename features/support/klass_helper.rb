begin
  require_relative File.join(Rails.root, 'features', 'support', 'page.rb')
  Dir[File.join(Rails.root, 'features', 'support', 'pages', '**', '*.rb')].each { |file| require file }
rescue
  LoadError
end

