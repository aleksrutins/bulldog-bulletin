class HomeController < ApplicationController
  def index
    @articles = CmsService.new.articles
  end
end
