Given /^I login to the iMedidata page$/ do
  JanusHelper::Imedidata.visit.login
  expect(page.current_url).to include(JanusNavigation::CONFIG_MAPPING['apps']['imedidata'])
end
