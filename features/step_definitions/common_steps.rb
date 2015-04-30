And /^I visit the ([^"]+) page for ([^"]+)$/ do |page, app|
  eval("JanusHelper::#{page.capitalize}.visit")
end

And /^I log out from the ([^"]+) page$/ do |page|
  eval("JanusHelper::#{page.capitalize}.new.logout")
end