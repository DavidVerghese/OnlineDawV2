class CommentsController < ApplicationController
  before_action :authorize_request, except: [:index, :show]
  def index
    @comments = Comment.all
    render json: @comments
  end
  def show
    @comment = Comment.find(params[:id])
    render json: @comment
  end
  def create
    @user = User.find(comment_params[:user])
    @post = Post.find(comment_params[:post])
    @content = comment_params[:content]
    @comment = Comment.new(content: @content,user:@user,post:@post)

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end
  def update
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
    render json: @comment
  end
  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end
  private
    def set_comment
      @comment = Comment.find(params[:id])
    end
    def comment_params
      params.require(:comment).permit(:content, :user,:post)
    end
end