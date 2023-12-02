from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

transport = AIOHTTPTransport('https://bulldog-bulletin-production.up.railway.app/graphql')
client = Client(transport=transport, fetch_schema_from_transport=True)

def exec(query: str):
    return client.execute(gql(query))

def everything():
    return exec("""
    query {
        articles(filter: {
            status: {
            _eq: "published"
            }
        }) {
            id
            author
            date_created
            date_updated
            published_at
            title
            categories
            summary
            content
            issue
            column {
                name
                id
                description
            }
        }
    }
    """)

