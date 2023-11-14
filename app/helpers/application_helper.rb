module ApplicationHelper
  def directus_image(id:, alt:)
    "<img src='#{Rails.configuration.x.directus.url}/assets/#{id}' alt='#{alt}'>"
  end
end
