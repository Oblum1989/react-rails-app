Rails.application.routes.draw do
  get '/health', to: 'health#health'
  
  namespace :api do
    namespace :v1, default: { format: 'json'} do 
      get 'things', to: 'things#index'
      resources :comments
      resources :posts
      resources :stores
    end
  end
  
  get '*page', to: 'static#index', constrains: ->(req) do 
    !req.xhr? && req.format.html?
  end
  
  root 'static#index'
end
