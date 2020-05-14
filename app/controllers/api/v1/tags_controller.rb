class Api::V1::TagsController < ApplicationController
  def index
    @tags = Tag.all
    render json: @tags, status: :ok
  end

  def create
    @tag = Tag.new(create_params)
    if @tag
      render json: @tag, status: :created
    else
      render json: @tag.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render json: {message: 'Successfully deleted'}
  end

  private
    def create_params
      params.require(:tag).permit(:name)
    end
end
