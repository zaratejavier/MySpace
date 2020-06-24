class Api::PostsController < ApplicationController
  # before_action :set_post, only: [:show, :update :destroy]

  def index
    render json: Post.all
  end

  def get_current_user
    render json: current_user
  end

  def show
    # render :json @post
  end

  def update
  end

  def create
  end

  

  def new
  end

  # private 
  # def set_post
  #  @post = Post.find(params[:id])
  # end

  # def post_params
  #   params.require(:post).permit(:name, :text, :avatar)
  # end
end
