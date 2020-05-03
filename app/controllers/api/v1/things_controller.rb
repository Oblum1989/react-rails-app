class Api::V1::ThingsController < ApplicationController 
  def index
    render json: { :things => [
      {
        :name => 'some-thing',
        :guid => '31848135-5168-1561-15168'
      },
      {
        :name => 'some-thing-else',
        :guid => '31848135-5168-1561-15168'
      }
    ] }.to_json
  end
end