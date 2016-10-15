Rails.application.routes.draw do
  scope '/api' do
    resources :agencies
  end
  root "static#index"
  get '*other', to: 'static#index'
end
