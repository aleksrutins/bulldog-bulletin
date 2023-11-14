class HomeController < ApplicationController
  def index
    @articles = CmsService.articles
  end
end
