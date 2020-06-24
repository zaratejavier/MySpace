class Api::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def update
  end

  def create
  end

  def show
  end

  def new
  end
end
