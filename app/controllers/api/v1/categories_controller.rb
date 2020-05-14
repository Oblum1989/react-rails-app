class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories, status: :ok
  end

  def create
    @category = Category.new(create_params)
    if @category
      render json: @category, status: :created
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    render json: {message: 'Successfully deleted'}
  end

  private
    def create_params
      params.require(:category).permit(:name)
    end
end
