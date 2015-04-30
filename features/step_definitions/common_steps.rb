And /^I visit the ([^"]+) page for ([^"]+)$/ do |page, app|
  eval("JanusHelper::#{page.capitalize}.visit")
  # JanusHelper::Landing.visit
  # JanusHelper.send("#{page.capitalize}").visit
  # JanusHelper::send(("#{page.capitalize}").class).visit
  sleep 20
end