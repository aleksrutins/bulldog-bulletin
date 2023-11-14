require 'net/http'

class CmsService < BaseService
  def initialize
    port = Rails.configuration.x.directus.port || 443

    @http = Net::HTTP.new(Rails.configuration.x.directus.host, port)
    @http.use_ssl = true if port == 443
  end

  def articles
    self.send_graphql <<-GQL
    query {
      article {
        id
        title
        user_created {
          first_name
          last_name
          avatar {
            id
          }
        }
      }
    }
    GQL
  end
  
private
  def send_graphql(query)
    puts query
    JSON.parse @http.post('/graphql/system', {:query => query}.to_json, { 'Content-Type' => 'application/json' }).body
  end
end