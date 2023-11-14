require 'net/http'

class CmsService
  def initialize
    @http = Net::HTTP.new(Rails.configuration.x.directus.url, 443)
  end

  def articles
    self.send_graphql <<-GQL
    query {
      articles {
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
    JSON.parse @http.post('/graphql/system', query).body
  end
end